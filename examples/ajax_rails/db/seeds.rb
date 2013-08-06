# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# STEP 6: Create basic seed data for a 5 tasks here

Task.create(name: 'test task 1', completed: false)
Task.create(name: 'test task 2', completed: false)
Task.create(name: 'test task 3', completed: false)
Task.create(name: 'test task 4', completed: true)
Task.create(name: 'test task 5', completed: true)
