# FORM

one can submit a form with email, name, phone number, flight number, flight date, card expiration date and many more.

all those information belong to different models but are all submitted under one button.

## railsifying your form

rails by default automatically protects your site from cross-site request forgery, it requires you to verify that the form you are submitting was from a page you actually created.

it does this by using authenticity token.

how to include this authenticity token in your form:

```html
<input type = 'hidden' name = 'authenticity_token' value = '<%= form_authenticity_token %>'>
```

## Making forms into params

all form inputs are passed as params.

in rails, it is more important what you label your name property for the inputs.

the name attributes tells rails what it should call the stuff you entered in that input field when it creates the params hash.

to access those inputs you [params :name_given]

all those parameters can be passed into one container-you nest this data.

Specific parameters of the params hash are accessed like any other nested hash params`[:user][:email].`

Don’t forget that you have to allow the params now in your controller using require and permit because they are a hash instead of just a flat string. See the Controller section below for a refresher on the controller side of things.
