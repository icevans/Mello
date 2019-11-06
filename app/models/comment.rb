class Comment < ApplicationRecord
  validates_presence_of :text, allow_blank: false
  belongs_to :card
end
