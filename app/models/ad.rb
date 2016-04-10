class Ad < ActiveRecord::Base
	has_many :creatives, :dependent => :destroy
	has_many :targetings, :dependent => :destroy

	self.per_page = 10

	validates_presence_of :budget
	validates_presence_of :creatives, message: 'Must have at least one Creative'
	validates_presence_of :targetings, message: 'Must have at least one Targeting'
	validates_numericality_of :budget, greater_than: 0

	accepts_nested_attributes_for :creatives, :allow_destroy => true, :reject_if => lambda { |a| a[:bid].blank? || a[:adText].blank? }
	accepts_nested_attributes_for :targetings, :allow_destroy => true, :reject_if => lambda { |a| a[:gender].blank? }
end
