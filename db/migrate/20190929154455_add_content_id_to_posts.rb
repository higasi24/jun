class AddContentIdToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :content_id, :string
  end
end
