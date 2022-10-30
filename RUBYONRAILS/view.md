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

pre-processors are first executed in the server before they are sent to the client.

it doesn't only pre-run the `.htm.erb` only .css.scss files use the SASS preprocessor and become regular CSS files. .js.coffee files, which use the Coffeescript preprocessor, become regular JavaScript after being run.

it will be compiled into vanilla css and js and HTML.

## VIEW PARTIALS

in ruby you can break your paths into partials. i.e a form to edit and create new user- in somewhat way they are usually similar.

partials are just HTML files that aren't meant to be complete but can be shared by other files.
to call this forms you normally `<%= render "path/to/name_of_the_file" %>

these partial files are named with a `_` at the start.

### passing local variables to partials

A partial has access to all the variables that the calling view template has.

you can choose though( and it is the better option ) to explicitly pass to the partials whichever variables we want them to have.

here you use the `:locals` key. `<%= render partial: "shared/your_partial", :locals => { :user => user } %>`

Note that you should use the :locals option if you’re calling the render method with a :partial key.

alt : `<%= render "shared/your_partial", :user => user %>`