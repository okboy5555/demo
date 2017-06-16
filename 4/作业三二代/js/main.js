var baiDu = {
	init:function(){
		this.baiduSetting();
	},
	baiduSetting:function(){
		$('#navMore, #more-product').mouseover(function(){
			$("#more-product").show();
		}).mouseout(function(){
			$("#more-product").hide();
		})
	}

}
$(function(){
	baiDu.init();
})