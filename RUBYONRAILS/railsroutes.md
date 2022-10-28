# RAILS ROUTES

`rails routes` - shows us all the routes present in our application.

routes correspond directly to controller actions.

a `resources :posts`(its found in config/routes.rb) route is equivalent to:

```ruby
# app/controllers/posts
class postsController < ApplicationController
    def index
    end
    def show
    end
    def new
    end
    def create
    end
    def edit
    end
    def update
    end
    def destroy
    end
end
```

in our posts controller we have all the seven restful routes methods.

when you run `rails routes` in project level directory it can list you all the routes and their controllers and actions.

## selecting specific routes

sometimes you want your url to be limited to what changes can happen in that section and so you can:

1. for only a few `resources :posts, only:   [:index, :show]`
2. for excluding a few `resources :posts, except: [:index, :show]`