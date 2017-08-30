var bookStoreDir = angular.module("bookStoreDir", ["bookStoreCtrls"]);
//注射器加载完所有模块时，此方法执行一次
bookStoreDir.run(function($templateCache) {
    $templateCache.put('hello.html', "<div>hello 123<div ng-transclude></div></div>");
});
bookStoreDir.directive('dir', function($templateCache) {
    return {
        restrict: 'E', //E 元素 A 属性 M 注释 C class
        template: $templateCache.get("hello.html"), //templateUrl
        //replace:true //是否替换指令里面的元素
        transclude: true //指定指令里面元素放在哪 ng-transclude
    };
});
bookStoreDir.directive('loader', function() {
    return {
        restrict: "AE",
        link: function(scope, element, attr) {
            element.bind("mouseenter", function() {
                //scope.loadData();
                //scope.$apply("loadData()");
                scope.$apply(attr.howtoload);
            });
        }
    };
});

bookStoreDir.directive('hello', function() {
    return {
        restrict: "E",
        scope: {}, //独立scope
        template: '<div><input type="text" ng-model="userName">{{userName}}</div>',
        replace: true,
        link: function(scope, element, attr) {
            element.bind("click", function() {
                console.log('123');
            });
        }
    };
});

bookStoreDir.directive('greet', function() {
    // return{
    //  restrict:'AE',
    //  scope:{
    //      flavor:'='
    //  },
    //  template:"<input type='text' ng-model='flavor'>",
    //  replace:true
    // template:"<div>{{flavor}}</div>"
    // link:function(scope,element,attr){
    //  scope.flavor = attr.flavor;
    // }
    //}

    // return {
    //     restrict: 'AE',
    //     scope: {
    //         name: '='
    //     },
    //     template: '<input type="text" ng-model="name">',
    //     repalce: true
    // }

    return {
        restrict: 'AE',
        scope: {
            say: '&'
        },
        template: '<input type="text" ng-model="username"/><br>' +
            '<button ng-click="say({name:username})">click</button><br>',
       
    };

});

// bookStoreDir.directive('expander',function(){
//     return{
//         require:"^?according",
//         restrict:'EA',
//         replace:true,
//         transclude:true,
//         scope:{
//             title:'=expanderTitle',
//         },
//         template:'<div>'+
//         '<div class=title ng-click="toggle()">{{title}}</div> '
//         +'<div class="body" ng-show="showMe" ng-transclude>'
//         +'</div>',
//         link:function(scope,element,attr,accordingController){
//             scope.showMe = false;
//             scope.toggle = function toggle(){
//                 scope.showMe = !scope.showMe;
//             }
//         }
//     }
// })

bookStoreDir.directive('expander',function(){
    return{
        require:"^?according",
        restrict:'EA',
        replace:true,
        transclude:true,
        scope:{
            title:'=expanderTitle'
        },
        template:'<div>'+
        '<div class=title ng-click="toggle()">{{title}}</div> '
        +'<div class="body" ng-show="showMe" ng-transclude>'
        +'</div>',
        link:function(scope,element,attr,accordingController){
            scope.showMe = false;
            accordingController.addExpander(scope);
            scope.toggle = function toggle(){
                scope.showMe = !scope.showMe;
                accordingController.gotOpened(scope);
            };
        }
    }
});

bookStoreDir.directive('according',function(){
    return{
        restrict:'EA',
        replace:true,
        // transclude:true,
        // template:'<div class="according" ng-transclude></div>',
        controller:function(){
            var expanders = [];
            this.gotOpened = function(selectedExpander){
                angular.forEach(expanders,function(data){
                    if(selectedExpander != data){
                        data.showMe = false;
                    }
                    console.log(data.showMe);
                });
            };
            this.addExpander = function(data){
                expanders.push(data);

            };
        }
    };
});