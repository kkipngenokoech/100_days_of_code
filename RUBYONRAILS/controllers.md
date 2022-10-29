# CONTROLLERS

It's job is to act as middleman.

it knows which questions it wants to ask the models, but let's the models do the heavy lifting.

it knows which view it wants to render and sends it back to the browser, but let's views itself take care of the putting the hml together.

it just collects the instance variables that needs to be sent to the view.

## where do controllers get used?

a http request comes into your application

the router decides which controller and action it maps to.

rails packages up all the parameters that were associated with that request and runs the specific method in the specified controller.

## methods in your controllers

1. index
   * this will grab all your posts and send them to `index.html.erb`
   * `post = Post.all`

## NAMING MATTERS

ruby normally assumes that things are written in a certain form.

