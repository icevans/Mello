class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title, nil: false
      t.string :description
      t.string :labels, array: true, default: [], nil: false
      t.datetime :due_date
      t.timestamps
      t.belongs_to :list
    end
  end
end
