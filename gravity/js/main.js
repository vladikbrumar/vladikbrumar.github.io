$(function() {
	$('.works-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    navText: ['<img src="img/left.svg" alt="left">', '<img src="img/right.svg" alt="right">'],
	    startPosition: 1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1.3
	        }
	    }
	});

	$('ul.tabs__caption').on('click', 'li:not(.active)', function(e) {
		e.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  	});

	$('.contributor-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    navText: ['<img src="img/left.svg" alt="left">', '<img src="img/right.svg" alt="right">'],
	    //startPosition: 1,
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
	});

});