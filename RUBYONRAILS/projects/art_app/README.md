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

## models

[credits](https://medium.com/@gaidaescobar/build-a-very-basic-ruby-on-rails-app-e2ac88c47f8c)
this project will have three models:

1. Artist
   1. artist should have a name, age and experience level
   2. artist should be able to see a list of all artists
   3. artist should be able to see a single artist and all his paintings
   4. should be able to create a new artist - name should not be blank and experience level btw 1-10.
   5. able to edit artist name.
   6. able to delete an artist when they retire.
2. Gallery
   1. it has name and location
   2. able to see a list of all galleries
   3. Able to see a single gallery and see all its details including all the paintings located in the gallery
   4. Able to edit a gallery and its details
   5. Able to create a new gallery
   6. Able to delete a gallery when it goes out of business
3. Painting
   1. it should have a name, price artist id and gallery id
   2. Able to see a list of all the paintings
   3. Able to see a single painting and see all its details
   4. Able to create a new painting with an association to an artist and gallery
   5. Able to delete a painting when it gets sold.

### creating  models

the below commands generate folders and files which include - controllers, models views and directories.

`rails g resource` - this is a generator.

artist - `rails -g resource artist name age:integer experience_level:integer`

since the paintings model will be our joiner model we included the belongs_to association with both artist and gallery.

### setting up relationships between models

[artist.rb](./app/models/artist.rb)     |
[gallery.rb](./app/models/gallery.rb)   |
[painting.rb](./app/models/painting.rb)

an artist has many paintings and paintings are dependent on artists so when we delete an artist, it should also destroy the dependents as well.

same case to gallery, a gallery can have has many paintings as possible, but paintings depends on the gallery and so when we delete a gallery, the paintings should be destroyed as well.

### database migrations

when we generate resources we need to make a database migration
`rails db:migrate`

to check a database migration status - `rails db:migrate:status`. it should always be up!

### seeding models

in our [db](./db/) there's a [seed.rb](./db/seeds.rb)

This file is triggered by the `rails db:seed` command or `rails db:reset` and rails db:setup` commands.

this file helps us seed the database.

N/B: ensure you add the gem faker in your spec development and test section

## [routes.rb](./config/routes.rb)

resource generator creates our routes for us. we need to only add exceptions we need.
