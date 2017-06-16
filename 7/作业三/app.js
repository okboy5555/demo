$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};//图片加载流
        window.onscroll = function(){
            if(scrollside()){
                $.each(dataImg.data,function(index,value){
                    var box = $("<div>").addClass("box").appendTo($("#container"));//添加div
                    var content = $("<div>").addClass("content").appendTo(box);//添加div
                    $("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);//添加img
                });
                imgLocation();
            }
        };
        window.onresize=function(){
            imgLocation();
        };
    });
});

//鼠标滑动到最后一张图二分之一高度的时候的事件
function scrollside(){
    var box = $(".box");
    var lastboxHeight = box.last().get(0).offsetTop+Math.floor(box.last().height()/2);//计算最后一个box距离最上端的距离加上这个box高度的一半
    var documentHeight = $(document).width();//屏幕高度
    var scrollHeight = $(window).scrollTop();//鼠标滑动高度
    return (lastboxHeight<scrollHeight+documentHeight)?true:false;//如果滑动距离＜lastboxHeight则不执行，否则执行
}

function imgLocation(){
    var box = $(".box");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);//计算一行有多少张图片
    var boxArr=[];
    $('#container').css({
        'width':boxWidth*num,
        'margin':'0 auto'
    })
    box.each(function(index,value){
        value.style.cssText = '';
        var boxHeight = box.eq(index).height();
        if(index<num){
            boxArr[index]= boxHeight;//将高度填入高度数组
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);//获取最小高度
            var minboxIndex = $.inArray(minboxHeight,boxArr);//获取最小高度的位置
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left//向左便宜minboxIndex个box
            });
            boxArr[minboxIndex]+=box.eq(index).height();//重新计算最短高度
        }
    });
}