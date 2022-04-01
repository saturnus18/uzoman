$(document).ready(function(){
	$('.owl-carousel.main').owlCarousel({
	    items: 1,
      	autoplay: true,
      	loop: true,
      	autoplayTimeout: 5000,
      	// animateIn: 'fadeIn',
      	// animateOut: 'fadeOut',
      	dots: true
	});
	$('.owl-carousel.office-car').owlCarousel({
	    items: 1,
      	autoplay: true,
      	loop: true,
      	autoplayTimeout: 5000,

      	nav: false
	});
	$('.owl-carousel.items-cont-vacancy').owlCarousel({
      	autoplay: true,
      	loop: true,
      	autoplayTimeout: 5000,
      	nav: false,
        responsiveClass:true,
        responsive: {
            10: {
                items:1
            },
            400: {
                items:2
            },
            576: {
                items:1
            },
            768: {
                items:2
            },
            992: {
                items:2
            },
            1200: {
                items:3
            }
        }
	});
	$('.owl-carousel.partner').owlCarousel({
      	autoplay: true,
      	loop: true,
      	autoplayTimeout: 5000,
      	nav: false,
        dots: false,
        responsive: {
            10: {
                items:3,
                nav: false
            },
            576: {
                items:4,
                nav: false
            },
            768: {
                items:6
            },
            992: {
                items:8
            },
            1200: {
                items:8
            }
        }
	});
	$('.owl-carousel.gallery-cont').owlCarousel({
	    items: 2.5,
      	autoplay: true,
      	loop: true,
      	autoplayTimeout: 5000,
      	nav: true,
        dots: false,
        navText: ["<img src='img/prev.svg'>", "<img src='img/next.svg'>"],
        responsive: {
            10: {
                items:1,
                nav: false
            },
            380: {
                items:2,
                nav: false
            },
            576: {
                items:2,
                nav: false
            },
            768: {
                items:2.5
            },
            992: {
                items:2.5
            },
            1200: {
                items:2.5
            }
        }
	});
	$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('header-scrolled');
         }
         else {
             $('#header').removeClass('header-scrolled');
         }
    });
    $("#ru").click(function(){
        $('.ru_text').addClass('dis-b');
        $('.en_text').removeClass('dis-b');
        $('.en_text').addClass('dis-n');
    });
    $("#en").click(function(){
        $('.ru_text').removeClass('dis-b');
        $('.ru_text').addClass('dis-n');
        $('.en_text').addClass('dis-b');
    });
	// Get message after sent
	// $('#getintouch .p-sbm').click(function(){
 //        $('#get-success').empty();
 //        setTimeout(function(){
 //          var text = $('#getintouch .wpcf7-response-output').text();          
 //          $('#get-success').html(text);
 //        }, 2000);
 //    });

	/*=== Check box disabled/enabled===*/
	// $('#agree').change(function() {
	//     if ($(this).is(':checked')) {
	//         $('#organise-submit').prop('disabled', false);
	//     } else {
	//         $('#organise-submit').prop('disabled', true);
	//     }
	// });
	/*=== Check box disabled/enabled===*/

	// $('.register').click(function(){
	// 	var section2 = $('.blue_section').offset().top;                
	// 	$('html, body').animate({scrollTop:section2}, 1000);  
	// }); 
    /*=== Hide Placeholder on focus===*/
    // $('.hideplaceholder').focus(function(){
    //     $(this).attr('data-val', $(this).attr('placeholder'));
    //     $(this).attr('placeholder', '');
    // });
    // $(".hideplaceholder").blur(function(){
    //     $(this).attr('placeholder', $(this).attr('data-val'));
    // });
    /*===// Hide Placeholder on focus===*/


	// $('.latest_box').owlCarousel({
	// 	items: 1,
	//     autoplay: true,
	//     loop: true,
	//     autoplayTimeout: 4000,
	//     dots: false,    
	//     nav: true,
	//     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
	// });


	// $('.hamburger').click(function(){
	// 	$(this).toggleClass('is-active');
	// });	

   // var mql = window.matchMedia('all and (max-width: 768px)');
   //  if (mql.matches) {
   //      $('.navbar .dropdown').append('<div class="caretbox hidden-sm hidden-md hidden-lg"><i class="fa fa-angle-down" aria-hidden="true"></i></div>');
   //          $('.navbar li.dropdown > .caretbox').click(function(){
   //              $(this).parent().toggleClass('open');
   //              return false;
   //          });
   //  } else {

   //      //dropdown on hover
   //      $('.navbar .dropdown').hover(function() {
   //          $(this).addClass('open');
   //      }, function() {
   //          $(this).removeClass('open');
   //      }); 

   //      //bootstrap parent link click
   //      $('.navbar .navbar-nav>li a').click(function(){
   //          location.href = this.href;
   //      });
   //  }
});