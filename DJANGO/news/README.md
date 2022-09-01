# custom django login system
# (dont forget template -> url -> view)
creating a custom django login system requires:
1. updating our [settings.py](./news_project/settings.py) - add the application as list of installed applications, we have to tell our django to use custom user model instead of the default user model inthere.( change AUTH_USER_MODEL user to users.CustomUser since it exists within our users app)_
2. creating a [custom user model](./users/models.py)
    our model is called CustomUser
    it extends existing AbstractUser.
    we also introduce a custom field age
3. update [admin.py](./users/admin.py)
    Admin is tightly coupled to default UserModel, we need to extend it to our new customusermodel
4. create a new form for UserCreationForm and UserChangeForm

finally run python manage.py makemigrations users
and python manage.py migrate

# CREATE A SUPERUSER ACCOUNT
python manage.py createsuperuser


# USER AUTHENTICATION
We need to give the user the ability to sign up, log in and log out
Django provides us everything for logging in and loggin out 
    it will look for the template in the registration folder.
    update the [settings.py](./DJANGO/news/news_project/settings.py) to check for our templates in project level directory
    we need to tell django where to redirect us upon successful login or logout
    for login - LOGIN_REDIRECT_URL = 'home'
    for logout - LOGOUT_REDIRECT_URL = 'home', this two lines are added to our [settings.py](./news_project/settings.py)
it's only the sign up that we need to work on

# URLS
### (app-level urls)
1. import our views (created/yet to be created)
2. set route paths
3. name each urls path

# TESTS
we need to write tests for:
    home(urls, templates, views)
    sign up(urls, templates, views)
    # this other two are django inbuilt and they rely on internal views and url routes
    log in
    log out

[tests](./pages/tests.py)
in testing we test three things
    1. the page exists and returns a HTTP 200 status code
    2. the page users the correct url name in the view
    3. the proper template is being used


## BOOTSTRAP
there are two ways of adding bootstrap to our applications
1. downloading all the files and adding them locally to our server
2. using CDN(Content Delivery Network)
Bootstrap comes with the following starter templates:
    Bootstrap.css
    Jquery.js
    Popper.js
    Bootstrap.js

## signup page
in our sign up page there are some extra text that show up and we need to clean it in one of the following ways:
    override the existing help_text
    hide the help_text
    restyle the help_text
#### restyling the help_text
we need the help_text and so we are going to restyle it.

#### using crispy in our sign up page
1. load the crispy tags
    {% load crispy_forms_tags %}
2. then replace form.as_p with form| crispy

## PASSWORD CHANGE and RESET
we need the user to have the ability to change and reset password via email
as django providing us the views and urls for login and logout ; it does so too with django password change and reset
we need to customize the views though
on customization, django provides views and urls for us so we need to just create new templates
#### reset
django does the heavy lifting for us, and so all we need is to tell django how to send the emails.
for this we are going to use the email service called SendGrid, but to test our email sending services we are going to use Django-console backend - this sends the email to our console instead
this email reset config  is going to be updated in our settings.py project
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend' 
we need to customize the page thats being served to us we need to reset our password 
and for that we are going to create four new html templates in our registration folder

## customizing emails
we import a couple of tags in our [custom email](./templates/registration/password_reset_email.html)
1. i18n - this text is eligble to be converted to several languanges
2. then we greet the user in the second line.
3. and ask him/her to reset his/her password
4. to update our subject line for our emails we create a [password_reset_subject file](./templates/registration/password_reset_subject.txt)

## AUTHORIZATION
it restricts access, and limits the things a user can do in our application.
Django does the heavy lifting for us here too.
1. ## author 
we need the user to be set automatically - when one is creating a blog, it should be set automatically to the current logged in user.
for this we are going to customize our CreateView - generic view.
in the ArticleCreateView we are going to remove the author field and set it automatically via form_valid method.

2. ## using mixin
LoginRequiredMixin - it restricts access only to logged-in users
we import this method in our [view](./articles/views.py), and add it to the left of our CreateView in our ArticleCreateView so that it first checks if the LoginRequiredMixin for login authorization.
    from django.contrib.auth.mixins import LoginRequiredMixin
so when we want to add a new article, it redirects us to the login template

3. ## update/delete view
the act of updating and deleting views as by now, is restricted to logged in users now, but we need to restrict that further for the authors only.
we need to first check if the author is the same person currently logged in.
we are going to import the PermissionDenied which will enable use the dispatch() methods.
    from django.core.exceptions import PermissionDenied
    then add the dispatch method in both the editing and deleting views.

## comments
we need to enable users to be able to add comments to a blog
we can do this in two ways:
    1. create a page fully dedicated for the pages - and then link it to our articles
    2. create a new model to our articles app and link it to our articles through foreign keys.
the foreign key is normally basically the name of the model it links to.
in our [model file](./articles/models.py)  check on the class model.
our model will have:
    a foreign key linking to our article
    a comment to hold our comment
    and a author to tell us who wrote the comment
it will also have two methods:
    __str__ to return the comment
    get_absolute_url - to return us to the main articles/page
we always have to make a migration when we make changes to our model and apply the migrations.
as we make these migrations, specify where the change has happened as in which app i.e
    python manage.py makemigrations articles
    python manage.py migrate
Every other time you create a model you have to register it in your [Admin.py](./articles/admin.py)