(function($) {
	$.fn.Banner = function(){
		var _this = $(this);
		var sWidth = _this.width(); 
		var len = _this.find("ul li").length;
		var index = 0;
		var picTimer;

		var btn = "<div class='btnBg'></div><div class='btn'>";
		for(var i=0; i < len; i++) {
			btn += "<span></span>";
		}
		btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
		_this.append(btn);
		_this.find(".btnBg").css("opacity",1);

		_this.find(".btn span").css("opacity",1).mouseenter(function() {
			index = _this.find(".btn span").index(this);
			showPics(index);
		}).eq(0).trigger("mouseenter");

		_this.find(".preNext").css("opacity",0.2).hover(function() {
			$(this).stop(true,false).animate({"opacity":"0.5"},300);
		},function() {
			$(this).stop(true,false).animate({"opacity":"0.2"},300);
		});

		_this.find(".pre").click(function() {
			index -= 1;
			if(index == -1) {index = len - 1;}
			showPics(index);
		});

		_this.find(".next").click(function() {
			index += 1;
			if(index == len) {index = 0;}
			showPics(index);
		});

		_this.find("ul").css("width",sWidth * (len));
		_this.find("ul li").css("width",sWidth);

		_this.hover(function() {
			clearInterval(picTimer);
		},function() {
			picTimer = setInterval(function() {
				showPics(index);
				index++;
				if(index == len) {index = 0;}
			},4000); 
		}).trigger("mouseleave");
		
		function showPics(index) {
			var nowLeft = -index*sWidth; 
			_this.find("ul").stop(true,false).animate({"left":nowLeft},300);
			_this.find(".btn span").removeClass("on").eq(index).addClass("on");	//组定义样式切换
			//_this.find(".btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300);	//默认切换
		}
	}
})(jQuery)