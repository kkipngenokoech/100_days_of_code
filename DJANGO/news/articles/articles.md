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
