define(function(require, exports, module) {

    var a={};
    // 通过 exports 对外提供接口
    a.flashResize = function () {
        $('.flashBox li img').outerWidth($('.flashBox').outerWidth());
        window.onresize=function() {
            $('.flashBox li img').outerWidth($('.flashBox').outerWidth());
        }
    };
    a.flash = function(){
        var sum=3;
        var timer = null;
        var num=0;
        function autorun() {
            if (num > sum) {
                num = 0;
            }
            $('.flashPo span').eq(num).addClass('on').siblings().removeClass();
            $('.flashItem').stop().animate({
                left: -$('.flashItem li').outerWidth()  * num
            }, 500);
            num++;

        }
        timer = setInterval(autorun, 3000); // 指令进行了分离
    };
    a.formSubmit=function(){
        $('form').on('submit',function(){
            if($('#exampleInputTitle').val()=='' || $('#newsType').val()=='--请选择--'){
                $('.error').text('新闻标题和所属板块不能为空');
                return false;
            }
        });
    };
    a.trigger=function(){
        $('nav a').eq(0).click();
    }
    a.del=function(){
        $('.del').on('click',function(){
            var i=confirm("删除此行数据？");
            if(i){
                var id=$(this).parents('tr').find('.newsId').text().trim();
                id=parseInt(id);
                var link='delNews.php?newsId='+id;
                location=link;
            }
        });
    }
    a.update=function(){
        $('.update').on('click',function(){
            var i=confirm("修改此行数据？");
            if(i){
                var id=$(this).parents('tr').find('.newsId').text().trim();
                id=parseInt(id);
                var link='NewsUpdate.php?newsId='+id;
                location=link;
            }
        });
    }
    a.quit=function(){
        $('.quit').on('click',function(){
            var a=confirm("是否要退出登录？");
            if(a){
                window.location='quit.php';
            }
        })
    }
    // 或者通过 module.exports 提供整个接口
    module.exports =a;

});