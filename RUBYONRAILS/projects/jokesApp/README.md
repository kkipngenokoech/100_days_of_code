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

## JOKES APP

we need our app to work with js so we are going to start a webpack development server.

open a new terminal and run `bin/webpack-dev-server`
ensure that your web development server is installed globally `sudo npm install -g webpack-dev-server`

## route, controller, view

to generate a controller and view - `rails generate controller Joke show`
the joke means  - joke controller.
the show means - joke controller should be able to generate a random joke only.