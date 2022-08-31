this is all about the articles application.
    python manage.py startapp articles - command to create the app
add our new application to the list of installed apps in the project level settings.py
    'articles.apps.ArticlesConfig' - add it to INSTALLED_APPS
our articles are going to be timestamped, add your [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) at the end of [settings.py](../news_project/settings.py)
    TIME_ZONE = 'Africa/Nairobi' - line to be added.
We need to  define our database model:
 ## DATABASE MODELS
 our first [model](models.py):
    it has title, body, date, Author.
    for title and body the user has to input that himself.
    django sets the date and time for use automatically.
    Author we reference our Custom user model
after creating our models, we can now make migrations:
    python manage.py makemigrations articles
    python manage.py migrate

## ADMIN
we need to update our [admin](admin.py), so that our app appears
    admin.site.register(Article) - you import the model Article.

## URLs AND views
#### urls
we want our article app to appear under 'article/'
[project-level urls](../news_project/urls.py)
    so let us add the urls to our articles in our project-level [urls file](../news_project/urls.py)
    add this line:
    path('articles/',include('articles.urls')) in projects-level [urls](../news_project/urls.py)
[app-level urls](./urls.py)
    we need to create a new [urls.py](./urls.py), touch urls.py
    in our created [urls file](./urls.py), we need to import the following:
        path - path is used to route urls to the appropriate view functions within a django application using the URL-dispatcher, this function is contained within the django.urls module
            from django.urls import path - line to be written.
        views - this is a class or function that takes a web-based request and return a web response.the request is normally sent to our [urls.py](./urls.py), then the urls check which path is matched to which [view](./views.py) and sends the urls to that view.
        N/B: django has two types of views: class-based views and function-based views.
            from .views import ArticleListView
            ArticleListView is our yet to be created view.
URL-PATTERNS
    now we need to configure urls with the views
    path('',ArticleListView.as_view(),name='article_list) - '' means it will be displayed when 'article/' page is requested; as_view() is the main entrance-point in the request-response cycle in case of generic views. it connects our [urls](./urls.py) to our [views](./views.py); name is an optional parameter but very important one, it acts as a place holder or primary key for that matter so that if we need to reference this path we just {% url 'article_list' %}
#### views
we are going to use generic views. - listView
    generic views : these are blueprints for common functions that are undertaken in our day to day interactions with websites and applications: from listing items, registering users to resetting password and any other mundane tasks we normally do.
    for this particular app we are going to import the ListView since we need to list the articles
        from django.views.generic import ListView
models
    since we are going to import articles from the database we need to import the model
        from .models import Article - model imported