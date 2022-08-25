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