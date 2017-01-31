header = function () {

    header_scroll = function () {
        $(window).scroll(function () {
            var beforeTop = 0,
                currentTop = $(window).scrollTop();

            if (currentTop < this.beforeTop) {
                $("header").slideDown(300);
            } else {
                $("header").slideUp(300);
            }
            this.beforeTop = currentTop;
        })
    },

    activeMenu = function () {
        $('header li').on('click', function () {
            $('header li').removeClass('active');
            $(this).addClass('active');
        });
    },


    header_dropdown = function () {

        $('header a').click(function () {
            $(this).siblings('.dropdownMenu').slideToggle(300);
        }).on('focusout', function () {
            $(this).siblings('.dropdownMenu').fadeOut(300);
        });

        $(document).keyup(function (e) {
            if(e.keyCode === 27){
                $('.enlaces a').siblings('.dropdownMenu').hide();
            }
        });
    },

    header_slideMenu = function () {

        var slideoutMenu = $('.enlaces'),
            body = $('body'),
            botonMenu = $('.nav-icon'),
            overlay = $('.sideNav');
        //abrir menu izquierda icono menu
        $('#btn-menu').on('click', function(event){
        	slideoutMenu.toggleClass("open");
            //bloquear body para no hacer scrool con menu abierto
            overlay.addClass('side-overlay');
            $('body').css('overflow', 'hidden');
            //menu hamurguesa
            botonMenu.addClass('icon-active');
        });

        overlay.click(function () {
            slideoutMenu.removeClass('open');
            overlay.removeClass('side-overlay');
            body.removeAttr('style');
            //menu hamurguesa
        	botonMenu.removeClass('icon-active');
        });


    },

    header_scroll();
    header_dropdown();
    header_slideMenu();
    activeMenu();
}

header();
