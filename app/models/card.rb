class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :list
end
