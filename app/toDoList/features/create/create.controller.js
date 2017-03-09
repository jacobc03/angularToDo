angular
	.module('toDoList.create')
	.controller('CreateCtrl', CreateCtrl)

	function CreateCtrl($http) {
		var vm = this;

		vm.newData = {
			toDoItem: '',
			toDoDate: ''
		}


		vm.addToDo = function(){
				console.log(vm.newData);
				$http.post('/api/newitem', vm.newData)
				.then(function(res){
					console.log('Successful: '+ res)
				});
		}
	}

