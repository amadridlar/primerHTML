var app = angular.module('myApp', ['server']);

app.controller('controller',['$scope',  function($scope){
	$scope.userData = {
		name:'',
		lastName:'',
		nif:'',
		children: false,
		childrenNumber: 0,
		married: false,
		numberOfMates: 0,
		item:'',
	}

	$scope.acceptData = function (){
		if($scope.myTable.inputName.$valid && $scope.myTable.inputLastName.$valid  && $scope.myTable.inputEmail.$valid){
		document.getElementById('userForm').style.display = 'block';
		}
	}

	$scope.addItem = function(){
	$scope.itemCopy = $scope.userData.item;
	console.log($scope.itemCopy);
	};

	


}]);

