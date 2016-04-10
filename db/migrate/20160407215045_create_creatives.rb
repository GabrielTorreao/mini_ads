class CreateCreatives < ActiveRecord::Migration
  def change
    create_table :creatives do |t|
      t.float :bid
      t.text :adText
      t.integer :ad_id

      t.timestamps null: false
    end
  end
end
