jQuery(function($){
	$(document).ready(function(){

		$(".posts-pagination-ajax a").click(function(){

			var button = $(this),
				paged = button.attr("data-paged"),
				maxPages = button.attr("data-max_pages"),
				post_type = button.attr("data-post_type");

			$.ajax({
				type : 'POST',
				url : main_ajax.ajax_url,
				data : {
					paged : paged,
					action : 'loadmore',
					post_type : post_type
				},
				beforeSend : function( xhr ) {
					button.text( main_ajax.loadmore_title_active );
				},
				success : function( data ){

					paged++;
					$(".styles_stories__3l3EY").append(data);
					button.attr("data-paged", paged).text( main_ajax.loadmore_title );

					if( paged == maxPages ) {
						button.remove();
					}

				}

			});

			return false;
		});

		$(".main-heaer-inner-show-xs,.omis-header-toggle").on("click", "li,a", function(e){
			//var container = $(this).closest(".main-heaer-inner-show-xs");
			var container = $('.menu-mobile-content');
			var $button = $(e.currentTarget);
			if(container.hasClass("active")){
								$(document.body).removeClass('active-mobile-menu');
				$button.find('img').attr("src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMTZWMkgwVjBaTTAgMTBIMTZWMTJIMFYxMFpNMTYuMDAwMSA1SDYuODU3MjlWN0gxNi4wMDAxVjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
				container.removeClass("active");
				//.find("img").attr("src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBIMTZWMkgwVjBaTTAgMTBIMTZWMTJIMFYxMFpNMTYuMDAwMSA1SDYuODU3MjlWN0gxNi4wMDAxVjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K");
			}else{
				$(document.body).addClass('active-mobile-menu');
				container.addClass("active");
				//.find("img").attr("src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjAwMDA0IDQuMzE4M0wxLjgwODYzIDBMMC4zNTI3MjQgMS40OTk5OUw0LjU0NDEzIDUuODE4MjlMMCAxMC41TDEuNDU1OTEgMTJMNi4wMDAwNCA3LjMxODI4TDEwLjU0NDEgMTEuOTk5OUwxMiAxMC40OTk5TDcuNDU1OTUgNS44MTgyOUwxMS42NDczIDEuNTAwMDZMMTAuMTkxNCA3LjU4NzM4ZS0wNUw2LjAwMDA0IDQuMzE4M1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
				$button.find('img').attr("src", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjAwMDA0IDQuMzE4M0wxLjgwODYzIDBMMC4zNTI3MjQgMS40OTk5OUw0LjU0NDEzIDUuODE4MjlMMCAxMC41TDEuNDU1OTEgMTJMNi4wMDAwNCA3LjMxODI4TDEwLjU0NDEgMTEuOTk5OUwxMiAxMC40OTk5TDcuNDU1OTUgNS44MTgyOUwxMS42NDczIDEuNTAwMDZMMTAuMTkxNCA3LjU4NzM4ZS0wNUw2LjAwMDA0IDQuMzE4M1oiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");
			}
			$(".main-heaer-inner-menu").toggle();
		});

		$(".wpcf7-form-control-wrap.files").on("change", "input", function(){
			var filename = $(this).val().replace(/C:\\fakepath\\/i, "");
			if(filename != ""){
				$(".styles_inputHeadline__SNg_Q").empty().html("<p>" + filename + "</p>");
			}
		});

		$(document.body).on('change', '.wpcf7 form.invalid input[type="text"], .wpcf7 form.invalid input[type="email"]', function () {
			var $input = $(this),
				$form = $input.parents('form');

			wpcf7.submit($form[0]);
		});

		
		$(document.body).on('click', '.styles_actions__1vyTT .styles_button__3SWYN', function () {
			var $button = $(this);
			
			$button.remove();
			
			$('.hidden-card').removeClass('hidden-card');
		});
	});
});

window.addEventListener('load', function () {
	if ( jQuery('.styles_footer_people__1yOrq').length ) {
		jQuery('.styles_footer_people__1yOrq').slick({
		  autoplay:true,
		  autoplaySpeed:500,
		  arrows:false,
		  speed: 1500,
		  centerMode: false,
		  dots: false,
		  slidesToShow: 8,
		  slidesToScroll: 1,
			infinite: true,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					 slidesToShow: 3,
					 slidesToScroll: 1,
					 variableWidth: true
				   }
			 }
		]
		});
	}
	
	if ( jQuery('.home .react-multi-carousel-track.styles_carousel_slider__2MGQ2').length ) {
		jQuery('.home .react-multi-carousel-track').slick({
		  autoplaySpeed:500,
		  arrows:true,
		  speed: 1500,
		  centerMode: false,
		  dots: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
			variableWidth: true,
			infinite: false,
			adaptiveHeight: true,
			prevArrow: '.slider-navs .slick-prev',
			nextArrow: '.slider-navs .slick-next',
			responsive: [
			{
				breakpoint: 768,
				settings: {
					 slidesToShow: 2,
					 slidesToScroll: 1,
					 variableWidth: true
				   }
			 }
		]
		});
	}
});
