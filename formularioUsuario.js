var app = angular.module('myApp', []);
app.controller('controller', function($scope){
	$scope.acceptData = function (){
		if($scope.inputName.$valid){
		document.getElementById('userForm').style.display = 'block';
		}
	}
	

});