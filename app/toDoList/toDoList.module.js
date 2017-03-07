angular
	.module('toDoList',[
		'ui.router',
		'toDoList.list',
		'toDoList.create',
		'toDoList.completed'
		])
	.config(toDoListConfig);

function toDoListConfig($urlRouterProvider) {
	//if the route isnt defined 'otherwise' will bring user to this route
	$urlRouterProvider.otherwise('/')
}