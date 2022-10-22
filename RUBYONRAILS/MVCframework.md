# MVC

user interface is coded into the `V`(views), the HTTP web requests are handled by the `C`(controller), figures out which model code to run and which views to return back in the HTTP response.

## Model(ActiveRecord)

It maintains the relationship between the objects and the database and handles validation, association, transactions, and more.
This subsystem is implemented in ActiveRecord library, which provides an interface and binding between the tables in a relational database and the Ruby program code that manipulates database records. Ruby method names are automatically generated from the field names of database tables

## View (ActionView)

It is a presentation of data in a particular format, triggered by a controller's decision to present the data. They are script-based template systems like JSP, ASP, PHP, and very easy to integrate with AJAX technology.

This subsystem is implemented in ActionView library, which is an Embedded Ruby (ERb) based system for defining presentation templates for data presentation. Every Web connection to a Rails application results in the displaying of a view.

## controller (ActionController)

to create a controller you - `rails generate controller <name of your controller>` - capitalize and use singular in your controller name.

the command above creates a file in `app/controllers/book_controller.rb`.
which has the following code:

```text
class BookController < ApplicationController
end
```

controller class has shown above inherits `ApplicationController` which is found in the `application.rb`.

It is a presentation of data in a particular format, triggered by a controller's decision to present the data. They are script-based template systems like JSP, ASP, PHP, and very easy to integrate with AJAX technology.

This subsystem is implemented in ActionView library, which is an Embedded Ruby (ERb) based system for defining presentation templates for data presentation. Every Web connection to a Rails application results in the displaying of a view.

ActiveRecord provides a range of programming techniques and shortcuts for manipulating data from an SQL database. ActionController and ActionView provides facilities for manipulating and displaying that data. Rails ties it all together.

1. it knows which questions to ask the model.
2. it knows which views it wants to send back to the browser.

HTTP request -> router decides which controller and action to map to -> rails run the specified method in the specified controller -> view

your controller and its actions has to be named the same way you called them in your `routes.rb` file when you mapped a specific HTTP request to them.

The other end of the process is what the controller does when it’s done. Once Rails gets to the end of that controller action, it grabs all the instance variables from the controller and sends them over the view file which is named the same thing as the controller action and which lives in a folder named after the controller
