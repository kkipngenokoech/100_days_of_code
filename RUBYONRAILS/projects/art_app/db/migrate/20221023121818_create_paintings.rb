class CreatePaintings < ActiveRecord::Migration[7.0]
  def change
    create_table :paintings do |t|
      t.string :name
      t.integer :price
      t.belongs_to :artist, null: false, foreign_key: true
      t.belongs_to :gallery, null: false, foreign_key: true

      t.timestamps
    end
  end
end
