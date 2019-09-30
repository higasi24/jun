class Post < ApplicationRecord

  belongs_to :user, optional: true
  has_many :contents

  def devide_monthly
    self.contents.pluck(:created_at) \
    .group_by {|timezone| timezone.strftime('%Y%m')}.map {|k, v| [k, v.size]}.sort.reverse
  end

end
