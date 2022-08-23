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



## TESTS
here we test our models and views



# FORMS
forms help us interact with the users.  A user can create,edit,delete any of their blog entries.
STEP 1:
    update the base.html so as to show the link to the new post section
STEP 2:
    add a new urlconfig for the view we are going to create
STEP 3:
    create a view for the url we just configured
STEP 4:
    finally create a template for our view
N/B (the url -> view -> template model we've been talking about)

## contents of our post_new.html template
1. of course we have to inherit pr extend the content of the base.html
2. we are sending data to the so we use POST method
3. csrf_token : it helps prevents our form from cross-site scripting attacks
4. to output form data you form.as_p that renders it in paragraph
5. Finally specify an input type of submit and assign it the value “Save”.


# USER AUTHENTICATION
whenever you create a new project, by default django installs the auth app , which provides us with a user object containing:
username
first_name
last_name
email

to use a default django login model:
1. add a project level url pattern for the auth system
2. login template(django is designed to automatically look into templates/registration for the login template)
3. a tweak on our settings.py file
