# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## static page controller

our static page is going to have three actions - home, help and about

we are going to generate the home and help page alongside the controller:
`rails generate controller StaticPages home help`.

when you generate a controller with CamelCase it will be created using the snake_case naming convention.

ruby uses CamelCase for class name.

to destroy a controller : `rails destroy controller_name its_actions`

provide method in ruby creates a new variable.

`<%%>` doesn't return anything to the console.

`<%=%>` returns ruby code to the console.