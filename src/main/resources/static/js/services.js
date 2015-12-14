angular.module('myApp').factory('contactService', ['$http', function($http){
	
	var factory = {}; 
	factory.contact = {};
	
	factory.getContact = function(id){
		 return $http.get("contacts").then(function(response){
			return response.data;
		});
	}
	
	factory.delContact = function(name){
		return $http.delete("contacts/" + name).then(function(response){
			return response.data;
		});
	}
	factory.setEditContact = function(contact){
		factory.contact = contact;
		};
	return factory;	
}]);
