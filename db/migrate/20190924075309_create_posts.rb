class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :image
      t.string :introduction
      t.string :regist            #チャンネル登録者数
      t.string :characomment1
      t.string :yutube            #動画
      t.string :mycomment
      t.string :celebcomment      #有名人コメント
      t.string :symmetry          #相性
      t.string :category
      t.timestamps null: true
    end
  end
end
