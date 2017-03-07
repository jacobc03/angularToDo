angular
	.module('toDoList.create')
	.config(createConfig);
//$ is not jQuery in this case.
function createConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
		url:'/create',
		templateUrl:'/toDoList/features/create/create.html',
		//Where controller name is defined. All controllers start with a capital letter
		controller:'CreateCtrl',
		// Defines name of the module we will use in our view
		controllerAs:'CreateVM'
	})
}