# VIEW

this is the simplest part of the MVC structure

it takes a bunch of variables it receives from the controller, set them up into an HTML template and then sends them up into your browser.

the path to this views is: `app/views/controller_name/action_name.html.erb`.

the controllers you have created gets their own folders which are automatically filled with the restful actions from your controller name.

`the action_name.html` bit is the name of the restful action that will be requested by the controllers.

rails does the rendering implicitly but you can explicitly tell your controller to render a different view by passing it as a parameter to the render function in your controller.

This directory and naming structure helps you (and Rails) to always know where to find a given view.

if you want to use an instance variables in your views, just call it the same way you would in a controller `@user.first_name` or `@posts`

## LAYOUT OF VIEWS

a normal html page would have a boilerplate with the headers and `<html>` tags, but for this it has no tags.

this doesn't mean that this html layouts doesn't exist.
they are found in `app/views/layout`.

`Application.html.erb` has all your basic html boilerplate.

and a couple snippets of code that load up the JavaScript and CSS files your webpage will need.
at the application level is where you put stuff like NavBar that you would want to cut across all your layouts.

`#yield` method is what is used to inject  this views with application.html.

## Preprocessors

`<%= %>` - this is embedded ruby. it is a special way to execute ruby code inside your html.

what is placed in between the preprocessors are executed just the same way it would have in a ruby program `<%= @user.first_name %>`
we include an `=` in the preprocessors so that it actually returns what's been executed.

if you want to comment and not execute use `#`.
