$(document).ready(function(){
  $('#navigation a, #sticky a').on('click', function(e) {
    e.preventDefault();
  });
  $(window).on('scroll',function() {
    var scrolltop = $(this).scrollTop();
    if(scrolltop >= 215) {
      $('#sticky').fadeIn(250);
    }
    else if(scrolltop <= 210) {
      $('#sticky').fadeOut(250);
    }
  });
});
$("img").mousedown(function(e){
     e.preventDefault()
});
$("img").on("contextmenu",function(e){
     return false;
});
function myFunction(smallImg)
{
  var fullImg = document.getElementById("imageBox");
  fullImg.src = smallImg.src;
}
//<img id="imageBox" src="img-1.jpg"> large img code
//onclick="myFunction(this)"; small img code
/*------------ Auto IMage Change -------------*/
$(document).ready(function(){
  $(".mobile-menu-toggle2").click(function() {
    $( ".tus_mbnav" ).slideToggle();
  });
});
$(document).ready(function(){
  $(".mobile-menu-toggle2").click(function() {
    $( "#slideMe2" ).slideToggle();
  });
});
$(document).ready(function(){
  $(".mobile-menu-toggle3").click(function() {
    $( "#slideMe3" ).slideToggle();
  });
});
function openNav(id)
{
 $( "#slide"+id ).slideToggle();
}
/*------------ Popup Search Bar -------------*/
$(document).ready(function(){
  $("#toggleContent").click(function() {
    $( ".tus_srboxss" ).fadeToggle();
  });
});
$(document).ready(function(){
  $(".tus_close2").click(function() {
    $( ".tus_popsearch" ).fadeToggle("slow");
  });
});
$(document).ready(function(){
  $("#toggleContent4").click(function() {
    $( ".tus_popsearch" ).fadeToggle();
  });
});
$(document).ready(function(){
  $(".tus_close4").click(function() {
    $( ".tus_popsearch" ).fadeToggle("slow");
  });
});
$(document).ready(function(){
  $(".tus_close3").click(function() {
    $( ".tus_mbnav" ).fadeToggle("slow");
  });
});
$(document).ready(function(){
  $("#toggleContent3").click(function() {
    $( ".tus_popsearch" ).fadeToggle();
  });
});
$(document).ready(function(){
  $(".tus_close4").click(function() {
    $( ".tus_popsearch" ).fadeToggle("slow");
  });
});
$(document).ready(function(){
  $("#toggleContentt").click(function() {
    $( ".tus_click" ).fadeToggle();
  });
});
$(document).ready(function(){
  $(".tus_close5").click(function() {
    $( ".tus_click" ).fadeToggle("slow");
  });
});
$(document).ready(function(){
  $("#toggleContentts").click(function() {
    $( ".tus_sharboxs" ).fadeToggle();
  });
});
$(document).ready(function(){
  $(".tus_close6").click(function() {
    $( ".tus_sharboxs" ).fadeToggle("slow");
  });
});
/*------------ PerGroup Slider -------------------*/
var swiper = new Swiper(".exhibition.swiper-container", {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 4,
            },
        },
      });
/*------------ PerGroup Slider -------------------*/
var swiper = new Swiper(".production.swiper-container", {
        slidesPerView: 4,
        spaceBetween: 15,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 4,
            },
        },
      });
/*------------ PerGroup Slider -------------------*/
var swiper = new Swiper(".catgroup.swiper-container", {
        slidesPerView: 3,
        spaceBetween: 15,
        slidesPerGroup: 3,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            667: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 3,
            },
			1200: {
                slidesPerView: 3,
            },
        },
      });
/*------------ Product View -------------------*/
var categorySlider = new Swiper('.categories.swiper-container', {
        loop: false,
		navigation: {
          nextEl: ".tus_nxtct",
          prevEl: ".tus_prtct",
        },
        slidesPerView: 3,
        spaceBetween: 20,
        speed: 1500,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
			1200: {
                slidesPerView: 3,
            },
        },
    });
/*-------------- Soccer Uniform ------------------*/
var categorySlider = new Swiper('.soccer.swiper-container', {
        loop: false,
		 pagination: {
        el: '.swiper-pagination',
        clickable: true,
         },
        slidesPerView: 4,
        spaceBetween: 15,
        speed: 1500,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 4,
            },
        },
    });
