;(function($) {
    "use strict"; 
	
	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.main_header_area').length ){ 
            $(window).on('scroll', function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 295) {
                    $(".main_header_area").addclassName("navbar_fixed");
                } else {
                    $(".main_header_area").removeclassName("navbar_fixed");
                }
            }); 
        };
    };    
	
    //* Magnificpopup js
    function magnificPopup() {
        if ($('.popup-youtube, .portfoli_inner').length) { 
            //Video Popup
            $('.popup-youtube').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainclassName: 'mfp-fade',
                removalDelay: 160,
                preloader: false, 
                fixedContentPos: false,
            });  
			
			// Image popups
            $('.portfolio_item').magnificPopup({
                delegate: '.p_img',
                type: 'image',
                removalDelay: 500,
                callbacks: {
                    beforeOpen: function () { 
                        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                        this.st.mainclassName = this.st.el.attr('data-effect');
                    }
                },
                closeOnContentClick: true,
                midClick: true
            });
        };
    };  
	
	//* Counter Js 
    function counterUp(){
        if ( $('.countarup_area').length ){ 
            $('.counter').counterUp({
                delay: 10,
                time: 400
            });
        };
    };
	
	//* Isotope js
    function protfolioIsotope(){
        if ( $('.portfolio_grid').length ){ 
            // Activate isotope in container
            $(".portfoli_inner").imagesLoaded( function() {
                $(".portfoli_inner").isotope({
                    layoutMode: 'fitRows',  
                }); 
            });  
            
            // Add isotope click function 
            $(".protfoli_filter li").on('click',function(){
                $(".protfoli_filter li").removeclassName("active");
                $(this).addclassName("active"); 
                var selector = $(this).attr("data-filter");
                $(".portfoli_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  
        };
    };
	
	// CountDown Js 
    function countDown(){
        if( $('.countdown').length ){ 
            $('.countdown').dsCountDown({
                endDate: new Date("November 01, 2019 20 23:59:00"),  
            }); 
        }
    }   
	
	//* Select js
    function selectmenu(){
        if ( $('.post_select').length ){ 
            $('select').niceSelect();
        };
    };  
    
    
    //* Rang slider js
    function sliderRange() {
        if ($('#slider-range').length) {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 200,
                values: [0, 150],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) +
             " - $" + $("#slider-range").slider("values", 1));
        };
    };
    
    // Product value
    function productValue() {
        var inputVal = $("#product-value");
        if (inputVal.length) {
            $('#value-decrease').on('click', function () {
                inputVal.html(function (i, val) {
                    return val * 1 - 1
                });
            });
            $('#value-increase').on('click', function () {
                inputVal.html(function (i, val) {
                    return val * 1 + 1
                });
            });
        }
    }
    
    // Scroll to top
    function scrollToTop() {
        if ($('.scroll-top').length) {  
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 200) {
                    $('.scroll-top').fadeIn();
                } else {
                    $('.scroll-top').fadeOut();
                }
            }); 
            //Click event to scroll to top
            $('.scroll-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }
    }
    
    // Preloader JS
    function preloader(){
        if( $('.preloader').length ){
            $(window).on('load', function() {
                $('.preloader').fadeOut();
                $('.preloader').delay(50).fadeOut('slow');  
            })   
        }
    }     
	
    /*Function Calls*/ 
    new WOW().init();
    navbarFixed ();   
	scrollToTop (); 
	magnificPopup ();
	counterUp ();
	protfolioIsotope ();
	countDown ();
	selectmenu ();
	sliderRange ();
	productValue ();
	preloader ();
    
})(jQuery);