// Declared the main module (app).
angular
	.module('toDoList',[
		// Defined the modules dependencies and any "global" dependencies
        // Modules that this module depends on will inherit this modules dependencies


		// Global Dependencies
		'ui.router',

		// Features
		'toDoList.list',
		'toDoList.create',
		'toDoList.completed'
		])
	.config(toDoListConfig);

function toDoListConfig($urlRouterProvider) {
	//if the route isnt defined 'otherwise' will bring user to this route
	$urlRouterProvider.otherwise('/')
}