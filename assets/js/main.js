init = function () {
    //headerFixed('#header');
    dropdownMenu('.header__nav__menuHeader__listItem__enlace');
    slideMenu('#btn-menu');
    scrollToTop('.scrollTop');
    activeMenu('.header__nav__menuHeader__listItem');
    acordeon('.acordeon-title', '.acordeon-paragraph');
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
