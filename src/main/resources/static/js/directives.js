angular.module('myApp').directive('directiveController',function(){
	
	

	return {
		restrict:'A',
		template: '<div>{{greeting}}  {{name}} {{names}}</div>',
		scope:{
			name:"=",
			names:"@"
		},
		link: function(scope, element, attrs){
			scope.greeting ="Hello";
			scope.name = "confused";
			
		}
		
	
	};
});

angular.module('myApp').directive('footerController',function(){
	
	return{
		restrict: 'A',
		template:'<div class="footer" style:"float: left"><p class="footer">&copy; Contact Info 2015</p></div>'
	
	};
	
});