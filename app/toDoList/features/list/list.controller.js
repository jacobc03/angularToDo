angular
	.module('toDoList.list')
	.controller('ListCtrl', ListCtrl)

	function ListCtrl($http) {
		var vm = this;

		
				$http.get('/list')
				.then(function(res){
					console.log(res);
					vm.data = res;
				});
		
		
	}
