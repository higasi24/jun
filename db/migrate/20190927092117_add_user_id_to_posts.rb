class AddUserIdToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :user_id, :string
    add_column :posts, :content_id, :string
  end
end
