class Targeting < ActiveRecord::Base
	belongs_to :ad
	has_many :places

	validates_inclusion_of :gender, in: %w( masculino feminino indeterminado ), message: "provided is not a valid entry"

	accepts_nested_attributes_for :places, :allow_destroy => true, :reject_if => lambda { |a| a[:content].blank? }
end
