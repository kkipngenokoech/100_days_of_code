# ROUTING

router is the doorman of your application.
when an HTTP request arrives, from the user's browser, it needs to know which controller action(method) should run.

the router looks for the HTTP verb - (GET, POST, PUT, PULL, DELETE.) and the URL that is being requested and matches the appropriate controller action to run.

if it can't find a route that matches the request, your application will throw an error.

The other handy thing that goes on when a request enters your application is that Rails grabs all the parameters that came with it and makes them available for you in a special hash called params that you can later use in your controller. That’s good for things like form submissions so that you later can use that form data to create or modify objects.

to find all the routes available in your application you run `rails route` on your terminal.

All web frameworks perform basically the same tasks:

1. Receive an HTTP request
2. Based on the request's path and HTTP method, it figures out what code to execute.
3. Generate HTML, CSS, Javascript, images and any other relevant assets.
4. return an HTTP response to the client.

## ROOT

` root to: "kittens#index"  #kittens controller, index action (method)` - this is to route to your root url.

## RESTful Routes
REST - Representational state transfer,  there are  only 7 different types of things that you usually want to do to an individual resource via the web

1. Index - Get all the posts - index the posts - `index`
2. Show - Get just one specific post("show that post") - `show`
3. New -  Get the page that lets you create a new post. - `new`
4. Post - post the data you just filled out for a new post back to the server so it cancreate the post ("`Create` post") - `create`
5. Edit - get the page that lets you edit an existing post ("`edit` the post") - `edit`
6. Put - patch the data you just filled out for editing the post back to the server so it can actually perform the update. - `update`
7. Delete - delete one specific post by sending a delete request to the server. - `destroy`


## MVC
Model -> view -> controller
When you build a new Rails project, you get that giant mass of folders and files created. Though it seems like there is an overwhelming number of files inside your app directory, they are highly organized and specifically meant to separate the Model, View, and Controller.

The point of MVC is that the functions of a web application can be broken down into more or less distinct parts. Each part gets its own Ruby class. That’s great for you the developer because, when you want to tweak a specific part of the code base or fix a bug, you know exactly which file to modify and where it is.

## THE PART THROUGH MVC
when a request from a browser comes into an application :
1. The router figures out which controller to send it to.
2. That controller asks the model for data and any other question it has.
3. Then the controller passes off whatever data it needs to the views. - these are just HTML templates that are waiting for those variables.
4. Once the proper view has been pumped full of the data it needs, it gets sent back to the client that made the original request

MODEL -> VIEW -> CONTROLLER

## APIs
this is just an interface.Not all APIs are web-based.

## COOKIES
cookies are basically a way for websites to remember who you are from one request to another.

Remember – every HTTP request is totally independent of each other. Meaning that when you go to the Home page of a website and then click on a link to their About page, the web server treats you as a completely new user.

Cookies are little bits of data that your browser sends to the website every time you make a request to it. From the perspective of the web server, it lets the server identify you as the same person who made any of a series of previous requests. It preserves the state of your session.

## SESSIONS
Cookies are important because they enable you to have a single continuous “session” while you’re interacting with a website. It means you only have to log in once instead of for every single request

Your browser includes all the cookies that a particular website has set along with its normal request and the server uses those strings to figure out which user you are and whether you are logged in, what your settings are (like if you’ve set up viewing preferences) and things like that. It’s also why, when you clear cookies from your browser history, everything seems to get wiped out and go back to the default.

It’s also how some ads seem to follow you from one website to another – another name for them is “tracking cookies”.

## AUTHENTICATION
used to determine who the user is!

## AUTHORIZATION
this helps you determine what the authenticated user can do in your site.

The most common case of this is actually the distinction between a random not-logged-in user and one who is logged in. Another common case of this is the difference between regular users of a website and the admin users who have special privileges.