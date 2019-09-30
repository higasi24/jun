class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.string :image
      t.string :symmetry
      t.string :genre
      t.string :regist_url
      t.string :regist_number
      t.timestamps null: true
    end
  end
end