/*------------ Our Services -------------------*/
var categorySlider = new Swiper('.services.swiper-container', {
        loop: false,
		 pagination: {
        el: '.swiper-pagination',
        clickable: true,
         },
        slidesPerView: 5,
        spaceBetween: 15,
        speed: 1500,
        autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 5,
            },
        },
    });
/*------------ Product View ----------------*/
 var swiper = new Swiper('.cate.swiper-container', {
      effect: 'coverflow',
	  loop: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
	  spaceBetween: 150,
	  speed: 1500,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 220,
        modifier: 2,
        slideShadows: false,
      },
	  navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 1,
				spaceBetween: 0,
            },
            480: {
                slidesPerView: 1,
				spaceBetween: 0,
            },
            667: {
                slidesPerView: 1,
				spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
				spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
				spaceBetween: 20,
            },
			1200: {
                slidesPerView: 2,
            },
        },
    });
/*--------------------------------*/
var categorySlider = new Swiper('.products.swiper-container', {
        loop: false,
		 navigation: {
         nextEl: '.tus_downaro',
         prevEl: '.tus_uparo',
         },
        slidesPerView: 4,
		//slidesPerColumn: 2,
        spaceBetween: 15,
        speed: 1500,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
			992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 4,
            },
        },
    });
var categorySlider = new Swiper('.fproducts.swiper-container', {
        loop: false,
		 navigation: {
         nextEl: '.tus_downaro',
         prevEl: '.tus_uparo',
         },
        slidesPerView: 4,
		//slidesPerColumn: 2,
        spaceBetween: 15,
        speed: 1500,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
			992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 4,
            },
        },
    });
	
	
	
	
	
	
	
	
	
	
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        slidesPerView: 4,
		//slidesPerColumn: 2,
        spaceBetween: 15,
        speed: 1000,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            667: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
			992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 4,
            },
        },
      });
	  
	  
	  
      function magnify(imgID, zoom) {
        var img, glass, w, h, bw;
        img = document.getElementById(imgID);
      
        /* Create magnifier glass: */
        glass = document.createElement("DIV");
        glass.setAttribute("class", "img-magnifier-glass");
      
        /* Insert magnifier glass: */
        img.parentElement.insertBefore(glass, img);
      
        /* Set background properties for the magnifier glass: */
        glass.style.backgroundImage = "url('" + img.src + "')";
        glass.style.backgroundRepeat = "no-repeat";
        glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
        bw = 3;
        w = glass.offsetWidth / 2;
        h = glass.offsetHeight / 2;
      
        /* Execute a function when someone moves the magnifier glass over the image: */
        glass.addEventListener("mousemove", moveMagnifier);
        img.addEventListener("mousemove", moveMagnifier);
      
        /*and also for touch screens:*/
        glass.addEventListener("touchmove", moveMagnifier);
        img.addEventListener("touchmove", moveMagnifier);
        function moveMagnifier(e) {
          var pos, x, y;
          /* Prevent any other actions that may occur when moving over the image */
          e.preventDefault();
          /* Get the cursor's x and y positions: */
          pos = getCursorPos(e);
          x = pos.x;
          y = pos.y;
          /* Prevent the magnifier glass from being positioned outside the image: */
          if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
          if (x < w / zoom) {x = w / zoom;}
          if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
          if (y < h / zoom) {y = h / zoom;}
          /* Set the position of the magnifier glass: */
          glass.style.left = (x - w) + "px";
          glass.style.top = (y - h) + "px";
          /* Display what the magnifier glass "sees": */
          glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
        }
      
        function getCursorPos(e) {
          var a, x = 0, y = 0;
          e = e || window.event;
          /* Get the x and y positions of the image: */
          a = img.getBoundingClientRect();
          /* Calculate the cursor's x and y coordinates, relative to the image: */
          x = e.pageX - a.left;
          y = e.pageY - a.top;
          /* Consider any page scrolling: */
          x = x - window.pageXOffset;
          y = y - window.pageYOffset;
          return {x : x, y : y};
        }
      }
	  
	  
	  
	  
	  

    
      
      
        
<!------------ Blogs ----------------->

var categorySlider = new Swiper('.blogs.swiper-container', {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        slidesPerView: 4,
        spaceBetween:0,
        speed: 1500,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 2,
            },
            480: {
                slidesPerView: 3,
            },
            667: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
			992: {
                slidesPerView: 4,
            },
			1200: {
                slidesPerView: 5,
            },
        },
    });
