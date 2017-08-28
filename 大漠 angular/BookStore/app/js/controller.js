var bookStoreCtrls = angular.module('bookStoreCtrls',[]);

bookStoreCtrls.controller('HelloCtrl',['$scope',function($scope){
	$scope.greeting = {
		text:'hello'
	};
}]);

bookStoreCtrls.controller('BookListCtrl',['$scope',function($scope){
	$scope.books=[
		{title:'<111>',author:'111'},
		{title:'<222>',author:'222'},
		{title:'<333>',author:'333'}
	];
}]);

bookStoreCtrls.controller('formCtrl',function($scope){
	$scope.userInfo={
		email:"543872824@qq.com",
		password:"123456",
		autoLogin:true
	};
	$scope.getFormData=function(){
		console.log($scope.userInfo);
	};
	$scope.setFormData=function(){
		$scope.userInfo={
			email:"123456@qq.com",
			password:"654321",
			autoLogin:false
		};
	};
	$scope.resetFormData=function(){
		$scope.userInfo={
			email:"",
			password:"",
			autoLogin:false
		};
	};

});

bookStoreCtrls.controller('cssCtrl',function($scope){
		$scope.isRed =  false;
		$scope.isGreen = false;
		$scope.setGreen=function(){
			$scope.messageText= "green";
			$scope.isRed= false;
			$scope.isGreen = true;
		};
		$scope.setRed=function(){
			$scope.messageText= "red";
			$scope.isRed= true;
			$scope.isGreen = false;
		};
});

bookStoreCtrls.controller('ngShowCtrl',function($scope){
	$scope.menuState={show:false};
	$scope.toggleMenu = function(){
		$scope.menuState.show = !$scope.menuState.show;
	};

});


