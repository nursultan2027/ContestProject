var app = angular.module("app", ['ngRoute', 'LocalStorageModule'])
	.config(function(localStorageServiceProvider) {
	    			localStorageServiceProvider
	    				.setPrefix('Test')
	    				.setStorageType('sessionStorage')
	    				.setNotify(true, true)
	    		})
	.config(function($routeProvider){
        		$routeProvider
	            .when("/User", {
	                templateUrl : "views/user.html",
	                controller : "taskController"
	            })
	            .when("/Priem", {
	                templateUrl : "views/priem.html",
	                controller : "priemController"
	            })
              })