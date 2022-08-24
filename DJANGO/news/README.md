# custom django login system
creating a custom django login system requires:
1. updating our [settings.py](./news_project/settings.py) - add the application as list of installed applications, we have to tell our django to use custom user model instead of the default user model inthere.( change AUTH_USER_MODEL user to users.CustomUser since it exists within our users app)_
2. creating a custom user model
3. update [admin.py](./users/admin.py)
4. create a new form for UserCreationForm and UserChangeForm