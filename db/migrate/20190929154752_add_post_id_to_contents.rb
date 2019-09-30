class AddPostIdToContents < ActiveRecord::Migration[5.2]
  def change
    add_column :contents, :post_id, :string
  end
end
