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

    header_scroll();
    header_dropdown();
    activeMenu();
}

header();
