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