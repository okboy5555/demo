// 所有模块都通过 define 来定义
define(function(require, exports, module) {

    // 通过 require 引入依赖
    var $ = require('jquery');
    //var Spinning = require('./spinning');
    var index=require('index');
    index.flashResize();
    index.flash();
    index.formSubmit();
    index.trigger();
    index.del();
    index.update();
    index.quit();
});
