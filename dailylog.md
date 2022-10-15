# 100 Days Of Code - Log
DJANGO COMMON PATTERN : view -> url -> template
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

**Link to work:** [testapp](./DJANGO/testapp/)

## Day 2: August 6th, 2022
#### (created my first django project and django application)
**Today's progress**

I have created my first django app and linked it explicitly to the main django project.
also I have gotten to learn about all the different python files created when you django-admin startproject and python manage.py startapp ...

**thoughts:**webpages in django are made up of applications, these apps are supposed to be linked explicitly with the main django application; for this you have to edit the settings.py :
open the settings.py scroll down to the list of installed applications and add the app on top .

**Link to work:** [urls](./DJANGO/hellomultiverse/hello/urls.py/)


## Day 3: August 7th, 2022
#### (hands on with django app views and urls)
**today's progress**
I have created and served my first application page to the web browser
I created a view on the views.py which accepts http requests and gives a response
the function created in the views is then imported into the newly created urls.py
you sync this urls.py with the project level urls.py

**thoughts:** Django works on request a view the url delivers it to you
so it is url -> view -> model(incase)-> template

**Link to work:** [views](./DJANGO/hellomultiverse/hello/views.py)

## Day 4: August 8th, 2022
#### (recap of the last three days by creating the baseline of the new project newpages)
**today's progress**
1. created a new project - newpages
2. took sometime but I now know the commands off the book
3. the steps include:
    create a directory(mkdir pages)
    cd into the directory(cd newpages)
    pipenv an environment (thats pipenv install django)
    run the environment(pipenv shell)
    create a django project(django-admin startproject pages .)
    create an app(python manage.py startapp pageapp)
    exit the environment(exit)
with this you are all set to start your django project

**thoughts:**that dot we include at the end of django-admin startproject is really important to avoid redundunacy of directories being created
             ensure you are working on the environment for the right application lest you mess up the environments, that's the point of creating all this environments

**Link to work:** [pageapp](./DJANGO/newpages/pageapp/)

## Day 5: August 9th, 2022
#### (using templates in django)
**today's progress**
1. created a django template in index.html
2. updated the settings.py to reroute django to check for templates in the django project-level directory(you do this by finding the templates[], and update 'DIRS': [] to this line 'DIRS': [os.path.join(BASE_DIR, 'templates')],)
3. index.html has html content to it

**thoughts:**every web page that you are going to serve to the web is in form of htmls, the generic model to do this is: template -> views -> urls (this pattern holds for every Django web page you make)

**Link to work:** [templates](./DJANGO/newpages/templates/)

## Day 6: August 10th, 2022
#### (serving templates to the web)
**today's progress**
1. added the template view to the views.py
2. added the view to urls.py
3. upon running the server, I got an error of :
    "TemplateResponseMixin requires either a definition of 'template_name' or an implementation of 'get_template_names()'"
4. I will come back later and work on this since I have not found the solution yet to it
#### update on the error I encountered:

**what the code was supposed to do:** serve me a webpage having the line: first django template

**error:**" TemplateResponseMixin requires either a definition of 'template_name' or an implementation of 'get_template_names()'"

**line that was containing the error:** in the pageapp urls, the file we created , when configuring url patterns this is the line I had written:
    ```
    urlpatterns = [
    path('',HomePageView.as_view(),name='home'),
    ]
    ```
**updated line that fixed the error:** 
    ```
    urlpatterns = [
    path('',HomePageView.as_view(template_name="home.html"),name='home'),
    ]
    ```

[link to work](./DJANGO/kippages/pageapp/urls.py)

**thoughts:**I have no thoughts today, I have encountered an error, and until I solve it, I don't, it is something to do with how I am serving my webpages, but I will be back to this

**Link to work:** [views.py](./DJANGO/kippages/pageapp/views.py)