<!------------ Happy Clients ----------------->
var categorySlider = new Swiper('.testimonial.swiper-container', {
        loop: false,
		navigation: {
         nextEl: '.next',
         prevEl: '.prev',
         },
        slidesPerView: 1,
		nav: false,
        navText: ["<i class='fa fa-facebook'></i>", "<i class='fa fa-twitter'></i>"],
        spaceBetween:15,
        speed: 3000,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            360: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            667: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
			992: {
                slidesPerView: 1,
            },
			1200: {
                slidesPerView: 1,
            },
        },
    });
<!------------ Related ----------------->
var categorySlider = new Swiper('.relatedpro.swiper-container', {
        loop: false,
		 pagination: {
        el: '.swiper-pagination',
        clickable: true,
         },
        slidesPerView: 4,
        spaceBetween:15,
        speed: 1500,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            478: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });
/*------------- Number Counter --------------*/
(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});
/*---------------------- parallax ------------------*/
var parallax = (e) => {
        document.querySelectorAll('.layer').forEach(layer => {
            const speed = layer.getAttribute('data-speed');
            const x = (window.innerWidth - e.pageX*speed)/100;
            const y = (window.innerHeight - e.pageY*speed)/100;
            layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }
    document.addEventListener("mousemove", parallax);
/*------------ Validation ----------------*/
/*<form class="contact-form" action="mail.php" method="post">
<div class="form-group">
	<input type="text" class="form-control" id="name" name="name" required value="" onkeyup="this.setAttribute('value', this.value);">
	<label for="name">Name</label>
	<span class="input-border"></span>
</div>
<div class="form-group">
	<input type="email" class="form-control" id="email" name="email" required value="" onkeyup="this.setAttribute('value', this.value);">
	<label for="email">Email</label>
	<span class="input-border"></span>
</div>
<div class="form-group">
	<input type="text" class="form-control" id="subject" name="subject" required value="" onkeyup="this.setAttribute('value', this.value);">
	<label for="subject">Subject</label>
	<span class="input-border"></span>
</div>
<div class="form-group">
	<textarea class="form-control" id="message" name="message" required data-value="" onkeyup="this.setAttribute('data-value', this.value);"></textarea>
	<label for="message">Your Message</label>
	<span class="input-border"></span>
</div>
<button class="contact-btn main-btn btn btn-block" type="submit" name="send">Send Message</button>
<div class="form-message text-center"><span></span></div>
</form> */
$('.contact-form').on("submit", function () {
		
		var myForm = $(this),
			data = {};
		
		myForm.find('[name]').each(function() {
			
			var that = $(this),
				name = that.attr('name'),
				value = that.val();
			
			data[name] = value;
			
		});
		
		$.ajax({
			
			url: myForm.attr('action'),
			type: myForm.attr('method'),
			data: data,
			success: function (response) {
				
				if (response == "success") {
								
					$(".contact-form").find(".form-message").addClass("success");
					$(".form-message span").text("Message Sent!");
					
				} else {
					
					$(".contact-form").find(".form-message").addClass("error");
					$(".form-message span").text("Error Sending!");
					
				}
			}
			
		});
		
		return false;
		
	});
// JavaScript Document

// contact form
/*$(document).ready(function() {
	$('form#form').submit(function() {
	$('form#form .error').remove();
	var hasError = false;
	$('.requiredField').each(function() {
	if(jQuery.trim($(this).val()) == '') {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">You forgot to enter your '+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    } else if($(this).hasClass('email')) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if(!emailReg.test(jQuery.trim($(this).val()))) {
    var labelText = $(this).prev('label').text();
    $(this).parent().append('<span class="error">You entered an invalid '+labelText+'</span>');
    $(this).addClass('inputError');
    hasError = true;
    }
    }
    });
    if(!hasError) {
    $('form#form input.submit').fadeOut('normal', function() {
    $(this).parent().append('');
    });
    var formInput = $(this).serialize();
    $.post($(this).attr('action'),formInput, function(data){
    $('form#form').slideUp("fast", function() {
    $(this).before('<div class="success">Thank you. Your email was sent successfully.</div>');
    });
    });
    }
    return false;
    });
});*/
/*---------------- Contct Forms -------------------*/


