var server = angular.module ('server',[]);

server.controller('serverController', ['$scope', '$http', '$log', function($scope, $http, $log){

	var config = {
		method: 'GET',
		url: 'myServer.json',
		//data:'', //datos en caso de ser un POST o PUT
		//params:'', //objeto con los parametros a la URL

	};

	var response = $http.get('myServer.json');

	response.then(function(data, status, headers, config) {
      var serverData =data;
  });

	$scope.showUserData = function(){
	console.log(
		this.response.userData.name,
		this.response.userData.lastName,
		);

	};


	
}])