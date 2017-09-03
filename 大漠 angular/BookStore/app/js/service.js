var bookStoreService = angular.module('bookStoreService', []);

bookStoreService.factory("userListService",function($http){
	var doRequest = function(username){
		return $http({
			method:"GET",
			url:'js/data.json'
		});
	};
	return{
		userList:function(username){
			return doRequest(username);
		}
	};
});