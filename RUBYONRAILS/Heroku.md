## HEROKU INSTALLATION
`curl https://cli-assets.heroku.com/install.sh | sh` - installing heroku CLI
 curl to download a script and run it to install the Heroku CLI.

 ## ADDING SSH KEY TO HEROKU
 Adding your SSH key lets Heroku know what machine the commands are coming from, similar to how GitHub uses SSH keys.

 `heroku keys:add`

 ## CREATING APP
 `heroku create`

 ## configuring Gemfile
 open the [Gemfile](projects/first_rails_app/Gemfile)
 remove the line that says `gem 'sqlite3'`

 replace the line with
 ```
 group :development, :test do
 gem 'sqlite3'
end

group :production do
  gem 'pg'
end
 ```


 we need to inform Git github and heroku that we have changed the Gemfile
 `bundle config set --local without production`
 Heroku will install the gems in the :production group and ignore the ones in the :development and :test groups. Conversely, we don’t need to install the gems in the :production group on our local machine, since they aren’t being used for development. To accomplish this, we need to tell Bundler to ignore the :production group gems in this project by running


 Now we can install only the gems in the :development and :test groups on our local machine
 `bundle install`


 ## CONFIGURE ROOT ROUTER
 The next thing we need to edit is the routes.rb file to set our root route. We’re going to do this so that we can see the application without having to append /cars at the end of the URL.

Go back to VSCode and expand the config folder in the file list at the left-hand side of the screen. One of the files inside the folder will be named routes.rb. Open routes.rb and make it match the example below

```
Rails.application.routes.draw do
  root 'cars#index'
  resources :cars
end
```


## Git , github and Heroku
`bundle lock --add-platform x86_64-linux --add-platform ruby`

## migrate database on heroku
`heroku run rails db:migrate`