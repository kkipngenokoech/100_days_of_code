Rails.application.routes.draw do
  resources :paintings, only: [:index, :show, :new, :create, :destoy]
  resources :galleries
  resources :artists # this gives us access to all the 7 restful routes. from here you head to the artist controllers
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
