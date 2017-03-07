angular
	.module('toDoList.completed')
	.config(completedConfig);
//$ is not jQuery in this case.
function completedConfig($stateProvider) {
	$stateProvider.state({
		name: 'completed',
		url:'/completed',
		templateUrl:'/toDoList/features/completed/completed.html',
		//Where controller name is defined. All controllers start with a capital letter
		controller:'CompletedCtrl',
		// Defines name of the module we will use in our view
		controllerAs:'CompletedVM'
	})
}