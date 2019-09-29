Rails.application.routes.draw do
  root to: "posts#index"
  resources :posts do
  resources :users, only: [:index]
  end
  resources :apps
end
