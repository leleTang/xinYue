//页面初始化开始
$(document).ready(function() {
	var index = createIndexTemplate();
	//侧边栏选择英雄及感应鼠标滚动
	index.component.rightSide();
	//返回顶部
	index.component.goToTop();
	//判断手机
	index.component.ifMobile();
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

	//侧边栏选择英雄及感应鼠标滚动
	templateObj.component.rightSide = function() {
		var navItem = $('.js-hero-list li'),
			partItem = $('.js-part'),
			scrollHandle = function() {
				var t = $(window).scrollTop();
				partItem.each(function() {
					var min = $(this).offset().top - 400,
						max = $(this).offset().top + $(this).height() - 350,
						currNav = navItem.eq(partItem.index(this));
					if(t >= min && t < max) {
						currNav.addClass('active');
					} else {
						currNav.removeClass('active');
					}
				});
			};
		navItem.on('click', function() {
			var currOffset = partItem.eq(navItem.index(this)).offset();
			if(!(currOffset == undefined)) {
				currOffset = partItem.eq(navItem.index(this)).offset().top - 50;
				$('html,body').animate({
					scrollTop: currOffset
				}, 400);
			}

		});
		$(window).on('load scroll', scrollHandle)
	}

	//	返回顶部
	templateObj.component.goToTop = function() {
		$(".js-top-btn").on('click', function() {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		})
	}
	//判断手机
	templateObj.component.ifMobile = function() {
		if(templateObj.inner.isMobile()){
			window.location.href = "index.mobile.html";
		}
	}

	//判断
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
	return templateObj;
}