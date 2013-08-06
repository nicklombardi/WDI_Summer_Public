AjaxTodo::Application.routes.draw do
	# STEP 4 - Create routes required for TasksController

  root to: 'tasks#index'
  post '/create', to: 'tasks#create'
  put '/:id/complete' => 'tasks#complete'
  put '/:id/restore' => 'tasks#restore'
  delete '/:id/destroy' => 'tasks#destroy'

end
