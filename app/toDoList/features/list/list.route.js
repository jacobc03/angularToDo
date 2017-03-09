angular
	.module('toDoList.list')
	.config(listConfig);
//$ is not jQuery in this case.
function listConfig($stateProvider) {
	$stateProvider.state({
		name: 'list',
		url:'/list',
		templateUrl:'/toDoList/features/list/list.html',
		//Where controller name is defined. All controllers start with a capital letter
		controller:'ListCtrl',
		// Defines name of the module we will use in our view
		controllerAs:'ListVM'
	})
}