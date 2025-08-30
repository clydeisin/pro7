(function($) {
    "use strict";


    $(window).on('load', function() {
        if (document.querySelector('.preloader')) {
            $(".preloader").fadeOut();
        }
    });
    /*---------- 02. Preloader ----------*/
    if ($(".preloader").length > 0) {
        $(".preloaderCls").each(function() {
            $(this).on("click", function(e) {
                e.preventDefault();
                $(".preloader").css("display", "none");
            });
        });
    }
    /*---------- 03. Mobile Menu Active ----------*/
    $.fn.vsmobilemenu = function(options) {
        var opt = $.extend({
                menuToggleBtn: ".vs-menu-toggle",
                bodyToggleClass: "vs-body-visible",
                subMenuClass: "vs-submenu",
                subMenuParent: "vs-item-has-children",
                subMenuParentToggle: "vs-active",
                meanExpandClass: "vs-mean-expand",
                appendElement: '<span class="vs-mean-expand"></span>',
                subMenuToggleClass: "vs-open",
                toggleSpeed: 400,
            },
            options
        );

        return this.each(function() {
            var menu = $(this); // Select menu

            // Menu Show & Hide
            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);

                // collapse submenu on menu hide or show
                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function() {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }

            // Class Set Up for every submenu
            menu.find("li").each(function() {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                submenu.parent().addClass(opt.subMenuParent);
                submenu.prev("a").append(opt.appendElement);
                submenu.next("a").append(opt.appendElement);
            });

            // Toggle Submenu
            function toggleDropDown($element) {
                if ($($element).next("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).next("ul").slideToggle(opt.toggleSpeed);
                    $($element).next("ul").toggleClass(opt.subMenuToggleClass);
                } else if ($($element).prev("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).prev("ul").slideToggle(opt.toggleSpeed);
                    $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
                }
            }

            // Submenu toggle Button
            var expandToggler = "." + opt.meanExpandClass;
            $(expandToggler).each(function() {
                $(this).on("click", function(e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });

            // Menu Show & Hide On Toggle Btn click
            $(opt.menuToggleBtn).each(function() {
                $(this).on("click", function() {
                    menuToggle();
                });
            });

            // Hide Menu On out side click
            menu.on("click", function(e) {
                e.stopPropagation();
                menuToggle();
            });

            // Stop Hide full menu on menu click
            menu.find("div").on("click", function(e) {
                e.stopPropagation();
            });
        });
    };

    $(".vs-menu-wrapper").vsmobilemenu();

    /*---------- 04. Sticky fix ----------*/
    var lastScrollTop = "";
    var scrollToTopBtn = ".scrollToTop";

    function stickyMenu($targetMenu, $toggleClass, $parentClass) {
        var st = $(window).scrollTop();
        var height = $targetMenu.css("height");
        $targetMenu.parent().css("min-height", height);
        if ($(window).scrollTop() > 800) {
            $targetMenu.parent().addClass($parentClass);

            if (st > lastScrollTop) {
                $targetMenu.removeClass($toggleClass);
            } else {
                $targetMenu.addClass($toggleClass);
            }
        } else {
            $targetMenu.parent().css("min-height", "").removeClass($parentClass);
            $targetMenu.removeClass($toggleClass);
        }
        lastScrollTop = st;
    }
    $(window).on("scroll", function() {
        stickyMenu($(".sticky-active"), "active", "will-sticky");
        if ($(this).scrollTop() > 500) {
            $(scrollToTopBtn).addClass("show");
        } else {
            $(scrollToTopBtn).removeClass("show");
        }
    });
    /*---------- 05. Scroll To Top ----------*/
    $(scrollToTopBtn).each(function() {
        $(this).on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({
                    scrollTop: 0,
                },
                lastScrollTop / 3
            );
            return false;
        });
    });

    /*----------- 16. Nice Select ----------*/
    if ($("select").length > 0) {
        $("select").niceSelect();
    }
})(jQuery);