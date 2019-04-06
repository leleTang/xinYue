//页面初始化开始
$(document).ready(function() {
	var index = createIndexTemplate();
	//使用电脑跳转
	index.component.ifPC();
	//判断手机横竖屏状态
	index.component.orientation();
})
//页面初始化结束
function createIndexTemplate() {
	var templateObj = {}
	//	常量
	templateObj.constant = {};
	//	组件
	templateObj.component = {};
	//内部函数
	templateObj.inner = {};

	//使用电脑跳转
	templateObj.component.ifPC = function() {
		if(!templateObj.inner.isMobile()) {
			window.location.href = "index.html";
		}
	}
	//判断电脑或手机 
	templateObj.inner.isMobile = function() {
		var userAgentInfo = navigator.userAgent;

		var mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];

		var mobile_flag = false;

		//根据userAgent判断是否是手机
		for(var v = 0; v < mobileAgents.length; v++) {
			if(userAgentInfo.indexOf(mobileAgents[v]) > 0) {
				mobile_flag = true;
				break;
			}
		}

		var screen_width = window.screen.width;
		var screen_height = window.screen.height;

		//根据屏幕分辨率判断是否是手机
		if(screen_width < 500 && screen_height < 800) {
			mobile_flag = true;
		}

		return mobile_flag;
	}
	//判断手机横竖屏状态
	templateObj.component.orientation=function(){
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {  
            if (window.orientation === 90 || window.orientation === -90 ){   
                alert('横屏状态！');  
            }    
        }, false);   
	}
	return templateObj;
}