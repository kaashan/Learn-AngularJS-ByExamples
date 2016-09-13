angular.module('bloodBankApp',['appControllers','ui.router'])
	.config(['$stateProvider', function($stateProvider){
		$stateProvider.state('listBanks',{
	        url:'/banks',
	        templateUrl:'views/listEntries.html',
	        controller:'BloodBankListController'
	    });
	}])
	.run(function($rootScope, $http){
	   var stateList = document.getElementById('stateDrpdwn');
	   $http.get('data/IndianStates.json').then(function(response) {
			var jsonOptions = response.data;
			jsonOptions.forEach(function(item) {
		        var option = document.createElement('option');
		        option.value = item.state;
				var optionTxt = document.createTextNode(item.state);
		        option.appendChild(optionTxt);
		        stateList.appendChild(option);
	      });
		});
	});


