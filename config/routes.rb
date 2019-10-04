Rails.application.routes.draw do
  root to: "posts#index"
  resources :posts do
  resources :users, only: [:index]
  end
  get  '/posts/:id/contents/:yyyymm', to: 'posts#contents', as: :post_content
  get 'posts/fav/:id' => 'posts#fav', as: "fav_posts"
  resources :apps
end
