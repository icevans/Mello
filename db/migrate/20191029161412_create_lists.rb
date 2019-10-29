class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :title, nil: false
      t.belongs_to :board
      t.timestamps
    end
  end
end
