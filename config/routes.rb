Rails.application.routes.draw do
  get 'pages/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'application#home'

  get '/pages/about'
  
  #should/could prob do this as resources, only: [:post, :get]
  post '/messages' => 'messages#create'

  resources :books, only: [:index]
  # resources :cards
end