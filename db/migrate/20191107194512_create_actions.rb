class CreateActions < ActiveRecord::Migration[5.1]
  def change
    create_table :actions do |t|
      t.string :description, nil: false
      t.belongs_to :card
      t.timestamps
    end
  end
end
