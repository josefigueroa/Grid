init = function () {
    //headerFixed('#header');
    header_hidden();
    dropdownMenu('.header__nav__menuHeader__listItem__enlace');
    slideMenu('#btn-menu');
    scrollToTop('.scrollTop');
    activeMenu('.header__nav__menuHeader__listItem');
    acordeon('.acordeon-title', '.acordeon-paragraph');
},

header_hidden = function () {
    $(window).scroll(function () {
        var beforeTop = 0,
            currentTop = $(window).scrollTop();

        if (currentTop < this.beforeTop) {
            $("header").slideDown(300);
        } else {
            $("header").slideUp(300);
        }
        this.beforeTop = currentTop;
    });







    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $('header').outerHeight();
    //
    // $(window).scroll(function(event){
    //     didScroll = true;
    // });
    //
    // setInterval(function() {
    //     if (didScroll) {
    //         hasScrolled();
    //         didScroll = false;
    //     }
    // }, 250);
    //
    // function hasScrolled() {
    //     var st = $(this).scrollTop();
    //
    //     // Make sure they scroll more than delta
    //     if(Math.abs(lastScrollTop - st) <= delta)
    //         return;
    //
    //     // If they scrolled down and are past the navbar, add class .nav-up.
    //     // This is necessary so you never see what is "behind" the navbar.
    //     if (st > lastScrollTop && st > navbarHeight){
    //         // Scroll Down
    //         $('header').removeClass('nav-down').addClass('nav-up');
    //     } else {
    //         // Scroll Up
    //         if(st + $(window).height() < $(document).height()) {
    //             $('header').removeClass('nav-up').addClass('nav-down');
    //         }
    //     }
    //
    //     lastScrollTop = st;
    //     }
},

headerFixed = function (element) {
    var header = 'header_fixed';

    $(window).on('scroll', function () {
        if($(window).scrollTop() > 30){
            $(element).addClass(header);
        }else{
            $(element).removeClass(header);
        }
    });
},

dropdownMenu = function (elemnet) {
    var keydown = $('.header__nav__menuHeader__listItem__enlace');

    $(elemnet).click(function () {
        $(this).siblings('.dropdownMenu').slideToggle(300);
    }).on('focusout', function () {
        $(this).siblings('.dropdownMenu').fadeOut(300);
    });

    // $(document).keydown(function (e) {
    //     if(e.keyCode === 27){
    //         $(keydown).siblings('.dropdownMenu').hide();
    //     }
    // });
},

slideMenu = function (slideMenu, exit) {
    //abrir menu izquierda icono menu
    $(slideMenu).on('click', function(event){
    	var slideoutMenu = $('.enlaces'),
            body = $('body');

    	slideoutMenu.toggleClass("open");

        //body.append('<div class="overlay"></div>').css({'padding-left': '130px', 'transition': 'all 0.3s'});
    });

    //cerrar menu en la x
    $(exit).on('click', function () {
        var slideoutMenu = $('#btn-menu');

    	slideoutMenu.removeClass("open");
        $('body').css({'padding-left': '0', 'transition': 'all 0.3s'});

        $('<div class="overlay"></div>').detach();

    });
},

scrollToTop = function (element) {
    $(window).on('scroll', function () {
        if($(window).scrollTop() > 80 ){
            $(element).slideDown();
        }else {
            $(element).slideUp();
        }
    }),

    $(element).click(function () {
        $('body').animate({
            scrollTop: 0
        }, 400);
    });
},

activeMenu = function (element) {
    $(element).on('click', function () {
        $(element).removeClass('active');
        $(this).addClass('active');
    });
},

acordeon = function (acordeon, acordeonHijo ) {
    $(acordeon).click(function () {
        $(this).siblings(acordeonHijo).slideToggle(100);
        //cierra el acordeon abierto
        $(this).parent().siblings().find(acordeonHijo).slideUp();

        //cambio de icono
        $(this).children().toggleClass('fa-chevron-down fa-chevron-up');
        //cambio de icono cuando cierra acorderon abierto
        $(this).parent().siblings().find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });
},

$(document).ready(function() {
    init();
});