## Day 7 August 11th, 2022
#### (serving the about page to webpage)
**today's progress**
1. created an about.html template - purpose is to serve the about's page
2. created a view for the about's page in the views.py
3. routed the url of the view(AboutPageView) in the app's urls.py
4. upon running the server at [about](http://127.0.0.1:8000/about/), the page worked perfectly

**thoughts:** yesterday I encountered an [error](./dailylog.md),about template_name not defined, the solution to it is to pass a parameter into your as_view() method; that is to say: path('',HomePageView.as_view(template_name="(nameofthehtmltemplate for this case)home.html"),name='home')

**Link to work:** [urls.py](./DJANGO/kippages/pageapp/urls.py)

## Day 8 August 12th, 2022
#### (creating an 'NavBar' kinda template)
**today's progress**
1. created a new template [base page](./DJANGO/kippages/templates/base.html)
2. this template acts as a navigation bar
3. navigation bar is normally consistent across all the pages present in a website
4. it contains links to the other pages present in the app
5. visit the link below to see how they are called into the base.html and how the base page extends to the other pages.

**thoughts:** creating a navigation page in django is pretty easy, you just have a template on its own, write and style it up to your perfection and then extend it to the pages you have in your application.

**link to work:** [base bar](./DJANGO/kippages/templates/base.html)


## Day 9 August 13th, 2022
#### (automating tests in Django)
**today's progress**
1. in [tests](./DJANGO/kippages/pageapp/tests.py), we have added a new class, with two methods.
2. Each method is designed for each of our two pages [home](./DJANGO/kippages/templates/home.html) and [about](./DJANGO/kippages/templates/about.html)
3. It gets the status code of the client side
4. Then compares it with status 200 
5. Returns true if it passes the code.

**thoughts:** writing tests code, can really save you a lot of time, because you don't have to manually check your pages if they are being served to the client

**link to work:** [tests](./DJANGO/kippages/pageapp/tests.py)

## Day 10 August 14th, 2022
#### (deployment of the application)
**today's progress**
1. the site to use for deployment is heroku
2. the directions and commands on how to done the deployment are found in [heruko](./DJANGO/kippages/heruko.md)
3. I haven't succeded yet, encountered an error:     Couldn't find that process type (web). when I run heroku ps:scale web=1

**thoughts:** I have to take a break before this deployment stage bursts me up, I will work on it tomorrow

**link to work:** [procfile](./DJANGO/kippages/Procfile)

## Day 11 August 15th, 2022
#### (start of a new project)
**today's progress**
1. basic layout of the message_board_app
2. blog : name of the directory
3. blog_project : name of the blog projects
4. blog : name of the apps
5. add the created app in the list of installed apps in project level

**Thoughts:** it is the start of a project with backend servers.

**link to work:** [django base setup](./DJANGO/blog/blog/)


## Day 12 August 16th, 2022
#### (database models + views + urls + templates)
**today's progress**
1. created a [database model](./DJANGO/blog/blog/models.py)
2. created a [view](./DJANGO/blog/blog/views.py) to help serve the content
3. configured the [project level urls](./DJANGO/blog/blog_project/urls.py) and the [app level urls](./DJANGO/blog/blog/urls.py)
4. created [templates](./DJANGO/blog/templates/) to help on creation of the webpages

**thoughts:** Django is a really exciting framework, creating the databases is something really sweet

**link to work:** [django blog](./DJANGO/blog/)

## Day 13 August 17th, 2022
#### (static files, each blog with its page)
1. created a css file to help in styling
2. created a new view, linked it to url to help distribute our pages to individual blogs

**thoughts:** our page is shaping up, I have gotten the full idea / full picture of how the django works/framework view -> url -> template

**link to work:** [post page](./DJANGO/blog/templates/post_detail.html)

## Day 14 August 18th, 2022
#### (created tests cases for our files so far)
1. wrote test cases and imported modules into our [tests.py](./DJANGO/blog/blog/tests.py)

**thoughts:** I still need to learn the ropes of these django tests

**link to work:** [tests](./DJANGO/blog/blog/tests.py)

## DAY 15 August 19th, 2022
#### (working with forms)
1. I want a user to add there own blogs
2. so I first create a new url to link us to a view for creating the blog template
3. I then create the view
5. and finally the [template](./DJANGO/blog/templates/post_new.html) that is going to be served to the webpage

**thoughts:** I emphasized more on what is needed to create a django web page (url -> view -> template) and did a little introduction to forms.
right now I can comfortably create a webpage to be served into a webpage

**link to work:** [post form](./DJANGO/blog/templates/post_new.html)

## DAY 16 August 20th, 2022
#### (default login system)
1. created the base requirements for a django application
2. created a home.html page to be served when login is successful
3. created a superuser for the login justification
4. the default django login template works well and the project in genral

**thoughts:** Django by default has its own login model, and that's what I have used in this project, tomorrow I am going to use a customized view

**link to work:** [loginsystem](./DJANGO/loginsystem/)

## DAY 17 August 21st, 2022
#### (custom login system)
1. created a [customlogin project](./CustomLogin/)
2. created an [account app](./CustomLogin/accounts/)
3. this app has views for the login, registration and home page

**thoughts:** today's project has emphasized more the urls -> views -> template model django users.

**link to work:** [CustomLogin](./CustomLogin/)


## DAY 18 August 22nd, 2022
#### (delete and update post)
1. added a functionality for deleting and updating post
2. created templates, views and urls configuration for the above functionalities

**thoughts:** I have added functionalities to the app
**link to work:** [views](./DJANGO/blog/blog/views.py)

## DAY 19 August 23rd, 2022
#### (signup and login and hosting)
1. used the django login default has illustrated three days ago in day 16.
2. created a signview, imported the loginview
**thoughts:** hosting at heroku has been a challange to me upto now, I hope this finallly works


## DAY 20 August 24th, 2022
#### (custom login)
1. I created a django custom [login page](./DJANGO/news/README.md)
2. I created a superuser account
3. more  information about the creation of django custom login is found in this [README.md](./DJANGO/news/README.md)

**thougths:** working with a custom login in django is more inspiring since you have some little of freedom.

**link to work:** [news app](./DJANGO/news/)

## DAY 21 August 25th, 2022
#### (user signup/login/logout)
1. yesterday I created a custom login project (news)
2. Today I have added the ability for a user to sign up/ login /and logout
3. with this tested and verified the app newspaper is fine upto this place
4. the details and step by step procedure of how I did this is found in this [README](./DJANGO/news/README.md)

**thoughts:** a user can signup, sign in and log out of my news app. Django automatically looks for the login template in /registration

**link to work:** [signup page](./DJANGO/news/templates/signup.html)

## DAY 22 August 26th, 2022
#### (Bootstrap)
1. we need to style our pages/templates so as to be aesthetic
2. we are going to use bootstrap for this 
3. we are going to import this through this with CDN(content delivery network)
4. we need to import four things:

**thoughts:** styling our templates makes them look nice and so we are going to do this using bootstrap, the major heavy lifting has already been done for us.

**link to work:** [bootstrap](./DJANGO/news/templates/base.html)

## DAY 23 August 27th, 2022
#### (django-crispy-forms)
this is a third party package
lets pipenv install django-crispy-forms
we als need to install crispy bootstrap5 so as allow us to use bootstrap5 in our project
    pip install crispy-bootstrap5
add both crispy forms and the crispy-bootstrap5 to the list of installed apps ('crispy_forms','crispy_bootstrap5')
we should also add CRISPY_TEMPLATE_PACK = 'bootstrap4' and CRISPY_ALLOWED_TEMPLATE_PACKS = 'bootstrap5' at the bottom of our file

## DAY 24 August 28th, 2022
#### (django password reset)
1. many a times a user forgets his login password
2. django allows us to enable the user to reset his/her own password
3. and for this emails are sent to the user's emails
4. we are going to implement this using emails SendGrid
5. but first we want to test out the django Backend service which would send the email to our console instead
6. implementation of this is found in this [README](./DJANGO/news/README.md) and the templates created for this are found in the [registration](./DJANGO/news/templates/registration/) folder.

**thoughts:** django does the heavy lifting for us, all we need to do is to tell it were to send our emails, and for today we have ordered django to send it to our console using this line:
    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
tomorrow I am going to reroute it so that it sends it to the users personal email instead.

##  DAY 25 August 29th, 2022
#### (working with SendGrid)
1. created an account in [SendGrid](https://sendgrid.com/)
N/B : use a diffrent email with the ones you have signed up for in our applications.
2. we are going to configure our emails via SMTP.
3. we create an api
4. link it to our settings.py ; first update our EMAIL BACKEND  to use SMTP
    EMAIL_BACKEND  = 'django.core.mail.backends.smtp.EmailBackend'
5. add this additional lines below our email backend:

    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend' # - sends it via smtp
    EMAIL_HOST = 'smtp.sendgrid.net'
    EMAIL_HOST_USER = 'apikey'
    EMAIL_HOST_PASSWORD = 'paste your sendgrid password here'
    EMAIL_PORT = 587
    EMAIL_USE_TLS = True

**thoughts:** I need to be able to rely messages to users directly to their emails but it hasn't worked and so I need to restudy this concept of SendGrid well and do it again.

**link to work:** [SendGrid](dailylog.md)

## DAY 26 August 30th,2022
#### (configuration of sendgrid passwords and customzation of emails send to users)
1. my sendGrid is not working as it is supposed to do.
2. I have customized the emals being sent to the users though
3. I have to redo this last process of user authentication flow.

**thoughts:** emails are not being sent to the user, there's an opaque problem in this last part of user authentication flow otherwise the other parts are okay - that's signup/login/change password.

**link to work:** [custom emails](./DJANGO/news/templates/registration/password_reset_email.html)

## DAY 27 August 31st, 2022
#### (created a new application that will allow users add articles)
1. created a new app [(articles)](./DJANGO/news/articles/)
2. added the app to the list of [installed apps](./DJANGO/news/news_project/settings.py)
3. configured a new [database model](./DJANGO/news/articles/models.py)
4. made our database model recognizable by our [admin](./DJANGO/news/articles/admin.py)

**thoughts:** our articles application would automatically be updating on the time a blog is changed updated or created, that's why we used a timezone. for more information about our articles application, check out on this [articles README](./DJANGO/news/articles/articles.md)

**link to work:** [articles](./DJANGO/news/articles/)

## DAY 28 September 1st, 2022
#### (editing and deleting)
1. on today's working, I have added the functionality of editing and deleting the blogs
2. django framework is pretty easy - create a [url](./DJANGO/news/articles/urls.py), then create a [view](./DJANGO/news/articles/views.py) and then a [template](./DJANGO/news/templates/)

**thoughts:** We have created a dedicated [articles](./DJANGO/news/articles/) app with CRUD FUNCTIONALITY
    C - create
    R - read
    U - update
    D - delete
**link to work:** [articles](./DJANGO/news/articles/)

## DAY 29 September 2nd, 2022
#### (working with comments)
1. like every other blog user, they want a place to leave comments and so today I have added the functionality of a user to leave a comments
2. How to do that is found on this [readme](./DJANGO/news/README.md)
3. this is the end of my newspaper application.
4. what it remains of me is to try and solve the problem of hosting django apps which has been hailing me for the last three or so weeks

**thoughts:** Django is 99% beautiful web framework, I have  covered all
the major features of Django: templates, views, urls, users, models, security, testing,
and deployment. You now have the knowledge to go off and build your own modern
websites with Django

**link to work:** [Django](./DJANGO/)

## DAY 30 September 3rd, 2022
My django journey comes to a pause here, tomorrow I will start on react
N/B: there's a problem when it comes to hosting my django though and I need to work on that !

# EOF DJANGO
`this is the end of django and start of reactjs`
# REACT JS
## DAY 31 september 4th, 2022
#### (fundamentals of react js)
1. created a [react directory](./REACT/)
2.  React projects require node and npm installed.
    command to install node - `sudo apt install nodejs`
        command to confirm node version - `node --version`
    command to install npm(node package manager) - `sudo apt install npm`
        command to confirm npm version - `npm --version`
3. created a [react project](./REACT/hacker-stories/) called hacker-stories
    command used `npx create-react-app hacker-stories`
4. cd into the directory and run `npm run`
    this should lead you to a webpage that shows you that your react app is working fine.

**thougths:** React is a javascript framework created by facebook used for building user interfaces; mostly single-page applications.

**link to work:** [react directory](./REACT/)

## DAY 32 september 5th, 2022
#### (working with JSX)
1. JSX stands for javascript html
2. it is using both js and html together
3. this is enabled by the use of curly braces
4. Today I edited the content of [app.js](./REACT/hacker-stories/src/App.js) so that it displays content I have specifically told it to
5. I have also gotten to work with javascript variables and objects

**thoughts:** the homepage displayed when you first create a react app is found in the [app.js](./REACT/hacker-stories/src/App.js) and this is the page where your customization has to start. JSX elements are pretty useful here. JSX elements look much like html but with slight tweaks in its tags as it uses camelCase and so the way tags are displayed using html are slightly different to the way they are defined using JSX elements.

**link to work:** [app.js](./REACT/hacker-stories/src/App.js)

## DAY 33 september 6th, 2022
#### (creating your own react components and working with lists
1. I created a variable holding lists, just the common way you can in javascript.
    `const list = []`
2. I created a [react component](./REACT/hacker-stories/src/App.js) line 53. this component is going to help me break down functionalities of my app component.
3. to import one react component into another:
    `<Nameofthereactcomponent/>`

**thoughts:** you should not overload your react app component, breaking it down into smaller and more solid components can come in handy. larger applications have what we term as component hierarchies /trees where it has only one entry point -  that's root component.

**link to work:** [app.js](./REACT/hacker-stories/src/App.js)

## DAY 34 September, 2022
### (ReactDOM)
this acts as the bridge between html and our jsx files
it takes two arguments:
    1. the html item/the react component to be rendered.
    2. where it shall be rendered.

**thoughts:** DOM is Document Object Model - is a tree like structure that contain all the elements and it's properties of a website as its node. ReactDOM purpose is to display the specified HTML CODE inside the specified HTML element.

**link to work:** [index.js](./REACT/hacker-stories/src/index.js)

## DAY 35 september, 2022
## (React props)
global variables are globally available and can cause pollution
it is technically viable to be defined into the components and use props to be available to its child's components
you have to use props for it child to access the variables defined in the parent component.

**thoughts:**  Props are arguments passed into React components. Props are passed to components via HTML attributes. props stands for properties.

**link to work:** [props](./REACT/hacker-stories/src/App.js)

## DAY 36 september 9th, 2022
#### (playing around with react components)
1. I started a new react project
2. this was for the sole purpose of having playing around with react components
3. I created 4 [react components](./REACT/30-days-of-react/src/index.js)
4. placed all this react components in one larger [react component](./REACT/30-days-of-react/src/index.js)
5. I then exported or rendered this one large react component
6. I also imported an image into our index.html page.
7. created a component for it and rendered it into our index.html

**thoughts:** for a component having more than one jsx element to be complete, you must have a wrapper html element that encloses them all into one html element like <div> or <header> or <main> or any other.

**link to work:** [30-days-of-reactjs](./REACT/30-days-of-react/)

## DAY 37 september 10th 2022
#### (working with props)
today I started working with react props - properties indepth
props helps us to pass data into childs

**thoughts:** Instead of injecting data we can also pass the data as props. React props are similar to parameters in functions.

**link to work:** [props](./REACT/30-days-of-react/src/index.js)

## DAY 38 september 11th, 2022
#### (working with maps)
I didn't do much today honestly, but I introduced myself to mapping arrays in react
**thoughts:** In React, we use map to modify an array to list of JSX by adding a certain HTML elements to each element of an array.
**link to work:** [mapping](./REACT/30-days-of-react/)

## DAY 39 september 12 2022
#### (working with states)
1. created a whole new app to help me deal with react states
2. I am going to use this app to learn about react states.

**thoughts:** 
Image result for react states
What Is 'State' in ReactJS? The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders

**link to work:** [state](./REACT/state/)

## DAY 40 september 2022
#### (working with state)
I am still working on the react state component
today i have rendered a stateless view to help me understand why we need to use states in react

**thoughts:** if you want to know the road ahead, ask those who are coming back!

**link to work:** [stateless component](./REACT/state/src/components/Product/)

## DAY 41 september 2022
#### (finishing up on state)
Today my stateful react app is up and running. I have changed my stateless app from using object values to functions.

**thoughts:** Inside the anonymous function that you pass to setState(), make sure you reference the argument—state—and not the component’s state—this.state. Otherwise, you still run a risk of getting an out-of-date state object. The state in your function will be otherwise identical.

**link to work:** [state](./REACT/state/)

## DAY 42, september 15th 2022
#### (working with react class-based components)
React class based components are the bread and butter of most modern web apps built in ReactJS. These components are simple classes (made up of multiple functions that add functionality to the application). All class based components are child classes for the Component class of ReactJS.

today I rendered my first class based component via having an app dedicated for the class-based components.

**thoughts:** Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.

Components come in two types, Class components and Function components

**link to work:** [class-based-views](../100_days_of_code/REACT/class-based-app/)

## DAY 43 september 16, 2022
#### (working with class-based components)
Today I understood and created a [component](./REACT/class-based-app/src/components/component_1.js) based on class-based individually
I exported the app and imported it into my app.js file and rendered it

**thoughts:** Class based component is made using JavaScript class and it inherits from react Component.
**link to work:** [class-based react app](../100_days_of_code/REACT/class-based-app/src/components/)

## DAY 44 september 17th, 2022
#### (conditional rendering in react)
I created a new project to help me understand conditional rendering in React.js'
here is where you render a specific jsx element based on the condition of your state.
it just works the same way as in javascript.
you use the if.... else statements .

**thoughts:** to use conditional rendering in react you can use : if...else, &&, ternary opearator

**link to work:** [conditional rendering](./REACT/conditional-rendering-boilerplate/)

## DAY 45 september 18th, 2022
#### (working with forms)
one will need the user to sign in, submit some information, or even sign up
I started working with forms today. and i have created a new project for the forms [forms](./REACT/forms/)

**thoughts:** forms are pretty required in every other application since they are some data that has to be submitted so we just need the forms 

**link to work:** [form](./REACT/forms/)

## DAY 46 september 19th, 2022
#### (still working with forms)
today I worked with a form that requires one to import different inputs from the user
**link to work:** [Diffrent inputs](./REACT/forms/src/components/diffrentinputs.js)

## DAY 47, september 20th 2022
#### (zero-code day)
today I was learning about how I should structure my react folders so as to achieve a neat way of doing things.

from having a folder for components, images fonts and logos, and even for our css style files

**thoughts:** React doesn’t have opinions on how you put files into folders.

**link to work:** [react folder structure](./REACT/react-folder-structure/)

## DAY 48, september 21st 2022
#### (start of a new react project)
I want to build a complete react project
 [A shopping list:](https://contactmentor.com/best-react-projects-for-beginners-easy/)
    users should be able to sign in/up
    users should be able to add products
    users should be able to see the total add up and decriment
this shopping list is going to employ the following react elements:
    React Hooks
    Components
    props
    useState
    handling html input in react
**thoughts:** I am excited for this project and I am going to host it

**link to work:** [shopping list](./REACT/shopping-list/)

## DAY 49 september 22nd, 2022
#### (working with my App.js file)
my App.js file has an updated code regarding the adding of items to the list

**thoughts:** for more information about the code inside [App.js](./REACT/shopping-list/src/components/App.js), reference this [Blueprint](./REACT/shopping-list/blueprint.md)

**link to work:** [shopping list](./REACT/shopping-list/)

## DAY 50 september 23rd, 2022
#### (site hosting)
today i have hosted my react project on Netlify
i got to learn how to host a github subdirectory on Netlify
on the build directory:
    base - should have the path to the subdirectory `REACT/shopping-list`
    then on the build command use `npm run build`
    then on the publish directory - 'the path then end with build `REACT/shopping-list/build`

**thoughts:** hosting on netlify is really easy, it took me a million times to figure out how to host a sub-directory in heroku

**link to work:** [grocery-shop](https://kip-grocery-list.netlify.app/)

## DAY 51, september 24th 2022
#### (started learning the go language)
 Go language was developed by google - it's a backend language

 in today's projects - I wrote an hello world program that takes the user input processes the result and displays the output.

 **thoughts:** Go lang is built on top of C

 **link to work:** [GO-LANG](./GO-LANG/)

 ## DAY 52, september 25th 2022
 #### (understanding gopath and goroot and datatypes in go language)
 GOPATH, also called the workspace directory, is the directory where the Go code belongs. It is implemented by and documented in the go/build package and is used to resolve import statements.
 GOROOT is for compiler and tools that come from go installation and is used to find the standard libraries. It should always be set to the installation directory.

 **thoughts:** Go tools expect a certain layout of the source code. GOROOT and GOPATH are environment variables that define this layout.

GOROOT is a variable that defines where your Go SDK is located. You do not need to change this variable, unless you plan to use different Go versions.

GOPATH is a variable that defines the root of your workspace. By default, the workspace directory is a directory that is named go within your user home directory (~/go for Linux and MacOS, %USERPROFILE%/go for Windows).

**link to work:** [GOPATH & GOROOT](./GO-LANG/README.md)

## DAY 53, september 26th 2022
#### (javascript datatypes)
today I have learnt the javascript data types:
 the primitive data types include:
    [undefined](./JAVASCRIPT/javascript_datatypes/undefined.md)
    [strings](./JAVASCRIPT/javascript_datatypes/strings.md)
    [null](./JAVASCRIPT/javascript_datatypes/null.md)
    [numbers](./JAVASCRIPT/javascript_datatypes/numbers.md)
    [boolean](./JAVASCRIPT/javascript_datatypes/boolean.md)
I also got to learn about :
    [inline scripting](./JAVASCRIPT/inline_scripting/)
    [internal scripting](./JAVASCRIPT/internal_scripting/)
    [external scripting](./JAVASCRIPT/external_scripting/)

**thoughts:** javascript is preferred to be imported/written on the body than the head of an html.

**link to work:** [javascript](./JAVASCRIPT/)

## DAY 54, september 27th, 2022
#### (non-primitive data types and math object)
today I reminded myself about js non-primitive datatypes:this include:
    [arrays](./JAVASCRIPT/javascript_datatypes/arrays.md)
    [objects](./JAVASCRIPT/javascript_datatypes/objects.md)
I also reminded myself about the [math object](./JAVASCRIPT/javascript_datatypes/numbers.md) in JS, this object helps us in manipulating strings.

**thoughts:** primitive data types are immutable whereas non-primitive data types are mutable, they can be changed.

**link to work:** [non-primitive data types](./JAVASCRIPT/javascript_datatypes/README.md)

## DAY 55, september 28th, 2022
#### (javascript functions)
today I started learning javascript functions
there are different ways of creating functions:
    Declaration function
    Expression function
    Anonymous function
    Arrow function
**thoughts:** functions can be created to take unlimited number of parameters/ arguments from the user
functions can also have a return value or not

**link to work:** [functions](./JAVASCRIPT/javascript_functions/)

## DAY 56, september 29th, 2022
#### (object)
today i started working with [js objects](./JAVASCRIPT/javascript_datatypes/objects.md)
everything in javascript is an object
objects has key value pairs
objects are mutable

**thoughts:** when creating user defined functions in objects, use normal functions instead of arrow functions since this keyword in arrow functions limits it usability to within the function only and not the object itself as should be.

**link to work:** [object](./JAVASCRIPT/javascript_datatypes/objects.md)

## DAY 57, september 30th, 2022
#### (javascript BOM - browser object model)
the BOM (Browser Object Model) allows javascript to talk to the browser.
The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object.

**thoughts:**  The BOM allows JavaScript to “interact with” the browser. The object of window represents a browser window and all its corresponding features. A window object is created automatically by the browser itself

**link to work:** [BOM](./JAVASCRIPT/javascript_BOM/)

## DAY 58, October 1st 2022
#### (working with javascript form validation)
Data validation is the process of ensuring that user input is clean, correct, and useful.

Typical validation tasks are:

has the user filled in all required fields?
has the user entered a valid date?
has the user entered text in a numeric field?
Most often, the purpose of data validation is to ensure correct user input.

HTML form validation can be done by JavaScript.

**thoughts:** JavaScript provides facility to validate the form on the client-side so data processing will be faster than server-side validation. Most of the web developers prefer JavaScript form validation.

**link to work:** [javascript form validation](./JAVASCRIPT/javascript_validation/)

## DAY 59, october 2rd 2022
#### (DOM)
HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is possible to get, create, append or remove HTML elements using JavaScript. 

Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

you can get elements by:
 1. [Id](./JAVASCRIPT/javascript_DOM/src/get_element_by_id.js) - getElementsById() targets a single HTML element. We pass the id without # as an argument.
 2. [TagName](./JAVASCRIPT/javascript_DOM/src/get_element_by_tag.js) - getElementsByTagName():takes a tag name as a string parameter and this method returns an HTMLCollection object. An HTMLCollection is an array like object of HTML elements.
 3. [ClassName](./JAVASCRIPT/javascript_DOM/src/get_element_by_name.js) - getElementsByClassName() method returns an HTMLCollection object. An HTMLCollection is an array like list of HTML elements. 

**thoughts:** HTML objects are considered js objects.

**link to work:** [DOM](./JAVASCRIPT/javascript_DOM/)

## DAY 60, october 3rd, 2022
#### (js exception handling)
exception is when we try catching errors then we execute a specific set of code.

**thoughts:** for more information checkout on this [README](./JAVASCRIPT/javascript_handling/exception_handling.md)

**link to work:**[exception handling](./JAVASCRIPT/javascript_handling/)

## DAY 61, october 5th, 2022
#### (RUBY)
today I start my thirty days of ruby

I have installed the apps, dependecies and the extensions needed for me to start learning ruby tomorrow

**link to work:** [ruby](./RUBY/)

## DAY 62, october 6th, 2022
####  (ruby datatypes)
today, day 2 of learning ruby, I have gone through the basics of ruby data types:
this includes:
  [strings](./RUBY/tutorials/strings.md), [symbols](./RUBY/tutorials/symbols.md), [numbers](./RUBY/tutorials/numbers.md) and [booleans](./RUBY/tutorials/Booleans.md)
ruby has a very smart way of manipulating its data types which include changing from one data type to another. more information about this datatypes are found in this [README](./RUBY/tutorials/rubydatatypes.md)

**thoughts:** every piece of code in ruby, has to return something, and those pieces of code that has no return value returns a `nil`

**link to work:** [ruby datatypes](./RUBY/tutorials/)

## DAY 63, october 7th, 2022
#### (working with ruby variables)
there are four types of ruby variables:
 1. local
 2. global
 3. instance
 4. class

 **thoughts:** each of the variables above scope to their specific scopes only.

 **link to work:** [variables](./RUBY/tutorials/variables.md)

 ## DAY 64, october 8th, 2022
 #### (working with inputs and outputs in ruby)
 to output data in ruby you use `print` or `puts`
 input is any data that is read by the program, either from a keyboard, file or other programs. Output is data that is produced by the program. The output may go to the screen, to a file or to another program.
 to input in ruby you use `gets`

 **thoughts:** The print and puts methods produce textual output on the console. The difference between the two is that the latter adds a new line character.

 **link to work:** [ruby inputs and outputs](./RUBY/tutorials/inputoutput.md)
)

## DAY 65, october 9th, 2022
#### (ruby arrays)
Ruby arrays are ordered collections of objects. They can hold objects like integer, number, hash, string, symbol or any other array.

Its indexing starts with 0. The negative index starts with -1 from the end of the array. For example, -1 indicates last element of the array and 0 indicates first element of the array.

**thoughts:** to get all methods associated with arrays you `myArray.methods`

**link to work:** [Ruby Arrays](./RUBY/tutorials/arrays.md)

## DAY 66, OCTOBER 10TH, 2022
#### (ruby methods)
ruby has [inbuilt and userdefined methods](./RUBY/tutorials/methods.md)
to build your own methods in ruby you use `def` keyword
ruby offers explicit and implicit return capabilities.
ruby methods can take parameters, or even have default parameters.

**thoughts:** Methods name should always start with a lowercase letter. Otherwise, it may be misunderstood as a constant.

**link to work:** [ruby methods](./RUBY/tutorials/ruby_codes/methods.rb)

## DAY 67, october 11TH, 2022
#### (OOP)
today I have started learning OOP in ruby
it is pretty much the same OOP concepts in the other programming languages

**thoughts:** I am going to learn deeper the OOP concepts at the code academy.

**link to work:** [OOP](./RUBY/tutorials/OOP.md)

## DAY 68, OCTOBER 12TH, 2022
#### (INDEPTH RUBY OOP)
today I have learnt of the ruby constructor methods, instance methods and objects

when a class wants to inherit from a superclass, you use `<`

**thoughts:** ruby being an OOP means it can be embedded in an HTML

**link to work:** [RUBY CLASS](./RUBY/tutorials/ruby_codes/rubyclass.rb)

## DAY 69, october 13th, 2022
#### (caesar cipher)
today I have started my first project on ruby the [caesar cipher](./RUBY/Ruby_Projects/caesar_cipher/caesar_cipher.rb)
 what I have done today under this project has taught me:
     hands on splitting of string to array - `split and to_a`
     finding the character integer ordinal - `character.ord`
     and finally shifting the integer ordinal using a key
     and also I have learnt to use methods since I am using a method for this,

**thoughts:** to run ruby on your terminal you just have to type `irb` or to run a ruby script you `ruby the name of your script`

**link to work:** [ceasar cipher](./RUBY/Ruby_Projects/caesar_cipher/)

## DAY 70, october 14th, 2022
#### (caesar_cipher)
building up on  the caesar_cipher game i started yesterday.
today my program can encrypt your text well if all your inputs are in small letters.

**thoughts:** if you want to get the ascii code of a character, you `.ord`, and when you have an integer and you want to get its character assuming that your integer is an ascii code you `123.chr`

**link to work:** [caesar_cipher](./RUBY/Ruby_Projects/caesar_cipher/)

## DAY 71, october 15th, 2022
#### (substrings)
another ruby project
you pass a string and an array of words
the method iterates over the array and checks if the word atleast exists in the string
it returns an hash of the word and the number of times it appears in the string

**thoughts:** if you want to check if a particular hash key exists in the hash you use the `has_key?` method.

**link to work:** [substrings](./RUBY/Ruby_Projects/Sub_strings/)
