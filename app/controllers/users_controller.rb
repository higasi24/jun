class UsersController < ApplicationController

  def index
    @user = User.find(params[:post_id])
  end
end
