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

**Link to work:** [this is the blueprint](./DJANGO/testapp/)

## Day 2: August 6th, 2022
#### (created my first django project and django application)
**Today's progress**

I have created my first django app and linked it explicitly to the main django project.
also I have gotten to learn about all the different python files created when you django-admin startproject and python manage.py startapp ...
**thoughts:**webpages in django are made up of applications, these apps are supposed to be linked explicitly with the main django application; for this you have to edit the settings.py :
open the settings.py scroll down to the list of installed applications and add the app on top .

## Day 3: August 7th, 2022
#### (hands on with django app views and urls)
**today's progress**
I have created and served my first application page to the web browser
I created a view on the views.py which accepts http requests and gives a response
the function created in the views is then imported into the newly created urls.py
you sync this urls.py with the project level urls.py
**thoughts:** Django works on request a view the url delivers it to you
so it is url -> view -> model(incase)-> template