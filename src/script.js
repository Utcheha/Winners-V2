// JavaScript Document


//for height of slider par insted of tack height more than it's view port with heght=100vh ^_^
$(function(){
	/*
	var upper_par=$(".upper-par").innerHeight();
	var navg1=$(".navg1").innerHeight();
	var winh=$(window).height();
//	$(".slider-part , .carousel-inner,.carousel-item").innerHeight(winh-(upper_par+navg1));
	$(".slider-part, .carousel-inner").height(winh-(upper_par+navg1));*/
	
	
	$('.owl-carouselteam').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	/*---------------------------------------------------*/
	$('.owl-carouselabout').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoplay:true,
		autoplayTimeout:7000,
		smartSpeed: 1200,
		navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	$('.owl-carousel-testmonions').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	/*------------------------------------------------*/
	$('.owl-carouselSlider').owlCarousel({
		loop:true,
		margin:10,
		animateOut: 'fadeOut',
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	/*-------------------------------------------featured work------------------------------------------*/
	
	
	$(".featured-work  ul li").click(function(){
		$(this).addClass("active1").siblings().removeClass("active1");
		if($(this).data("class")=='All')
		{
		$(".imgess .col-md ").css('opacity',1);
			}
		else{
			$(".imgess .col-md").css('opacity',"0.4");
			$($(this).data("class")).parent().css('opacity',1);
			
			}
		});
	});
	/*--------------------------------------------------------------------*/
	//////////////////////////////////////////////////////////////////////////////////////

window.onscroll = function() {myFunction()};

navbar = document.getElementById("nav");
navtow = document.getElementById("navtwo");


//orderbbottm=document.getElementsByClassName("header2");
sticky = navbar.offsetTop;
function myFunction() {
 if (window.pageYOffset <50) {
   navbar.classList.remove("background-darke");
	navbar.classList.add("navsectionn");
	navtow.classList.remove("background-darke");
	navtow.classList.add("navsectionn");
   //borderbbottm.item(0).classList.add("nav-border-bottom-class");
	navtow.classList.remove("fadeInUp");

	navbar.classList.remove("nav-border-bottom-class");
   //for(i=0;i<navtext.length;i++){
   //	navtext.item(i).classList.add("nav-item-color");	
   //	}

 } else {
   navbar.classList.add("background-darke");
   navtow.classList.add("background-darke");
	navbar.classList.add("fadeInUp");
   navtow.classList.add("fadeInUp");
   navbar.classList.remove("navsectionn");
   navtow.classList.remove("navsectionn");
navbar.classList.add("nav-border-bottom-class");
   //navbar.classList.remove("fixed-top")
   //borderbbottm.item(0).classList.remove("nav-border-bottom-class");
   
	   

 }
}


////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
	$('.counter').counterUp({
	delay: 10,
	time: 1000
});
			});




		



var scrollbtn =$("#stop");
		
		$(window).scroll(function(){
			
	  //  console.log($(this).scrollTop());
	  		
		$(this).scrollTop() >500?  scrollbtn.show(): scrollbtn.hide();
		
			 
			 });	
			
			 scrollbtn.click(function(){
			 $("html,body").animate({scrollTop:0},800);
			});
			
			////$(document).ready(function () {
				
		//		$(".loading").fadeOut(2000);
			//});
			$(window).on('load', function() {
				$(".loading").fadeOut(4000 , function(){
        
					$("body").css("overflow","auto");
					
					$(".loading").css( "zIndex", 0 );
				});
			})


			$(document).ready( function() {   

				$('.gallary').isotope({
				  itemSelector: '.item',
				});
				
				// filter items on button click
				
				$('.button-group-item').on( 'click , load',function() {
				  var filterValue = $(this).attr('data-filter');
				  $('.gallary').isotope({ filter: filterValue });
				  $('.button-group-item').removeClass('active');
				  $(this).addClass('active');
				});
					})

					$(document).ready( function() {   

						$('.lastWork').isotope({
						  itemSelector: '.item',
						
						});
						
						// filter items on button click
						
						$('.button-item').on( 'click , load',function() {
						  var filterValue = $(this).attr('data-filter');
						  $('.lastWork').isotope({ filter: filterValue });
						  $('.button-item').removeClass('active');
						  $(this).addClass('active');
						});
							})

$(".navbar a , .sliderTop a").click(function(){

let aHref =$(this).attr("href");

    let profileOffset = $(aHref).offset().top;
    $("body,html").animate({scrollTop:profileOffset} , 1000)
})
                    


new WOW().init();
$('.VIEW').magnificPopup({
  
  type: 'image',
  gallery: {
    // options for gallery
    enabled: true
  }
  // other options
});