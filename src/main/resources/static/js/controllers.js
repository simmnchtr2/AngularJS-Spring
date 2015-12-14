angular.module('myApp').controller('ctrlContacts',['$scope', '$location','$rootScope','contactService', function($scope, $location, $rootScope, contactService){
//	ContactService.getContact().success(function(contacts) {
//        $scope.contacts = contacts;                 
//    });
//	
//	$scope.confirmDel = function(id){
//		if(confirm('Do you really want to delete this contact?')){
//			ContactService.delContact(id).success(function() {
//				ContactService.getContact().success(function(contacts) {
//					$scope.contacts = contacts;                 
//				});             
//			});
//		}
//	};
//	
//	$scope.setOrder = function (orderby) {
//        if (orderby === $scope.orderby)
//        {
//            $scope.reverse = !$scope.reverse;
//        }
//        $scope.orderby = orderby;
//    };
	
	/*$scope.contacts= [{
		"name":"simur",
		"email":"aa@aa.com"
	},{
		"name":"aimur",
		"email":"aa@aa.com"
	}];*/
	
	/*$scope.getContact = function(){
		contactService.getContact();
	}
	*/
	$scope.Simur ="hhhhhh";
	contactService.getContact().then(function(data){
		$scope.contacts= data;
	});
	
	$scope.confirmDel= function(name){
		contactService.delContact(name).then(function(data){
			$scope.contacts = data;
		});
	}
	
	
	/* $rootScope.$on=('saveContact', function(event, contact){
		 $scope.contacts.push(contact);
	 });*/
	
    
    $scope.createEmployee= function(){
    	contactService.contact = {};
    	$location.path("/createContacts");
    }
    
    $scope.editContact = function(contact){
    	contactService.setEditContact(contact);
    	$location.path("/createContacts");
    }
    
   
}]);

angular.module('myApp').controller('ContactsController',['$scope', '$http','$location','$rootScope','contactService', function ($scope, $http, $location, $rootScope,contactService){
	
	$scope.contact = contactService.contact;
	$scope.saveContact = function(){
		$http.post("contacts", $scope.contact)
		};
	
	/*$scope.saveContact = function(){
		$http.post("contacts", $scope.contact).then(function(response)
				{
					$rootScope.$broadcast('saveContact', $scope.contact)
			    });
	}*/
	
	 $scope.returnPrevious = function(){
	    	$location.path("/");
	    }
	
	
}]);



