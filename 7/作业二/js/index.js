$(document).ready(function() {
    $('#zhiye').mouseover(function() {
        $('.school-list1').stop().fadeIn(500);
    });
    $('.school-list1,#zhiye').mouseleave(function() {
        $('.school-list1').stop().fadeOut(500);
    });
    $('#huiyuan').mouseover(function() {
        $('.school-list2').stop().fadeIn(500);
    });
    $('#huiyuan,.school-list2').mouseleave(function() {
        $('.school-list2').stop().fadeOut(500);
    });
    $('#shequ').mouseover(function() {
        $('.school-list3').stop().fadeIn(500);
    });
    $('#shequ,.school-list3').mouseleave(function() {
        $('.school-list3').stop().fadeOut(500);
    });

    // $('.aside-cList li').each(function() {
    //     $(this).mouseover(function(event) {
    //         $(this).find('.list-show').show();
    //         event.stopPropagation();
    //     });
    //     $(this).mouseleave(function(event) {
    //         $(this).find('.list-show').hide();
    //         event.stopPropagation();
    //     });
    // });
    // 改进方法
    $('.aside-cList li').mouseenter(function() {
        $('.list-show', this).show();
    });
    $('.aside-cList li').mouseleave(function() {
        $('.list-show', this).hide();
    });
    $('#search-btn').click(function() {
        $('.searchbox').addClass('scale');
    });
    $('#close-btn').click(function() {
        $('.searchbox').removeClass('scale');
    });
    //视频
    $('.kuai-icon').click(function() {
        $('.bottom').css("height", "80px");
        $('.con ul').eq(0).removeClass().addClass('fir');
    })
    $('.list-icon').click(function() {
            $('.bottom').css("height", "100px");
            $('.con ul').eq(0).removeClass().addClass('sec');
        })
        // 为什么用mouseenter和mouseleave？
        // mouseover事件，在鼠标穿过子元素的时候同样会触发，所以用mouseenter
        // 注意：因为.fir和.sec是用js动态添加的class，所以要注意绑定事件的方法，即使用事件委托
    var timer;
    $('.con').on("mouseenter", '.fir li', function() {
        show1($(this));
    })
    $('.con').on("mouseleave", '.fir li', function() {
        hide1($(this));
    })
    $('.con').on("mouseenter", '.sec li', function() {
        show2($(this));
    })
    $('.con').on("mouseleave", '.sec li', function() {
        hide2($(this));
    })

    function show1(selector) {
        selector.find('.cover').stop().animate({ opacity: "1" });
        selector.find('.bottom').stop().animate({ height: "140px" });
    }

    function show2(selector) {
        selector.find('.cover').stop().animate({ opacity: "1" });
    }

    function hide1(selector) {
        selector.find('.cover').stop().animate({ opacity: "0" });
        selector.find('.bottom').stop().animate({ height: "80px" });
    }

    function hide2(selector) {
        selector.find('.cover').stop().animate({ opacity: "0" });
    }

});



$(function() {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("#back-to-top").stop().fadeIn(1500);
            } else {
                $("#back-to-top").stop().fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#back-to-top").click(function() {
            //$('body,html').animate({scrollTop:0},1000);  
            if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 1000);
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });
});


// $(".icon-box").on("click", "#search-btn", this.searchshow);
// $(".searchbox").on("click", "#close-btn", this.searchide);
// var searchshow: function() { $(".searchbox").addClass("scale") }
// var searchide: function() { $(".searchbox").removeClass("scale") }
