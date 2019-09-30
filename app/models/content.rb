class Content < ApplicationRecord
  belongs_to :post, optional: true
end
