class Card < ApplicationRecord
  validates_presence_of :title, allow_blank: false
  belongs_to :list

  def board_id
    list.board_id
  end

  def attributes
    super.merge({ board_id: board_id })
  end
end
