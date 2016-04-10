class Creative < ActiveRecord::Base
	belongs_to :ad

	validates_presence_of :bid
	validates_presence_of :adText
end
