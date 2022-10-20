## RUBY ON RAILS
Everything about Ruby on rails.
ruby on rails is ruby's 7 gems working harmoniously together (Active Record is the gem that takes care of all the database stuff)
## NEW RAIL APP
`rails new first_rails_app`
initializing rails app

- generating templates
`rails generate scaffold car make:string model:string year:integer`

 - After generating the scaffolds, we need to migrate the database.
`rails db:migrate`

## start up your app
`rails server` - Now that you have created a Rails application, you can start it up and see if it works!

link to access first_rails_app - [first_rails_app](http://localhost:3000/cars)


## ACTIVE RECORDS
table maps to classes
rows maps to objects
columns maps to object attributes.

Rails Active Records provide an interface and binding between the tables in a relational datbase and ruby program code that manipulates the database records.

Ruby methods are automatically generated from the fieldnames of database tables

Each Active Record object has a CRUD(create, read, update, delete) functionality methods for database access.

#### creating Active Records Files(Model)
`rails script/generate mode <name of the model>` - this is ran on top-level application directory.