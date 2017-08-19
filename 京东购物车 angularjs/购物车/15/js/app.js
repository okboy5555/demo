(function (angular) {
    'use strict';
    // 创建一个模块用于管理整个应用
    var myApp = angular.module('myApp', []);
    myApp.factory('dataService', function () {
        var cart = [{
                id: 1,
                name: '233',
                img: './images/one.jpg',
                price: 19,
                prop: ' 风干牛肉干原味400g 1件',
                quantity: 1,
                weight: '0.40kg/件',
            },
            {
                id: 2,
                name: '233',
                img: './images/two.jpg',
                price: 1927,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 3,
                name: '666',
                img: './images/three.jpg',
                price: 1699,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 4,
                name: '666',
                img: './images/one.jpg',
                price: 1899,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 5,
                name: '666',
                img: './images/two.jpg',
                price: 789,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
            {
                id: 6,
                name: '667',
                img: './images/three.jpg',
                price: 99,
                prop: ' TF卡80MB/s, 32GB 1个',
                quantity: 1,
                weight: '0.01kg/件',
            },
           
        ];
        var buy = [];
        var service = {
            data: cart,
            buyData: buy
        };
        return service;
    });
    //创建一个控制器用于和界面交互数据
    myApp.controller('cartController', function ($scope, dataService) {
        $scope.cart = dataService.data;
        $scope.buy = dataService.buyData;
        $scope.seleData = dataService.selector1;
        $scope.actions = {};
        // 获取点击的id
        $scope.actions.getId = function (id) {
            var index = 0;
            angular.forEach($scope.cart, function (item, key) {
                if (item.id === id) {
                    index = key;
                }
            });
            return index;
        }
        // 点击加入购物车
        $scope.actions.purches = function (id) {
                var buyId = $scope.actions.getId(id);
                var buyCart = $scope.cart[buyId];
                $scope.buy.push(buyCart);
            
        }
        // 计算购物总价
        $scope.actions.totalPrice = function () {
            var total = 0;
            angular.forEach($scope.buy, function (good) {
                total += good.quantity * good.price;
            })
            return total;
        }
        // 计算总购买数
        $scope.actions.totalQuantity = function () {
            var total = 0;
            angular.forEach($scope.buy, function (good) {
                total += parseInt(good.quantity);
            })
            return total;
        }
        //购买数量 + - add(id) reduce(id)
        $scope.actions.add = function (id) {
            var index = $scope.actions.getId(id);
            if (index != -1) {
                var item = $scope.buy[index];
                item.quantity++;
            }
        }
        $scope.actions.reduce = function (id) {
            var index = $scope.actions.getId(id);
            if (index != -1) {
                var item = $scope.buy[index];
                if (item.quantity > 1) {
                   item.quantity--;
                } else {
                    var returnKey = confirm('从购物车内删除该产品!')
                    if (returnKey) {
                        $scope.actions.remove(id);
                    }
                }
            }
        }
        // 删除
        $scope.actions.remove = function (id) {
            var index = $scope.actions.getId(id);
            if (index !== -1) {
                $scope.buy.splice(index, 1);
            }
        }
        $scope.$watch('buy', function (newValue, oldValue) {
            angular.forEach(newValue, function (item, key) {
                if (item.quantity < 1) {
                    var returnKey = confirm('从购物车内删除该产品!')
                    if (returnKey) {
                        $scope.actions.remove(key);
                    } else {
                        item.quantity = oldValue[key].quantity;
                    }
                }
            })
        }, true);
    });
})(angular);