(function($) {
    "use strict";

    var WidgetDefaultHandler = function($scope) {


        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: "wow", // animated element css class (default is wow)
                animateClass: "wow-animated", // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: false, // trigger animations on mobile devices (default is true)
                live: true, // act on asynchronously loaded content (default is true)
                scrollContainer: null, // optional scroll container selector, otherwise use window,
                resetAnimation: true, // reset animation on end (default is true)
            });
            wow.init();
        }
        if ($scope.find("[data-bg-src]").length) {
            $("[data-bg-src]").each(function() {
                var src = $(this).attr("data-bg-src");
                $(this).css("background-image", "url(" + src + ")");
                $(this).removeAttr("data-bg-src").addClass("background-image");
            });
        }

        /*---------- 07. Popup Sidemenu ----------*/
        function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
            // Sidebar Popup
            $($sideMunuOpen).on("click", function(e) {
                e.preventDefault();
                $($sideMenu).addClass($toggleCls);
            });
            $($sideMenu).on("click", function(e) {
                e.stopPropagation();
                $($sideMenu).removeClass($toggleCls);
            });
            var sideMenuChild = $sideMenu + " > div";
            $(sideMenuChild).on("click", function(e) {
                e.stopPropagation();
                $($sideMenu).addClass($toggleCls);
            });
            $($sideMenuCls).on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();
                $($sideMenu).removeClass($toggleCls);
            });
        }
        popupSideMenu(
            ".sidemenu-wrapper",
            ".sideMenuToggler",
            ".sideMenuCls",
            "show"
        );

        if ($scope.find(".popup-video").length) {
            $(".popup-video").magnificPopup({
                type: "iframe",
            });
        }

        /*----------- 08. Counter section ----------*/
        var a = 0;

        $(window).scroll(function() {
            var mediaCounter = $(".media-counter");

            if (mediaCounter.length > 0) {
                var oTop = mediaCounter.offset().top - window.innerHeight;

                if (a == 0 && $(window).scrollTop() > oTop) {
                    $(".counter-number").each(function() {
                        var $this = $(this),
                            countTo = $this.attr("data-count");
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo,
                        }, {
                            duration: 4000,
                            easing: "swing",
                            step: function() {
                                $this.text(Math.floor(this.countNum));
                            },
                            complete: function() {
                                $this.text(this.countNum);
                                //alert('finished');
                            },
                        });
                    });
                    a = 1;
                }
            }
        });

        // Function For Custom Arrow Btn
        $("[data-slick-next]").each(function() {
            $(this).on("click", function(e) {
                e.preventDefault();
                $($(this).data("slick-next")).slick("slickNext");
            });
        });

        $("[data-slick-prev]").each(function() {
            $(this).on("click", function(e) {
                e.preventDefault();
                $($(this).data("slick-prev")).slick("slickPrev");
            });
        });

        let $serviceslider = $scope.find('.service-carousel');
        $serviceslider.not('.slick-initialized').slick({
            loop: true,
            dots: $serviceslider.data('slick-dots'),
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: $serviceslider.data('slick-arrow'),
            autoplay: $serviceslider.data('slick-autoplay'),
            fade: false,
            slidesToShow: $serviceslider.data('slide-to-show'),
            autoplaySpeed: 6000,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        let $teamslider = $scope.find('.team-slider');
        $teamslider.not('.slick-initialized').slick({
            loop: true,
            dots: $teamslider.data('slick-dots'),
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: $teamslider.data('slick-arrow'),
            autoplay: $teamslider.data('slick-autoplay'),
            fade: false,
            slidesToShow: $teamslider.data('slide-to-show'),
            autoplaySpeed: 6000,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        let $testislider = $scope.find('.vs-testi-slider');
        $testislider.not('.slick-initialized').slick({
            loop: true,
            dots: $testislider.data('slick-dots'),
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: $testislider.data('slick-arrow'),
            autoplay: $testislider.data('slick-autoplay'),
            fade: false,
            slidesToShow: $testislider.data('slide-to-show'),
            autoplaySpeed: 6000,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: $testislider.data('slide-to-show'),
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        let $mainslider = $scope.find('.main-slider');
        $mainslider.not('.slick-initialized').slick({
            loop: true,
            dots: false,
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: false,
            autoplay: true,
            fade: true,
            slidesToShow: 1,
            autoplaySpeed: 6000,
        });
        let $testislider2 = $scope.find('.vs-testi-slider2');
        $testislider2.not('.slick-initialized').slick({
            loop: true,
            dots: $testislider2.data('slick-dots'),
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: $testislider2.data('slick-arrow'),
            autoplay: $testislider2.data('slick-autoplay'),
            fade: false,
            slidesToShow: $testislider2.data('slide-to-show'),
            autoplaySpeed: 6000,
        });

        let $testislider3 = $scope.find('.vs-testi-slider3');
        $testislider3.not('.slick-initialized').slick({
            loop: true,
            dots: $testislider3.data('slick-dots'),
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: $testislider3.data('slick-arrow'),
            autoplay: $testislider3.data('slick-autoplay'),
            fade: false,
            slidesToShow: $testislider3.data('slide-to-show'),
            autoplaySpeed: 6000,
        });

        let $brandslider = $scope.find('.vs-brand-slider');
        $brandslider.not('.slick-initialized').slick({
            loop: true,
            dots: $brandslider.data('slick-dots'),
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: $brandslider.data('slick-arrow'),
            autoplay: $brandslider.data('slick-autoplay'),
            fade: false,
            centerMode: true,
            slidesToShow: $brandslider.data('slide-to-show'),
            autoplaySpeed: 6000,
            centerPadding: 0,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: $brandslider.data('slide-to-show'),
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        let $blogcarousel = $scope.find('.vs-blog-carousel');
        $blogcarousel.not('.slick-initialized').slick({
            loop: true,
            dots: $blogcarousel.data('slick-dots'),
            infinite: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-right"></i></button>',
            arrows: $blogcarousel.data('slick-arrow'),
            autoplay: $blogcarousel.data('slick-autoplay'),
            fade: false,
            slidesToShow: $blogcarousel.data('slide-to-show'),
            autoplaySpeed: 6000,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: $blogcarousel.data('slide-to-show'),
                    }
                },
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 470,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });


        /* ----------- 21. Team active----------*/
        const iconButtons = document.querySelectorAll('.icon-btn');

        // Assign onClick directly to each button
        iconButtons.forEach((button) => {
            button.onclick = () => {
                const memberLinks = button.parentElement.querySelector('.member-links');
                if (memberLinks) {
                    memberLinks.classList.toggle('active');
                }
            };
        });

        // Assign onClick to the document for global click handling
        document.onclick = (event) => {
            iconButtons.forEach((button) => {
                const memberLinks = button.parentElement.querySelector('.member-links');
                if (memberLinks && !button.contains(event.target) && !memberLinks.contains(event.target)) {
                    memberLinks.classList.remove('active');
                }
            });
        };


        /*----------- 20. map ----------*/

        if ($scope.find(".map .rpin").length) {
            const pins = document.querySelectorAll('.map .rpin');
            pins.forEach(pin => {
                pin.onclick = () => {
                    pins.forEach(p => p.classList.remove('active'));
                    pin.classList.add('active');
                };
            });
        }

        /*----------- 13. Progress Bar ----------*/
        if ($scope.find(".progress-box").length) {

            const progressBoxes = document.querySelectorAll(".progress-box");

            const options = {
                root: null,
                rootMargin: "0px",
                threshold: 0.5, // Intersection observer threshold
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateProgressBar(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            progressBoxes.forEach((progressBox) => {
                observer.observe(progressBox);
            });

            function animateProgressBar(progressBox) {
                const progressBar = progressBox.querySelector(".progress-box__bar");
                const progressNumber = progressBox.querySelector(".progress-box__number");
                const targetWidth = parseInt(progressBar.style.width, 10); // Explicit radix 10
                let width = 0;

                const countInterval = setInterval(() => {
                    width++;
                    progressBar.style.width = width + "%";
                    progressNumber.textContent = width + "%";
                    if (width >= targetWidth) {
                        clearInterval(countInterval);
                    }
                }, 20);
            }
        }


        $(window).on('scroll', function() {

            // back to top scroll
            var ScrollTop = $('.back-to-top');

            if ($(window).scrollTop() > 1000) {
                ScrollTop.fadeIn(1000);
            } else {
                ScrollTop.fadeOut(1000);
            }

            // navbar fixed
            if ($scope.find(".pc-sticky-header").length) {
                const headerHeight = $(".header-area").outerHeight();
                if ($(this).scrollTop() > headerHeight) {
                    $('.pc-sticky-header').addClass("fixed-top");
                } else {
                    $('.pc-sticky-header').removeClass("fixed-top");
                }
            }

        });
    };


    //elementor front start
    $(window).on("elementor/frontend/init", function() {
        elementorFrontend.hooks.addAction(
            "frontend/element_ready/widget",
            WidgetDefaultHandler
        );
    });

})(jQuery);