# 100 Days Of Code - Log

### Day 0: August 4th, 2022
##### (blueprint)

**Today's Progress**: identified the resources that will guide me do my first 30 days thats with django python

**Thoughts:** the first 30 days, I will do django based projects, then the next 30 days I will spent it doing react based projects, the other 30 I will spend doing ruby on rails based projects.

**Link to work:** [this is the blueprint](http://www.example.com)

## Day 1: August 5th, 2022
##### (setting up environment for a django work)

**Today's Progress**: 
Setting up the environment for django applications

**Thoughts:**you need a virtual environment to run specific django applications; you also need django installed on those directories where you will build your django apps;to run or start an environment on the apps you run pipenv

**Link to work:** [testapp](./DJANGO/testapp/)

## Day 2: August 6th, 2022
#### (created my first django project and django application)
**Today's progress**

I have created my first django app and linked it explicitly to the main django project.
also I have gotten to learn about all the different python files created when you django-admin startproject and python manage.py startapp ...

**thoughts:**webpages in django are made up of applications, these apps are supposed to be linked explicitly with the main django application; for this you have to edit the settings.py :
open the settings.py scroll down to the list of installed applications and add the app on top .

**Link to work:** [urls](./DJANGO/hellomultiverse/hello/urls.py/)


## Day 3: August 7th, 2022
#### (hands on with django app views and urls)
**today's progress**
I have created and served my first application page to the web browser
I created a view on the views.py which accepts http requests and gives a response
the function created in the views is then imported into the newly created urls.py
you sync this urls.py with the project level urls.py

**thoughts:** Django works on request a view the url delivers it to you
so it is url -> view -> model(incase)-> template

**Link to work:** [views](./DJANGO/hellomultiverse/hello/views.py)

## Day 4: August 8th, 2022
#### (recap of the last three days by creating the baseline of the new project newpages)
**today's progress**
1. created a new project - newpages
2. took sometime but I now know the commands off the book
3. the steps include:
    create a directory(mkdir pages)
    cd into the directory(cd newpages)
    pipenv an environment (thats pipenv install django)
    run the environment(pipenv shell)
    create a django project(django-admin startproject pages .)
    create an app(python manage.py startapp pageapp)
    exit the environment(exit)
with this you are all set to start your django project

**thoughts:**that dot we include at the end of django-admin startproject is really important to avoid redundunacy of directories being created
             ensure you are working on the environment for the right application lest you mess up the environments, that's the point of creating all this environments

**Link to work:** [pageapp](./DJANGO/newpages/pageapp/)

## Day 5: August 9th, 2022
#### (using templates in django)
**today's progress**
1. created a django template in index.html
2. updated the settings.py to reroute django to check for templates in the django project-level directory(you do this by finding the templates[], and update 'DIRS': [] to this line 'DIRS': [os.path.join(BASE_DIR, 'templates')],)
3. index.html has html content to it

**thoughts:**every web page that you are going to serve to the web is in form of htmls, the generic model to do this is: template -> views -> urls (this pattern holds for every Django web page you make)

**Link to work:** [templates](./DJANGO/newpages/templates/)

## Day 6: August 10th, 2022
#### (serving templates to the web)
**today's progress**
1. added the template view to the views.py
2. added the view to urls.py
3. upon running the server, I got an error of :
    "TemplateResponseMixin requires either a definition of 'template_name' or an implementation of 'get_template_names()'"
4. I will come back later and work on this since I have not found the solution yet to it

**thoughts:**I have no thoughts today, I have encountered an error, and until I solve it, I don't, it is something to do with how I am serving my webpages, but I will be back to this

**Link to work:** [views.py](./DJANGO/kippages/pageapp/views.py)