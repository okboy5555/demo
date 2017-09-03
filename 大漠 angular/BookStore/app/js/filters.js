var bookStoreFil = angular.module("bookStoreFil",[]);

bookStoreFil.filter('filter1',function(){
	return function(item){
		return item + " o(*_*)o";
	};
});