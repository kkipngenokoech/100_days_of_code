This is a repo for all my django projects I will be building in this 100 days of code
## day 1 - setting up the environment for django project
1. you must have python installed in your machine, use python3 --version to check if it is already installed else install python
2. virtual environment - You should use a dedicated
virtual environment for each new Python project. we use pipenv for this : to install pipenv you pip3 install pipenv
3. and also Django should be installed; here we use pipenv we earlier installed to set django up pipenv install django
4. to start the new project environment you have to pipenv shell(working from your enviroment)
5. finally run a testproject by : django-admin startproject testapp . (it is important to add that dot at the end so as no new directory is created)
6. finally to test if your application is working run python manage.py runserver
7. THATS DAY 1
<--follow along in the testapp directory-->

## day 2 - first django project - hellomultiverse
**prerequisites**
make directory(mkdir hellomultiverse)
crete a virtual environment(pipenv install django)
run the virtual environment(pipenv shell)
create a project (django-admin startproject hellomultiverse .)

**django-admin startproject hellomultiverse**
--this command creates a couple of files and a directory and the files are as follows:
1. settings.py
this one controls all our settings that are related to this application
2. urls.py
this tells django which pages to build in response to a browser or url request
3. wsgi.py (web service gateway interface)
helps Django serve our eventual web pages.
4. manage.py
it is used to execute various Django commands such as creating a new application or running the local web server
**django apps**
webpages in django are inform of applications and we are going to create and link one right now
the command to create apps is (python manage.py startapp --name of the app--)
this command creates a couple of files too so cd into the directory we talk through it
1. admin.py - a built in configuration file for django admin app
2. apps.py - configuration file for the app itself
3. migrations/ - it helps keep track of our models.py so that our database stay in syc with models.py
4. models.py - it is where we define our database models - django automatically translates this to database tables
5. tests.py - this is for this app's specific tests
6. views.py - it's where we handle the request/response logic for our web app.
for every created application you must add it explicitly to the list of installed application in settings.py- how to do this is found in the README.md for the individual apps.

## day 2 - first django app views - hellomultiverse/hello
look into the README.md for hello page for more information on day 3
**Link to work:** [this is the blueprint](./DJANGO/hellomultiverse/hello/urls.py/)