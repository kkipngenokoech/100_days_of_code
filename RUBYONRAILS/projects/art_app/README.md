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
