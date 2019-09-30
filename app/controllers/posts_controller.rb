class PostsController < ApplicationController

  def index
    @posts = (post_ranking)
    @post1 = Post.find(1)
    @post2 = Post.find(2)
    @contents = Post.all.order("id DESC")
  end

  def show
    @post = Post.find(params[:id])
    @contents = @post.devide_monthly
  end

  def create
    Post.create(post_params)
  end

  def contents
    @post = Post.find(params[:id])
    @yyyymm = params[:yyyymm]
    @contents = @post.contents.group_by {|content| content.created_at.strftime('%Y%m')[@yyyymm]}
    if @contents.keys[0] == nil
      @tt = @contents.to_a[1]
      @p = @tt[1]
      # @p = @e[0]
      # binding.pry
    else @contents.keys[1] == nil
      @tt = @contents.to_a[0]
      @p = @tt[1]
    end
    # binding.pry
    # if @contents.keys == nil
    #   nil.delete
    #   @p = @contents.values
    # else 
    #   @p = @contents.values
    # end
    # @p = @contents.values
    # @ww = post[0]
    # .sort_by{|content| content[:created_at]}.reverse
    # .group_by {|content| content.created_at.strftime('%Y%m')[@yyyymm]}
    # .sort_by! {|content| content[:created_at]}}.reverse
  end

  private

  def post_params
    params.permit(:content, :name)
  end

  def post_ranking
    posts =["オススメTOP5", "人気男性ユーチューバーTOP5", "人気女性ユーチューバーTOP5"]
  end
end
