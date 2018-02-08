app.controller('Main', function($scope, $location, localStorageService) 
		{
		$scope.goTo = function(url) {
		    				$location.path(url);
		    			}
		  $scope.dateTime = {pubdate: new Date(),}
		})