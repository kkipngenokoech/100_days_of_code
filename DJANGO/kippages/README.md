this is a readme for kippages app
## creating templates / adding templates
the process of creating templates or pages to be served to html is pretty the same way; it follows the syntax shown below:
    * create a new template file (about.html)
    * create a new view (views.py- define an extra function )
    * add a new url route


## creating tests for checking how our web pages are served
as our application grows, we won't be checking manually if all the web pages are served, so we need to write our [tests](./pageapp/tests.py)
you do this by checking the status code of the page and the 200 status okay.
since our application only has two pages, we create a class with two methods to check the status code.

we shall revisit tests.py in a more advanced project .

# hosting the application
this is almost towards the last part of finishing up with your application
we are going to use heroku to host our application
the guide on how to install [heroku is here](https://devcenter.heroku.com/articles/heroku-cli)

in your [pipfile](./Pipfile), check the python version present there and map it in the python_version there

then you run pipenv lock, to generate an appropriate pipfile.lock

next we create a procfile specific to heroku **touch procfile*
then add this in it **web: gunicorn pages_project.wsgi --log-file -* inside it.(pages_project is the name of your project for our case is kippages) ,  this redirects the app from local server to gunicorn server

run pipenv install gunicorn, thats the server we are going to use

the final step we are going to do is change the line of allowed hosts in our settings python to allow the hosts/domain names our sites can serve
