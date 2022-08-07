## welcome to the pages app
here we are going to work through all the changes in the app necessary.
**step 1**
this is an app and so we must add it to the our external project so as for it to be recognized as part of the applications.
go to our hellomultiverse directory and open settings.py scroll down to installed apps ; you will see default apps there, add our new application on top(order matters, so ensure it is on top)


**step 2**
## views and urlconfigs
views determine what content is displayed whereas url configs determine where the contents are send
**django request/response cycle*
URL -> VIEW -> MODEL -> TEMPLATE
