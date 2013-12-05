/* Intro fade
-------------------------------------------------------------- */
	// $(document).ready(function(){
	// 	$('.header').delay(100).animate({'opacity': 1, easing: 'easeInCirc'}, 200, function(){
	//  		$('.intro').delay(100).animate({'opacity':1, easing: 'easeInCirc', marginTop:"5em"},400);
	//  	});
	// });

/* Logo fade
-------------------------------------------------------------- */


	// var $logo = $('.logo');

	// $(window).scroll(function () {
	//    if(scrollY <= 0){
	//        	$logo.animate({opacity: 1}, 800);
	//    }
	//    if(scrollY > 0 && $logo.is(':not(:animated)')){
	//        	$logo.animate({opacity: .2}, 800);
	//     }
	//  });

$(window).scroll(function(){ 

	if ($(this).scrollTop() > 0){ 
        $('.logo').stop().clearQueue().animate({opacity:0.2}, 400);
    } else {
        $('.logo').stop().clearQueue().animate({opacity:1}, 400);
    }
});


/* project toggle
-------------------------------------------------------------- */
$( "#click-ac" ).click(function() {
  $( "#project-ac" ).slideToggle( "slow", function() {});
  $(".plus-ac").toggleClass("rotate");
});

$( "#click-eatdrink" ).click(function() {
  $( "#project-eatdrink" ).slideToggle( "slow", function() {});
  $(".plus-eatdrink").toggleClass("rotate");
});

$( "#click-nosh" ).click(function() {
  $( "#project-nosh" ).slideToggle( "slow", function() {});
  $(".plus-nosh").toggleClass("rotate");
});

$( "#click-justthings" ).click(function() {
  $( "#project-justthings" ).slideToggle( "slow", function() {});
  $(".plus-justthings").toggleClass("rotate");
});


// $("#project").click(function() {
//     $(this).next("div.container").slidetoggle("slow", function() {});
//     $(this).next("p.rotate").toggleClass("rotate");
// });



/* Me fade
-------------------------------------------------------------- */
	// var $me = $('.me');

	// $(window).scroll(function () {
	//    if(scrollY <= 0){
	//        $me.animate({opacity: .1}, 800);
	//    }
	//    if(scrollY > 0 && $me.is(':not(:animated)')){
	//        $me.animate({opacity: .5}, 800);
	//     }
	//  });

/* Display Dribbble shots
-------------------------------------------------------------- */
$(document).ready(function () {		
		
	
    // API Ref: http://api.dribbble/players/:id/shots
	 $.jribbble.getShotsByPlayerId('ajlohman', function (playerShots) {
	 	var html = [];
	 	$.each(playerShots.shots, function (i, shot) {
			
	 		// html.push('<h4>by ' + shot.player.name + '</h4><a href="' + shot.url + '">');
			
	 		html.push('<li class="shot-list"><a href="' + shot.url + '"><img src="' + shot.image_url + '" ');
	 		html.push('alt="' + shot.title + '"></a></li>');
	 		// html.push('<h4>' + shot.title + '</h4></a></li>');
	 		// html.push('<p>' + comment.body + '</p>');
			// html.push('<p>Dribbble info</p>');
	 		// html.push('<p>Views: ' + shot.views_count + '</p>');
	 		// html.push('<p>Likes: ' + shot.likes_count + '</p>');
			// html.push('<p>Comments: ' + shot.comments_count + '</p></li>');
	 	});
			
	 	$('#shotsByPlayerId').html(html.join(''));
	 }, {page: 1, per_page: 18});

	
	
	// This isn't for the Jribbble demos.
	// This is a workaround for the Mobile Safari scale orientation bug.
	// Code from Adactio: http://adactio.com/journal/4470/
	if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
		var viewportmeta = document.querySelector('meta[name="viewport"]');
		
		if (viewportmeta) {
			viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
			
			document.addEventListener('gesturestart', function () {
				viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
			}, false);			
		}
	}
});


/* Detect Mac/PC - Being used as subpixel-antialiased rendering
on Mac Webkit.
-------------------------------------------------------------- */
// if (navigator.userAgent.indexOf('Mac OS X') != -1) {
//   document.body.className += " mac";
// } else {
//   document.body.className += " pc";
// }

/* Element is in view 
-------------------------------------------------------------- */
// function isScrolledIntoView(elem)
// 	{
// 	    var docViewTop = $(window).scrollTop();
// 	    var docViewBottom = docViewTop + $(window).height();

// 	    var elemTop = $(elem).offset().top * 1.30;
	    
// 	    return (docViewBottom >= elemTop);
// 	}

// function addInView() {

// 	  if( isScrolledIntoView('.feature-examples') ) {
// 	    if(!$('.feature-examples').hasClass('in-view')) {
// 	      $('.feature-examples').addClass('in-view').animate({ 'opacity': 1, marginTop:"0"});
// 	    }
// 	  } 
// 	}

// 	$(document).ready(function(){
// 	  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
// 	    $('.feature-examples').addClass('in-view').css({ 'opacity': 1, marginTop:"0"});
// 	  }
// });


// addInView();

// $(window).scroll(function(){

//   addInView();
  
// }); 









