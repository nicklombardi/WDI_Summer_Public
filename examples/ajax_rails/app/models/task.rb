# Step 1: Review this file
class Task < ActiveRecord::Base
  attr_accessible :id, :name, :completed
end
