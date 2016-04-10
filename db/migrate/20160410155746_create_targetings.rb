class CreateTargetings < ActiveRecord::Migration
  def change
    create_table :targetings do |t|
      t.integer :ad_id
      t.string :gender

      t.timestamps null: false
    end
  end
end
