## INTRODUCTION
build a Blog application that allows users to create, edit, and delete
posts. The homepage will list all blog posts and there will be a dedicated detail page
for each individual post.
## DATABASE CONFIGURATION
1. first you create the database model in models.py
    (shading light more on this process on a later post)
2. migrate the record for it to make changes in our database model
    (python manage.py makemigrations nameoftheapp(blog) then python manage.py migrate blog)
3. this then, if success allows us to have validation that our database is configured

## CREATING A SUPERUSER
python manage.py createsuperuser
this is the admin of the app.

## ADMIN.PY
we created a database model and so we have to update our admin.py to recognize the database, reference [admin.py](./blog/admin.py)

## SHARING OUR BLOGS
now that we have our database with our blogs, we need to service them to the web application
1. first configure our project-level urls and app-level urls
    i) touch blog/urls.py
    ii)import your view into it
    iii)update project level urls.py so as to redirect traffic to the app urls
2. creating the views that are going to be served
    we are going to use class-based views here(one can also use functional based views)
    check [views](./blog/views.py) for the implementation of the views

## TEMPLATES
1. create a project-level directory template directory
2. create a template( home and base ), html templates.
3. update your project-level settings.py so as to know where to look for the templates (DIRS: [os.path.join(BASE_DIR, 'templates')])
4. update the html files in the template

## STATIC FILES
this includes the Js and Css files
this files helps us design our websites
In a production-ready Django project you would typically store this on a Content
Delivery Network (CDN) for better performance, but for our purposes storing the
files locally is fine.
so steps include:
1. create a project-level static folder/directory
2. update our prpject-level settings.py to tell it where to find our static files
3. go to [settings.py](./blog_project/settings.py)
4. in the STATICFILES_DIRS add this line [os.path.join(BASE_DIR, 'static')]
5. create a css file in the [css directory](./static/css/base.css)
6. then extend it to [base file](./templates/base.html) which will inturn extend it to the other html documents
