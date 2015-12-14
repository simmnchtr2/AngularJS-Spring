var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
	
	$routeProvider.when('/',
			{
				controller:'ctrlContacts',
				templateUrl:'templates/allContacts.html'
				
			});
	$routeProvider.when('/createContacts',
			{
				controller:'ContactsController',
				templateUrl:'templates/createContacts.html'
				
			});
                           
              
}]);
myApp.run(function($location){
	$location.path("/")
});