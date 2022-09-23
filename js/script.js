$(() => {
   $(window).on("scroll", () => {
      if ($(this).scrollTop() > 80) {
        $(".back-to-top").show()
        
    
      } else {
          $(".back-to-top").hide()
      }
    })
    $(".back-to-top").on("click", () => {
      $(window).scrollTop(0)
    })
   $(window).on('load', function () {
      $(".preloader").hide();
    });
    $(window).scroll(() => {
        ($(this).scrollTop() > 20) ? $(".main-header").addClass("header-fixed") : $(".main-header").removeClass("header-fixed")
       
    })
    $('.mobile-nav-toggler').click(()=>{
        $(".header-mobile").addClass("header-mobile-visible");
        console.log('salam')
    })
    $('.menu-backdrop,.menu-close').click(()=>{
        $(".header-mobile").removeClass("header-mobile-visible");
        console.log('salam')
    })
   
     $(".gallery a").fancybox();
});
$(document).ready(function() {
$(".gallery a").attr("data-fancybox","mygallery");
$(".gallery a").each(function(){
$(this).attr("data-caption", $(this).find("img").attr("alt"));
$(this).attr("title", $(this).find("img").attr("alt"));
});   
})
function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("16 November 2022 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days + "<span>Gün</span>");
			$(".hours").html(hours + "<span>Saat</span>");
			$(".minutes").html(minutes + "<span>Dəq</span>");
			$(".seconds").html(seconds + "<span>San</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);
   $('.project-carousel').owlCarousel({
        
      margin: 0,
      responsiveClass: true,
      responsive: {
         0: {
        
            nav: true
         },
         600: {
            
            nav: false
         },
         1200: {
            items: 3,
         
         }
      }
   })
  $('.partner-carousel').owlCarousel({
      
      margin: 0,
      responsiveClass: true,
      responsive: {
         0: {
        items:1,
         },
         700: {
        items:3,
         },
         900: {
            
           items:4,
         },
         1200: {
            items: 5,
         
         }
      }
   })
   
let items= document.querySelector(".program .items");
let active = document.querySelector(".program .active");
let column = document.querySelectorAll(".column");
items.addEventListener("click", (selectedElement) => {

    if (selectedElement.target.classList.contains("item")) {
        let active = items.querySelector(".active");
        active.classList.remove("active");
        selectedElement.target.classList.add("active");
      
        let filterItems = selectedElement.target.getAttribute("data-name");
        column.forEach((category_item) => {
            let category_filter = category_item.getAttribute("data-name");
            if (category_filter == filterItems) {
                category_item.classList.add("show");
                category_item.classList.remove("hide");
            } else {
                category_item.classList.remove("show");
                category_item.classList.add("hide");
            }
        })
    }

})