Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/legal', to: 'pages#legal', as: 'legal'
  get '/lab', to: 'pages#lab', as: 'lab'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
