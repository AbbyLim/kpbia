//팝업 공통 열기
var emebe;
function openpop(obj){
	var pops = $(obj).attr("data-link");
	var $top = $(obj).offset().top;
	var $scroll = $(window).scrollTop();
	$(pops).addClass("is-opened");
	$("html").addClass("is-opened");
	if($(pops).hasClass("layer-tip")){
		$(pops).css("top",$top - $scroll);
	};
	if($(pops).hasClass("layer-over")){
		$("html").addClass("over");
	};
	if($(obj).hasClass("btn-over")){
		$("html").addClass("over");
		$(pops).addClass("layer-over");
	};
	if($(obj).hasClass("btn-over2")){
		$("html").addClass("over2");
		$(pops).addClass("layer-over2");
	};
	if($(pops).hasClass("type-vd")){
		var embed = $(obj).attr("data-url");
		var frame = $(pops).find(".video-wrap");
		frame.html('<iframe src="' + embed +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
	};
};
//팝업 공통닫기
function closepop(obj){
	var pops = $(obj).closest(".layerpop");
	$(pops).removeClass("is-opened");
	if($(pops).hasClass("layer-over")){
		$("html").removeClass("over");
	}else if($(pops).hasClass("layer-over2")){
		$("html").removeClass("over2");
	}else{
		$("html").removeClass("is-opened");
	};
	if($(pops).hasClass("type-alert")){
		$("html").removeClass("is-opened over over2");
		$(".layerpop").each(function(){
			$(this).removeClass("is-opened");
		});
	};
	// $("input").prop("checked", false);
};
//privacy chekck
function getAgree(obj){
	if($("input:checkbox[name=misAgree1]").is(':checked')){
		//동의
		openpop(obj);
	}else{
		//동의안함
		alert("개인정보 수집에 동의해주십시오")
	}
};

	//s반응형 리사이즈
	var triggerpoint = 720;
	var ww = window.innerWidth;
	function opentabs(obj){
		var idx = $(obj).attr("data-idx");
		if(ww <= triggerpoint){
			$(".btn-tabs").removeClass("active");
			$(".fix-nav-wrap").removeClass("opened");
			$(".tabs").find("#tab"+idx).trigger("click");
			$(".mo-tabs-wrap").find(".mo-tabs").removeClass("active")
			$(".mo-tabs-wrap").find(".mo-tabs.mot"+idx).addClass("active")
		};
		$(".btn-tabs").find("span").html(text[idx-1]);
		$(".tab-cont-area .tab-cont").removeClass("on");
		$(".tab-cont-area .tab-cont").eq(idx-1).addClass("on");
		$("html > head > title").html(text2[idx-1]);
		$("html").removeClass("nav-opened");
		$(".gnb").removeClass("is-active");
		$(".depth1 a").removeClass("active");
		$(".depth2").css("display","");
		$(this).next(".depth2").stop().slideToggle(500);
		swiper2.slideTo(idx-1, 500, false);
		$(window).resize(function (){
		  if(window.innerWidth > triggerpoint) {
			if(typeof(desktop) == "undefined") {
			  desktop = true;
			  mobile = undefined;
				setTimeout(function(){
					var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 80;
				}, 10);
			}
		  }else{
			if (typeof(mobile) == "undefined") {
			  mobile = true;
			  desktop = undefined;
				setTimeout(function(){
					var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 74;
				}, 10);
			}
		  };
		});
		if(ww > triggerpoint){
			var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 80;
			$(window).on("orientationchange",function(){
				if(window.innerWidth > triggerpoint){
					if(window.innerHeight > triggerpoint){
						console.log("web에서mo");
						setTimeout(function(){
							var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 74;
						}, 10);
					}else{
						console.log("web/mpc가로에서mmo세로");
						setTimeout(function(){
							var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 74;
						}, 10);
					};
				}else{
					if(window.innerHeight > triggerpoint){
						console.log("web/mmo세로에서mpc가로");
						setTimeout(function(){
							var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 80;
						}, 10);
					}else{
						//alert(44)
					};
				};
			});
		}else{
			var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 74;
			$(window).on("orientationchange",function(){
				if(window.innerWidth > triggerpoint){
					if(window.innerHeight > triggerpoint){
						//alert(1)
					}else{
						console.log("mpc가로에서mmo세로");
						setTimeout(function(){
							var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 74;
						}, 10);
					};
				}else{
					if(window.innerHeight <= triggerpoint){
						console.log("mmo세로에서mmo가로");
						setTimeout(function(){
							var vtop = $(".func-visual").offset().top + $(".func-visual").outerHeight()  - 74;
						}, 10);
					}else{
						//alert(44)
					};
				};
			});
		};
		if(idx>1){
			$("html, body").animate( { scrollTop : vtop }, 500 );
		}else{
			$("html, body").animate( { scrollTop : 0 }, 500 );
		};
	};
	function tabclick(obj) {
		var prop = $(obj).attr("data-idx");
		swiper2.slideTo(prop-1, 500, false);
		if(ww <= triggerpoint){
			$("html").removeClass("nav-opened");
			$(".gnb").removeClass("is-active");
			$(".nav-dim").removeClass("nav-dim");
			$(".mo-tabs-wrap").find(".mot"+prop).trigger("click");
		}else{
			$(".tabs").find("#tab"+prop).trigger("click");
		}
	};
	common();
	if(ww <= triggerpoint){
		mo();
		$(".wrap-mo .header .depth1").children("a").removeAttr("onclick");
		$(window).on("orientationchange",function(){
			common();
			/*if($(".cases_before_wrap").length){
					$(".cases_before_wrap").each(function(){
						var bhg = $(this).height();
						$(this).css("top",-bhg);
					});
				};*/
			if(window.innerWidth > $(window).height()){
				setTimeout(function(){
					$("html").removeClass("portrait").addClass("landscape");
					
				}, 10);
			}else{
				setTimeout(function(){
					$("html").removeClass("landscape").addClass("portrait");
				}, 10);
			};
		});
	}else{
		pc();
		$(".wrap-pc .header .depth1").children("a").attr("onclick","opentabs(this)");
		$(window).on("orientationchange",function(){
			if(window.innerWidth > $(window).height()){
				setTimeout(function(){
					$("html").removeClass("portrait").addClass("landscape");
				}, 10);
			}else{
				setTimeout(function(){
					$("html").removeClass("landscape").addClass("portrait");
				}, 10);
			};
		});
	};
	$(window).resize(function (){
	  if(window.innerWidth > triggerpoint) {
		if(typeof(desktop) == "undefined") {
		  desktop = true;
		  mobile = undefined;
		  pc();
		  $(".wrap-pc .header .depth1").children("a").attr("onclick","opentabs(this)");
		}
	  }else{
		if (typeof(mobile) == "undefined") {
		  mobile = true;
		  desktop = undefined;
		  mo();
		  $(".wrap-mo .header .depth1").children("a").removeAttr("onclick");
		}
	  }
	  $("html").removeClass("nav-opened");
	  $(".gnb").removeClass("is-active");
	  common();
	});

	function lnb(obj){
		var $top = $(window).width() > 720 ? 70 : 64;
		var scrollEnabled = true,
			idx = $(obj).attr("data-idx")
			$contop = $(".cont-wrap .cont-box").eq(idx).offset().top - $top;
		$(obj).siblings("li").removeClass("is-active");
		$(obj).addClass("is-active");
		$("html, body").animate( { scrollTop : $contop }, 500 );
	};
	function pc(){
		$(".wrap").removeClass("wrap-mo").addClass("wrap-pc");
		$(".wrap-pc .header .nav").children("li").each(function(){
			$(this).hover(
				function(e){ 
					$(this).addClass("activate");
					$(this).siblings("li").addClass("inactive");
				},
				function(e){
					$(this).removeClass("activate");
					$(this).siblings("li").removeClass("inactive");
				} 
			);
		});
		$(".wrap-pc .depth2").css("display","");
		$(".wrap-pc .depth2 a.link").off("click").on("click" , function(){
			$(this).closest(".depth1").removeClass("activate");
			$(this).closest(".depth2").css("display","");
		});
	};
	function mo(){
		$(".wrap").removeClass("wrap-pc").addClass("wrap-mo");
		$(".header .nav").children("li").removeClass("activate inactive");
		$(".wrap-mo .header .nav").children("li").unbind('mouseenter mouseleave')
		$(".wrap-mo .header .depth1").children("a").each(function(){
			$(this).off("click").on("click" , function(e){
				e.preventDefault();
				$(this).toggleClass("active");
				$(this).next(".depth2").stop().slideToggle(500);
			});
		});
		if($(".fix-nav").length){
			last_scrollTop = 0;
			var $navtop =$(".fix-nav-wrap").offset().top;
			var $hdh = $(".header").outerHeight(),
			$pdt = parseInt($(".fix-nav").css("padding-top"))*2,
			$point = $navtop - $hdh;
			$(window).resize(function(){
				var $navtop =$(".fix-nav-wrap").offset().top;
			});
			$(window).on("orientationchange",function(){
				var $navtop =$(".fix-nav-wrap").offset().top;
			});
			if($(".mo-tabs-wrap").length){
				$(".mo-tabs-wrap .mo-tabs").off("click").on("click" , function(e){
					e.preventDefault();
					$(".fix-navp .btn-tabs").removeClass("active");
					$(".mo-tabs-wrap .mo-tabs").removeClass("active");
					$(this).addClass("active");
				});
			};
				
			//반응형 탭
			if($(".scroller").length){
				var scrollEnabled = true;
				var mySwiper = undefined;
				function initSwiper() {
				  if (mySwiper == undefined) {
					mySwiper = new Swiper(".tabs.scroller", {
						observer: true,
						observeParents: true,
						preventClicks: true,
						preventClicksPropagation: false,
						slidesPerView: "auto",
						spaceBetween:0,
						freeMode: {
							enabled: false,
							sticky: false,
							momentumBounce: false
						}
					});
				  };
				};
				initSwiper();
				$(window).on('resize', function () {
				  ww = window.innerWidth;
				  initSwiper();
				});
				// 클릭요소 중앙정렬
				function muCenter(target){
					var snbwrap = $(".tabs-wrapper");
					var targetPos = target.position();
					var boxWidth = $(".tabs").width();
					var wrapWidths=0;
					var wrapWidth=0;
					snbwrap.find(".swiper-slide").each(function(){
						wrapWidths += $(this).outerWidth();
					});
					var wrapWidth = wrapWidths ;
					var selectTargetPos = targetPos.left + target.outerWidth()/2;
					var pos;
					if(selectTargetPos <= boxWidth/2){
						pos = 0
					}else if(wrapWidth - selectTargetPos <= boxWidth/2){
						pos = wrapWidth-boxWidth;
					}else{
						pos = targetPos.left - (boxWidth/2) + (target.outerWidth()/2);
					}
					if(wrapWidth > boxWidth) {
						/*setTimeout(function(){snbwrap.css({
							"transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
							"transition-duration": "400ms"
						})}, 200);*/
						snbwrap.css({
							"transform": "translate3d("+ (pos*-1) +"px, 0, 0)",
							"transition-duration": "20ms"
						})
					}
				};
			};
		};
		if($(".func-visual").length){
			$(function(){
				var tmp = $(window).scrollTop();
				var ntop = $(".func-visual").offset().top + $(".func-visual").outerHeight() - 74 ;
				$(".func-nav .btn-tabs").off("click").on("click" , function(e){
					e.preventDefault();
					if(tmp < ntop){
						$("html, body").animate( { scrollTop : ntop }, 500 );
					};
					$(this).toggleClass("active");
					$(this).closest(".fix-nav-wrap").toggleClass("opened");
				});
				$(window).scroll(function() {
					var tmp = $(window).scrollTop(),
					ntop = $(".func-visual").offset().top + $(".func-visual").outerHeight() - 74;
					$(window).on("orientationchange",function(){
						if(window.innerWidth > triggerpoint){
							if(window.innerHeight > triggerpoint){
								//alert(1)
							}else{
								console.log("mpc가로에서mmo세로");
								setTimeout(function(){
									var ntop = $(".func-visual").offset().top + $(".func-visual").outerHeight() - 75;
								}, 10);
							};
						}else{
							if(window.innerHeight <= triggerpoint){
								console.log("mmo세로에서mmo가로");
								setTimeout(function(){
									var ntop = $(".func-visual").offset().top + $(".func-visual").outerHeight() - 75;
								}, 10);
							}else{
								//alert(44)
							};
						};
					});
					$(".func-nav .btn-tabs").off("click").on("click" , function(e){
						e.preventDefault();
						if(tmp < ntop){
							$("html, body").animate( { scrollTop : ntop }, 500 );
						};
						$(this).toggleClass("active");
						$(this).closest(".fix-nav-wrap").toggleClass("opened");
					});
					if(tmp > ntop){
						$(".btn-tabs").removeClass("active");
						$(".fix-nav-wrap").removeClass("opened");
					};
				});
			});
		};
	};












$(function(){
	//팝업 열기 버튼 공통
	$(".btn-layer").each(function(e){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			openpop(this);
		});
	});
	//팝업 닫기 버튼 공통
	$(".layer-close").each(function(){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			closepop(this);
			if($(this).hasClass("close-all")){
				$("html").removeClass("is-opened over over2");
				$(".layerpop").each(function(){
					$(this).removeClass("is-opened");
				});
			};
			if($(this).closest(".layerpop").hasClass("type-vd")){
				embed = $(this).attr("data-link");
				$(this).closest(".layerpop").find(".video-wrap").html("");
			};
		});
	});
	//dim 클릭시 팝업 닫기
	$(".dim").each(function(){
		$(this).off("click").on("click" , function(e){
			e.preventDefault();
			$("html").removeClass("is-opened over over2");
			$(".layerpop").each(function(){
				$(this).removeClass("is-opened");
			});
		});
	});
	//유의사항
	$(".notice-list dt").off("click").on("click" , function(e){
		e.preventDefault();
		$(this).toggleClass("active");
	});

	/*$(".v-motion").each(function(){
		var wh = $(window).outerHeight(),
		$top = $(this).offset().top,
		$bottom = $top + $(this).outerHeight()*0.6;
		if(wh>= $bottom){
			$(this).addClass("active");
		};
		$(window).scroll( function(){
			var wh = $(window).outerHeight(),
			$scWn = $(window).scrollTop();
			$(".v-motion").each( function(){
				var $top = $(this).offset().top,
				$bottom = $top + $(this).outerHeight()*0.6,
				$trigger = $top - wh/2;
				if($scWn >= $trigger && $scWn <= $bottom){
					$(this).addClass("active");
				}else{
					if($bottom >= wh || $scWn >= $top*0.6 ){
						$(this).removeClass("active");
					}
				};
			});
		});
	}); */

	//메인모션
	$(".v-motion").each(function(){
		var wh = $(window).innerHeight(),
		$st = $(window).scrollTop(),
		$top = $(this).offset().top,
		$bottom = $top + $(this).outerHeight()*0.6;
		if($st >= $top - wh){
			$(this).addClass("active");
		};

		$(window).scroll( function(){
			var wh = $(window).innerHeight(),
			$st = $(window).scrollTop();
			$(".v-motion").each( function(){
				var $top = $(this).offset().top,
				$bottom = $top + $(this).outerHeight()*0.6,
				$trigger = $top - wh*0.6;
				if($st >= $trigger){
					$(this).addClass("active");
				}else{
					if($st < $top - wh){
						$(this).removeClass("active");
					}
				};
			});
		});
	});
});
