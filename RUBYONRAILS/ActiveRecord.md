# links for resources

[ruby active Records documentation](https://guides.rubyonrails.org/active_record_basics.html#schema-conventions)
[Odin Project documentation](https://www.theodinproject.com/lessons/ruby-on-rails-active-record-basics)
[tutorials point](https://www.tutorialspoint.com/ruby-on-rails/rails-active-records.htm)
[medium](https://medium.com/oceanize-geeks/the-active-record-and-data-mappers-of-orm-pattern-eefb8262b7bb#:~:text=Active%20Record%3A%20The%20Web's%20Favorite,to%20the%20table%20upon%20save.)

## Active Record

Active records is the interface that rails gives you between your database and your application.

it lets you structure your data models.

Active records normally does the mappings for you.

while dealing with Active records: you now start coming into contact with classes, objects and attributes.

the implementation of a domain-specific-language (DSL). A DSL is a programming language intended to use in a specific problem domain. It allows you to use dynamically generated methods, like to retrieve a record, method find_by_first_name is used.

## ACTIVE RECORD BASICS

Each table in a database is generally represented by a class that extends Active Record base class. By extending Active Record base classes, model objects inherit a lot of functionalities.

While using Active Records, you don't have to set up any database connections. It manages all the database connections for an appication. It adds attributes to your class for each of the columns in the database.

Active Record naming convention - CoC - convention on configuration, On following naming convention, you can take advantage of many dynamic features of Active Record without any configuration.

## CLASS AND DATABASE

Database table should be named in the plural form and in lowercase of your model classes. i.e `Database tables = students` if `Database Model = Student`

With the help of this convention, Rails will automatically find the corresponding table to your model class without any configuration code

Active Record is, to put it inelegantly, the gem that takes care of all the database stuff. It’s known as an “ORM”.

ORM stands for Object-Relational-Mapping. It basically means that Active Record takes data which is stored in a database table using rows and columns, which needs to be modified or retrieved by writing SQL statements (if you’re using a SQL database), and it lets you interact with that data as though it was a normal Ruby object.

Active records will do the hard work of connecting you to your database.

## RAILS MODELS

you want to store information about your users, you create a database called `users`.
you want to be able to access that data from your application so you create a model called `User`.

## creating an object/row

creating a database - `rails db:create`
`u = User.new(name: "Multiverse", email: "Multiverse@multiverse.com")`  - creates an instance of multiverse.

`u.save` - save your instance to the database

you can combine the above two steps using `create`
`u = User.create(name: "Multiverse", email: "Multiverse@multiverse.com")`

to create a model `rails generate model <yourModelName>`

## MIGRATIONS

to create a database migraation file `rails generate migration <NameOfYourMigration>`

A migration is basically a script that tells Rails how you want to set up or change a database.

migrations are just scripts, to tell ruby to run them? and update your database schema? `rails db:migrate`.

When you run that command, Rails will execute the proper SQL code to set up your database table and you can go back to actually building the website.

migrations are usually reversable! `rails db:rollback` just incase you mess up in your migrations.

## BASIC VALIDATION

there are three levels of validation one can apply :

1. top-level, you use javascript in your browser to detect if someone has filled out the form properly and has required.
2. server-level - writing code at your rails application (model) that examines user inputs, check them versus the constrains you set up and return errors if any.
3. database-level - your single database is the sole arbiter of what is unique and valid in this world.

## BASIC ASSOCIATION

1. `has-many relationship` - one to many
2. `belongs_to relationship`- belongs to one and only one
3. `has_and_belongs_to_many` - many to many relationship
so the User `has_many: posts`.

## ACTIVE RECORDS

What does active records helps you to do?

1. Represent models and their data
2. Represent associations between this models.
3. Represent inheritance hierarchies through related Models.
4. Validate models before they get persisted to the database.
5. Perform database operations in an object-oriented fashion.

## RUBY ACTIVE RECORD NAMING CONVENTION

Rails will pluralize your class names to find the respective database table.
i.e for a class `Book` your database should have a database table called `Books`.
if you are having classes with more than one class name, ruby classes should use `CamelCase` - `BookClub`, while table name use `snake_case` - `book_clubs`.

ruby actually finds the plural of words, if you have a class known as `Mouse` or `Person` for example, its database table name that will be generate is `mice` and `people` respectively.

## CREATING MODELS

`rails generate model <name of your model>`
