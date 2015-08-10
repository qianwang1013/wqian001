'use strict'


/*Index Controller*/
app.controller('header', function($scope){
	$scope.temp = 'cat';
});


app.controller('blog',['$scope','$http', function($scope,$http){
		$scope.create = function(){
			var request = $http({
			    method: 'post',
			    url: 'app/db/init.php',
			    data: {
			    	method: 'add',
					blogName: $scope.blogName,
					blogTag: $scope.blogTag,
					blogContent: $scope.blogContent
			    },
			    headers: { 'Content-Type': 'application/json' }
			});
		};

		$scope.list = function(){
			var request = $http({
			    method: 'post',
			    url: 'app/db/init.php',
			    data: {
			    	method: 'listAll',
			    },
			    headers: { 'Content-Type': 'application/json' }
			});			
		};

		$scope.delete = function(id){
			var request = $http({
			    method: 'post',
			    url: 'app/db/init.php',
			    data: {
			    	method: 'delete',
			    	blogID: id
			    },
			    headers: { 'Content-Type': 'application/json' }
			});			
		};

		$scope.edit = function(id){
			var request = $http({
			    method: 'post',
			    url: 'app/db/init.php',
			    data: {
			    	method: 'edit',
			    	blogID: id
			    },
			    headers: { 'Content-Type': 'application/json' }
			});			
		};
}]);



