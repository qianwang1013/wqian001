'use strict'


/*Index Controller*/
app.controller('header', function($scope){
	$scope.temp = 'cat';
});


app.controller('blog',['$scope','$http', '$anchorScroll', '$location', function($scope,$http,$anchorScroll, $location){
		$scope.isEditing =false;
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
			request.success(function(data){
				console.log(data);
				$scope.list(); 
				$scope.blogName = "";
				$scope.blogTag = "";
				$scope.blogContent = "";
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

			request.success(function(data){
				$scope.blogs = data; 
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
			request.success(function(data){
				console.log(data);
				$scope.list(); 
			});				
		};

		$scope.anchorForm = function(blog){
			$scope.isEditing = true;
			console.log(blog);
			$location.hash('form');
	        $anchorScroll();
	        $scope.blogID = blog.blogID
			$scope.blogName = blog.blogName;
			$scope.blogTag = blog.blogTag;
			$scope.blogContent = blog.blogContent;
		};

		$scope.edit = function(){
			var request = $http({
			    method: 'post',
			    url: 'app/db/init.php',
			    data: {
			    	method: 'edit',
			    	blogID: $scope.blogID,
			    	blogName: $scope.blogName,
			    	blogTag: $scope.blogTag,
			    	blogContent: $scope.blogContent
			    },
			    headers: { 'Content-Type': 'application/json' }
			});

			request.success(function(data){
				$scope.isEditing = false;
				$location.hash('blog');
		        $anchorScroll();	
		        $scope.list();
		        $scope.blogName = "";
				$scope.blogTag = "";
				$scope.blogContent = "";			
			})			
		};
}]);



