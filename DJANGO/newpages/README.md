start of new project newpages
pageapp directory is an app
## steps after setting the base for the django projects
1. ensure that your newly made app(pageapp) is recognized at the base application/project (newpages):
    to do this, you cd into the project directory,settings.py, add the pageapp into the list of installed apps(at the top)
when you run the python manage.py runserver it should serve you the django template
## working with templates in django
html pages are served to the web in django through a view via a url
Generic(template -> views -> urls)- this pattern holds for every Django web page you make
## templates location
 our templates would be found in the project directory
 you make a directory for all templates in your projects
 by default, django only looks at the pageapp directory to search for the templates and so we need to tweak our settings.py file to allow django look at our project-level directory
 in your settings.py: move to templates[]:
    then in the 'DIRS:', there's an empty list[], replace it with 
    [os.path.join(BASE_DIR, 'templates')],
    