class PostsController < ApplicationController

  def index
    @posts = (post_ranking)
    @post1 = Post.find(1)
    @post2 = Post.find(2)
  end

  def show
  end

  def post_ranking
    posts =["オススメTOP5", "人気男性ユーチューバーTOP5", "人気女性ユーチューバーTOP5"]
  end
end
