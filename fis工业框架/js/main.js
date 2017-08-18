$(document).ready(function() {
	$('.change_a').mouseover(function(){
		$('#skincontrol').show();
	});
	$('#skincontrol').mouseleave(function(){
		$('#skincontrol').hide();
	});
    $('.more1').mouseover(function() {
        $('.baidu-setting').show();
    });
    $('.more1').mouseleave(function() {
        $('.baidu-setting').hide();
    })
    $('.more-btn').mouseover(function() {
        $('.more-product').show();
        $('.more-btn').hide();
    });
    $('.more-product').mouseleave(function() {
        $('.more-product').hide();
        $('.more-btn').show();
    });
    //头部和更多产品

    // 中间内容显示
    $('.denglu').click(function() {
        $('footer').hide();
        $('.s_main').show();
    });



    //中间内容导航栏
    $('#tuijian').click(function() {
        $('.content1').css('display', 'block');
        $('.content2,.content3,.content4,.content0').css('display', 'none');
        $(this).addClass('in');
        $('#daohang,#shiping,#gouwu,#guanzhu').removeClass('in');
    });
    $('#daohang').click(function() {
        $('.content1,.content3,.content4,.content0').css('display', 'none');
        $('.content2').css('display', 'block');
        $(this).addClass('in');
        $('#tuijian,#shiping,#gouwu,#guanzhu').removeClass('in');
    });
    $('#shiping').click(function() {
        $('.content3').css('display','block');
        $('.content2,.content1,.content4,.content0').css('display','none');
        $(this).addClass('in');
        $('#daohang,#tuijian,#gouwu,#guanzhu').removeClass('in');
    });
    $('#gouwu').click(function() {
        $('.content4').css('display','block');
        $('.content1,.content2,.content3,.content0').css('display','none');
        $(this).addClass('in');
        $('#daohang,#shiping,#tuijian,#guanzhu').removeClass('in');
    });
    $('#guanzhu').click(function(){
    	$('.content0').css('display','block');
        $('.content1,.content2,.content3,.content4').css('display','none');
        $(this).addClass('in');
        $('#daohang,#shiping,#tuijian,#gouwu').removeClass('in');
    });
    $('#daohang,#tuijian,#gouwu,#shiping,#guanzhu').mouseover(function() {
        if (!($(this).hasClass('in')))
            $(this).addClass('out');
    });
    $('#daohang,#tuijian,#gouwu,#shiping,#guanzhu').mouseleave(function() {
        $(this).removeClass('out');
    });


    // 滚动开始 滚动暂时不会写

    // 滚动结束
    
    // 换肤
    var body = document.getElementsByTagName('body')[0];
    var skinList = document.getElementById('skincontrol').getElementsByTagName('li');
    for (var i = 0; i < skinList.length; i++) {
        (function(i) {
            skinList[i].onclick = function() {
                //点击每个list标签更换对应的样式
                localStorage.setItem('baiduskin',i);
                removeClass(body);                
                switch (i) {
                    case 0:
                        addClass(body,'blank');
                        break;
                    case 1:
                        addClass(body,'purple');
                        break;
                    case 2:
                        addClass(body,'blue');
                        break;
                    default:
                        addClass(body,'green');
                }
                
            }
        })(i);
    }
    function addClass(element,classname){
    	if(!hasClass(element,classname)){
    		element.className = element.className + ' ' +classname;
    	}

    }
    function removeClass(element,classname){
    	var arg = arguments;
    	if(arg.length === 1){
    		element.className='';
    	}
    	else
    	if(hasClass(element,classname)){
    		var reg = new RegExp('(^|\\s)'+ classname +'($|\\s)');
    		element.className = element.className.replace(reg,'');
    	}
    }
    function hasClass(element,classname){
    	var reg = new RegExp('(^|\\s)'+ classname +'($|\\s)');
    	return element.className.match(reg);
    }
    // 换肤结束

    	if(localStorage.getItem('baiduskin')){
    		var skin = parseInt(localStorage.getItem('baiduskin'));
    		switch (skin) {
                    case 0:
                        addClass(body,'blank');
                        break;
                    case 1:
                        addClass(body,'purple');
                        break;
                    case 2:
                        addClass(body,'blue');
                        break;
                    default:
                        addClass(body,'green');
                }
    	}
    	else{
    		localStorage.setItem('baiduskin','3');
    	}
    // 换肤结束使用localstorage
});

// 回到顶部
$(function(){  
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>100){  
                    $("#back-to-top").fadeIn(1500);  
                }  
                else  
                {  
                    $("#back-to-top").fadeOut(1500);  
                }  
            });  
  
            //当点击跳转链接后，回到页面顶部位置  
            $("#back-to-top").click(function(){  
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

