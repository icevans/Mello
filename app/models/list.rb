class List < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :board
  has_many :cards
end
