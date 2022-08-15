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
**N/B:** if you ran into this error:To https://git.heroku.com/glacial-chamber-82324.git ! [remote rejected] main -> main (pre-receive hook declined) error: failed to push some refs to 'https://git.heroku.com/glacial-chamber-82324.git'
**solution:** create a new branch and push your code again
thats to say: 
    1. git checkout -b name_of_your_branch
    2. git push heroku name_of_your_branch