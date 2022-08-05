This is a repo for all my django projects I will be building in this 100 days of code
## day 1 - setting up the environment for django project
1. you must have python installed in your machine, use python3 --version to check if it is already installed else install python
2. virtual environment - You should use a dedicated
virtual environment for each new Python project. we use pipenv for this : to install pipenv you pip3 install pipenv
3. and also Django should be installed; here we use pipenv we earlier installed to set django up pipenv install django
4. to start the new project environment you have to pipenv shell
5. finally run a testproject by : django-admin startproject testapp . (it is important to add that dot at the end so as no new directory is created)
6. finally to test if your application is working run python manage.py runserver
7. THATS DAY 1
<--follow along in the testapp directory-->