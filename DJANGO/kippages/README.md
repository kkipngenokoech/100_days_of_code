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