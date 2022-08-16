## INTRODUCTION
build a Blog application that allows users to create, edit, and delete
posts. The homepage will list all blog posts and there will be a dedicated detail page
for each individual post.
## DATABASE CONFIGURATION
1. first you create the database model in models.py
    (shading light more on this process on a later post)
2. migrate the record for it to make changes in our database model
    (python manage.py makemigrations nameoftheapp(blog) then python manage.py migrate blog)
3. this then, if success allows us to have validation that our database is configured