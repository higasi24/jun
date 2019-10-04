class Post < ApplicationRecord

  belongs_to :user, optional: true
  has_many :contents
  has_many :likes, dependent: :destroy

  def like_user(id)
    likes.find_by(user_id: id)
  end

  def favorited_by?(user) #いいねしているかどうか
    likes.where(user_id: user.id).exists?
  end

  def devide_monthly
    self.contents.pluck(:created_at) \
    .group_by {|timezone| timezone.strftime('%Y%m')}.map {|k, v| [k, v.size]}.sort.reverse
  end

end
