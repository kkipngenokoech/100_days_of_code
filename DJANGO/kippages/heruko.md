**how to create an app in heruko:**

• create a new app on Heroku and push our code to it
• add a git remote “hook” for Heroku
• configure the app to ignore static files, which we’ll cover in later chapters
• start the Heroku server so the app is live
• visit the app on Heroku’s provided URL

**steps:**
1. create a new app : heroku create
2. add hook: heroku git : remote -a name of your heroku app
3. configure to ignore static files: heroku config:set DISABLE_COLLECTSTATIC=1
4. push our code to heroku(the hook we setup before): git push heroku master
to make our heroku app online: heroku ps:scale web=1
5. heroku open