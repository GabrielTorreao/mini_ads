class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.integer :targeting_id
      t.string :content

      t.timestamps null: false
    end
  end
end
