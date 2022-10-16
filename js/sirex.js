/*
  [JS Index]
  
  ---
  
  Template Name: Sirex - Creative Coming Soon Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. fadeIn
  3. slick fullscreen slideshow ZOOM/FADE
  4. countdown
    4.1. countdown timer
	4.2. countdown SETUP
  5. fullPage
  6. skills about
  7. forms
    7.1. newsletter form
	7.2. contact form
  8. YouTube player
  9. clone function
    9.1. vertical lines
  10. wordRotator
  11. navigation
    11.1. navigation additional CLOSER
  12. newsletter modal
    12.1. newsletter modal additional CLOSER
  13. owl works carousel slider
  14. magnificPopup
    14.1. magnificPopup single
	14.2. magnificPopup gallery
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
		
        // 2. fadeIn
        setTimeout(function() {
            $(".fadeIn-element").delay(1200).css({
                display: "none"
            }).fadeIn(2400);
        }, 0);
		setTimeout(function() {
            $(".border-top").removeClass("top-position");
        }, 800);
        setTimeout(function() {
            $(".border-left").removeClass("left-position");
        }, 800);
        setTimeout(function() {
            $(".border-right").removeClass("right-position");
        }, 800);
        setTimeout(function() {
            $(".border-bottom").removeClass("bottom-position");
        }, 800);
        setTimeout(function() {
            $(".hero-bg").addClass("hero-bg-show");
        }, 400);
    });
	
    // 3. slick fullscreen slideshow ZOOM/FADE
    $(".slick-fullscreen-slideshow-zoom-fade").slick({
        arrows: false,
        initialSlide: 0,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        speed: 1600,
        draggable: true,
        dots: false,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        pauseOnHover: false
    });
	
    // 4. countdown
    $(document).on("ready", function() {
        // 4.1. countdown timer
        $(".countdown").countdown({
            until: new Date(Date.parse(setting.counter.lastDate)),
            layout: $(".countdown").html(),
            timezone: setting.counter.timeZone
        });
    });
    // 4.2. countdown SETUP
    var setting = {
        counter: {
            lastDate: "05/05/2025 12:00:00", // target date settings, 'MM/DD/YYYY HH:MM:SS'
            timeZone: null
        }
    };
	
    // 5. fullPage
    $("#fullpage").fullpage({
        anchors: ["home", "about", "works", "contact"],
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["Home", "About", "Works", "Contact"],
        responsiveWidth: 1024,
        autoScrolling: true,
        scrollBar: false,
        onLeave: function(index, nextIndex, direction) {
            var idx = Math.abs(index - nextIndex) * 0.1;
            $.fn.fullpage.setScrollingSpeed(idx * 6000);
        },
        afterResponsive: function(isResponsive) {}
    });
	
    // 6. skills about
    $(".skills-appear").appear(function() {
        $(".skills").easyPieChart({
            easing: "easeOutBounce",
            onStep: function(from, to, percent) {
                $(this.el).find(".percent").text(Math.round(percent));
            }
        });
    });
	
    // 7. forms
    // 7.1. newsletter form
    $("form#subscribe").on("submit", function() {
        $("form#subscribe .subscribe-error").remove();
        $.post("subscribe.php");
        var s = !1;
        if ($(".subscribe-requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter your Email</span>'),
                    $(this).addClass("inputError"), s = !0;
                else if ($(this).hasClass("subscribe-email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="subscribe-error">Please enter a valid Email</span>'),
                        $(this).addClass("inputError"), s = !0);
                }
            }), !s) {
            $("form#subscribe input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#subscribe").slideUp("fast", function() {
                    $(this).before('<div class="subscribe-success">Thank you for subscribing.</div>');
                });
            });
        }
        return !1;
    });
    // 7.2. contact form
    $("form#form").on("submit", function() {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function() {
                if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                    "inputError"), s = !0;
                else if ($(this).hasClass("email")) {
                    var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                        "inputError"), s = !0);
                }
            }), !s) {
            $("form#form input.submit").fadeOut("normal", function() {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function() {
                $("form#form").slideUp("fast", function() {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
	
    // 8. YouTube player
    $("#bgndVideo").YTPlayer();
	
    // 9. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };

    $("#bgndVideoShop").YTPlayer();

    // 9. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    // 9.1. vertical lines
    $("<div class='vertical-lines-wrapper'></div>").appendTo(".vertical-lines");
    $("<div class='vertical-effect'></div>").duplicate(4).appendTo(".vertical-lines-wrapper");
	
    // 10. wordRotator
    $("#wordrotator").wordsrotator({
        autoLoop: true,
        randomize: false,
        stopOnHover: false,
        changeOnClick: false,
        animationIn: "fadeInLeft",
        animationOut: "fadeOutRight",
        speed: 4000,
        words: ['<span class="highlighter">APP</span>eal', 'ottimizza il tuo<br><span class="highlighter">lavoro</span>', 'un <span class="highlighter">prodotto</span> innovativo<br>ed economico']
    });

    // 10. wordRotator
    $("#wordrotatorShop").wordsrotator({
        autoLoop: true,
        randomize: false,
        stopOnHover: false,
        changeOnClick: false,
        animationIn: "fadeInLeft",
        animationOut: "fadeOutRight",
        speed: 4000,
        words: ['Visita il nostro<br><span class="highlighter">Shop</span>', 'seleziona il<br><span class="highlighter">colore</span> del tuo led', 'Scegli la taglia del tuo<br><span class="highlighter">cane</span>']
    });
	
    // 11. navigation
    $(".navigation-link").on("click", function() {
        $("#navigation").removeClass("navigation-on");
        $("#navigation-launcher").removeClass("lines-close");
    });
    // 11.1. navigation additional CLOSER
    $(".newsletter-modal-launcher").on("click", function() {
        $("#navigation").removeClass("navigation-on");
        $("#navigation-launcher").removeClass("lines-close");
    });
	
    // 12. newsletter modal
    $(".newsletter-modal-launcher, .newsletter-modal-closer").on("click", function() {
        if ($(".newsletter-modal").hasClass("open")) {
            $(".newsletter-modal").removeClass("open");
            $(".newsletter-modal").addClass("close");
        } else {
            $(".newsletter-modal").removeClass("close");
            $(".newsletter-modal").addClass("open");
        }
    });
    // 12.1. newsletter modal additional CLOSER
    $(".navigation-toggle").on("click", function() {
        $(".newsletter-modal").removeClass("open");
        $(".newsletter-modal").addClass("close");
    });
	
	// 13. owl works carousel slider
    $("#works-page-img-carousel").owlCarousel({
        loop: false,
        center: false,
        items: 2,
        margin: 20,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: true,
        navText: ["<i class='owl-custom ion-chevron-left'></i>", "<i class='owl-custom ion-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 2
            }
        }
    });
	
	// 14. magnificPopup
    // 14.1. magnificPopup single
    $(".popup-photo-single").magnificPopup({
        type: "image",
        gallery: {
            enabled: false
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
		fixedContentPos: false
    });
    // 14.2. magnificPopup gallery
    $(".popup-photo-gallery").each(function() {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });
	
	
});