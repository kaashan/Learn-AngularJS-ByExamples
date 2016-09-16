var appControllers = angular.module('appControllers', []);

appControllers.controller('MainController',['$scope','$http','JSONService', function($scope,$http,JSONService){
	$scope.url = 'https://data.gov.in/api/datastore/resource.json?resource_id=e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9&api-key=317c2c3b801ff9afdc0e9a3b36249b47';
	
	$scope.findBanks = function(){
		var self = $scope, url = $scope.url;
		if($scope.state){
			url = url + "&filters[state]="+ $scope.state;
		}
		if($scope.city){
			url = url +"&filters[city]="+ $scope.city;
		}
		$http.get(url).then(function(response) {
			if(response.data.records.length){
				self.listData = response.data.records;
				self.noRecordsFound = false;
			}else{
				self.noRecordsFound = true;
			}	
		});
	}

	$scope.getCities = function(){
		var cityList = document.getElementById('cityDrpdwn');
		$scope.clearList(cityList);
		var jsonOptions = JSONService.getJSONFile($scope.state + '-cities.json');
		jsonOptions.then(
			function(response){ //success callback
				JSONService.populateData(response.data, cityList, 'city');
			},
			function(response){ //error callback
				console.log('some error occurred');
			}
		);
		$scope.city = "";
	}

	$scope.clearList = function(node){
		while(node.firstChild){
			node.removeChild(node.firstChild);
		}
	}	

}]);