var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope', function($scope) {
    $scope.greeting = {
        text: 'hello'
    };
    $scope.pageClass = "hello";


    $scope.loadData = function() {
        console.log('加载数据中111');
    };
}]);

bookStoreCtrls.controller('BookListCtrl', ['$scope', function($scope) {
    $scope.books = [
        { title: '<111>', author: '111' },
        { title: '<222>', author: '222' },
        { title: '<333>', author: '333' }
    ];
    $scope.pageClass = "list";

    $scope.loadData2 = function() {
        console.log('加载数据中222');
    };
}]);

bookStoreCtrls.controller('formCtrl', function($scope) {
    $scope.userInfo = {
        email: "543872824@qq.com",
        password: "123456",
        autoLogin: true
    };
    $scope.getFormData = function() {
        console.log($scope.userInfo);
    };
    $scope.setFormData = function() {
        $scope.userInfo = {
            email: "123456@qq.com",
            password: "654321",
            autoLogin: false
        };
    };
    $scope.resetFormData = function() {
        $scope.userInfo = {
            email: "",
            password: "",
            autoLogin: false
        };
    };

});

bookStoreCtrls.controller('cssCtrl', function($scope) {
    $scope.isRed = false;
    $scope.isGreen = false;
    $scope.setGreen = function() {
        $scope.messageText = "green";
        $scope.isRed = false;
        $scope.isGreen = true;
    };
    $scope.setRed = function() {
        $scope.messageText = "red";
        $scope.isRed = true;
        $scope.isGreen = false;
    };
});

bookStoreCtrls.controller('ngShowCtrl', function($scope) {
    $scope.menuState = { show: false };
    $scope.toggleMenu = function() {
        $scope.menuState.show = !$scope.menuState.show;
    };

});

bookStoreCtrls.controller('directiveCtrl', function($scope) {
    //$scope.ctrlFlavor="666666";

    // $scope.testname="my name is xingoo";

    $scope.sayHello = function(name) {
        console.log("hello !" + name);
    };
    $scope.sayNo = function(name) {
        console.log("no !" + name);
    };
    $scope.sayYes = function(name) {
        console.log("yes !" + name);
    };
});

bookStoreCtrls.controller('expanderCtrl',function($scope){
     $scope.expanders = [{
        title : 'Click me to expand',
        text : 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title : 'Click this',
        text : 'I am even better text than you have seen previously'
    }, {
        title : 'Test',
        text : 'test'
    }];
});

