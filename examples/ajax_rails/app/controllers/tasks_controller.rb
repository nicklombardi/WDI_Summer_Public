class TasksController < ApplicationController
	# STEP 3: Create the following TasksController actions:
	# index - respond_to html & json
	# create - respond_to json
	# complete - respond_to js
	# destroy - respond_to js

	def index
		@tasks = Task.all

		respond_to do |format|
		  format.html
		  format.json { render json: @tasks }
		end
	end

	def create
		@task = Task.new(name: params[:name])

		respond_to do |format|
		  format.json { render json: @task }
		end
	end

	def complete
		@task = Task.find(params[:id])
		@task.completed = true
		@task.save

		respond_to do |format|
		  format.js {}
		end
	end

	def destroy
		@task = Task.find(params[:id])
		@task.delete

		respond_to do |format|
			format.js {}
		end
	end

	# STEP 8: Make the index action respond to json requests with json containing the array from `Task.all`

	# STEP 21: In the create action, instantiate a new `Task` object and save filling in the `name` parameter
	# STEP 22: In the create action, set up `respond_to` to a json request with json containing the saved task object

	# STEP 25: Find the task by id and set it's `completed` property to `true` in the `TasksController#complete` action
	# STEP 26: Make the `TasksController#complete` `respond_to` respond to a javascript request
end
