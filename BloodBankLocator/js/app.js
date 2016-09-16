angular.module('bloodBankApp',['appControllers','appServices','ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('listBanks',{
	        url:'/banks',
	        templateUrl:'views/listEntries.html'
	    });
	}])
	.run(function($rootScope, $http, JSONService){
	   var stateList = document.getElementById('stateDrpdwn');
	   var jsonOptions = JSONService.getJSONFile('IndianStates.json');
	   jsonOptions.then(
			function(response){
				JSONService.populateData(response.data, stateList, 'state');
			},
			function(response){
				console.log('some error occurred');
			}
		);
	});


