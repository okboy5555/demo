var bookStore = angular.module('bookStoreApp', ['bookStoreCtrls', 'ui.router', 'ngAnimate','bookStoreDir','bookStoreFil']);
bookStore.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/hello');
    $stateProvider
        .state('hello', {
        	url:'/hello',
            views:{
                '':{
                    templateUrl:'tpls/hello.html',
                     controller: 'HelloCtrl'
                },
                'topbar@hello':{
                    templateUrl:'tpls/topbar.html'
                },
                // 'main@index':{
                //     templateUrl:'tpls/hello.html'
                // }
            }     	
        })
        .state('list', {
            url:'/list',
            views:{
                '':{
                    templateUrl: 'tpls/bookList.html',
                     controller: 'BookListCtrl'
                },
                'topbar@list':{
                    templateUrl:'tpls/topbar.html'
                },
            }       
        }).state('form', {
            url:'/form',
            templateUrl: 'tpls/form.html',
            controller: "formCtrl"
        }).state('css', {
            url:'/css',
            templateUrl: 'tpls/css.html',
            controller: "cssCtrl"
        }).state('ngshow', {
            url:'/ngshow',
            templateUrl: 'tpls/ngshow.html',
            controller: "ngShowCtrl"
        }).state('directive',{
            url:'/directive',
            templateUrl:'tpls/directive.html',
            controller:'directiveCtrl'
        }).state('expander',{
            url:'/expander',
            templateUrl:'tpls/expander.html',
            controller:'expanderCtrl'
        }).state('http',{
            url:'/http',
            templateUrl:'tpls/http.html',
            controller:'httpCtrl'
        }).state('service',{
            url:'/service',
            templateUrl:'tpls/service.html',
            controller:'serviceCtrl'
        }).state('filter',{
            url:'/filter',
            templateUrl:'tpls/filter.html'
        });
});
