var appControllers = angular.module('appControllers', []);

appControllers.controller('MainController',['$scope','$http', function($scope,$http){
	var self = $scope;
	var url = 'https://data.gov.in/api/datastore/resource.json?resource_id=e16c75b6-7ee6-4ade-8e1f-2cd3043ff4c9&api-key=317c2c3b801ff9afdc0e9a3b36249b47';
	
	
	$scope.findBanks = function(){
		var self = $scope;
		if($scope.state){
			url = url + "&filters[state]="+ $scope.state;
		}
		if($scope.city){
			url = url +"&filters[city]="+ $scope.city;
		}
		
		$http.get(url).then(function(response) {
			if(response.data.records.length){
				self.listData = response.data.records;
			}else{
				self.noRecordsFound = true;
			}
			
		});
	}

	$scope.getCities = function(){
		var cityList = document.getElementById('cityDrpdwn');
		$scope.clearList(cityList);
		$http.get('data/' + $scope.state + '-cities.json').then(function(response) {
			var jsonOptions = response.data;
			jsonOptions.forEach(function(item) {
		        var option = document.createElement('option');
		        option.value = item.name;
				var optionTxt = document.createTextNode(item.city);
		        option.appendChild(optionTxt);
		        cityList.appendChild(option);
	      });
		});
	}

	$scope.clearList = function(node){
		while(node.firstChild){
			node.removeChild(node.firstChild);
		}
	}	

}])
.controller('BloodBankListController',['$rootScope','$scope','$http', function($rootScope,$scope,$http){

	/*$http.get($scope.url).then(function(response) {
		self.listData = response.data.records;
	});*/
}]);