var servicesModule = angular.module('appServices', []);

servicesModule.service('JSONService', ['$http', function($http){
    this.getJSONFile = function(fileName){
		return $http.get('data/' + fileName);
	};

	this.populateData = function(data, parentNode, value){
		data.forEach(function(item) {
	        var option = document.createElement('option');
	        option.value = item[value];
			var optionTxt = document.createTextNode(item[value]);
	        option.appendChild(optionTxt);
	        parentNode.appendChild(option);
	     });
	};
}]);