# RAILS

to start a new rail application you: `rails new <name of your application>`.

it installs a couple of files:
[ruby directory explanation](./assets/ruby-directory.png)

## STEPS AFTER RUNNING `RAILS NEW NAME OF APP`

### 1.using bundler

use `Bundler` to install and include the gems you need to use in your app.

first locate the `Gemfile` of your application,

run `Bundle install`.

## MVC

at the very basic level, your ruby applications has no models, views or controllers.

controllers is where we include our actions.

then you have to redirect your router to our controllers so that it will display our default page. `root 'controller_name#action_name'` this is found in `config/route`. route there stands for the action you want done.
