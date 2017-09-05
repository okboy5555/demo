// var BookListservice = angular.module("BookListService", []);

// BookListservice.factory('getPagedDataAsync', function($http,$state,$stateParams) {
// 	console.log($stateParams);
//     var doRequest = function(username,searchText) {
//         setTimeout(function() {
//             var data;
//             if (searchText) {
//                 var ft = searchText.toLowerCase();
//                 $http.get('../src/data/books' + $stateParams.bookType + ".json")
//                     .success(function(largeLoad) {
//                         data = largeLoad.filter(function(item) {
//                             return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
//                         });
//                         $scope.setPagingData(data, page, pageSize);
//                     });
//             } else {
//                 $http.get('../src/data/books' + $stateParams.bookType + '.json')
//                     .success(function(largeLoad) {
//                         $scope.setPagingData(largeLoad, page, pageSize);
//                     });
//             }
//         }, 100);
//     };
//     return{
// 		userList:function(username){
// 			return doRequest(username);
// 		}
// 	};
// });
