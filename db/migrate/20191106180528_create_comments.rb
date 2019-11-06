class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.timestamps
      t.belongs_to :card
    end
  end
end
