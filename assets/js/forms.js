form_focus = function () {

    var input = $('input[type="text"]'),
        placeholder = $(this).attr('placeholder');

    //entra en cada input y comprueba si tiene algun valor o el placeholder
    input.each(function() {
        var input = $('input[type="text"]'),
            placeholder = $(this).attr('placeholder');

        if ($(this).val().length > 0 || placeholder !== undefined ) {
            $(this).siblings('.label-label').addClass('floating-label');
        }else{
            $(this).siblings('.label-label').removeClass('floating-label');
        }
    });

    input.on('change', function () {
        if ($(this).val().length !== 0 || placeholder !==  undefined) {
            $(this).siblings('.label-label').addClass('floating-label');
        }else{
            $(this).siblings('.label-label').removeClass('floating-label');

        }
    });

    //cuando el input tiene el foco
    input.on('focusin', function () {
        if ($(this).val().length >= 0 || placeholder !==  undefined) {
            $(this).siblings('.label-label').addClass('floating-label');
        }else{
            $(this).siblings('.label-label').removeClass('floating-label');
        }
        //$(this).siblings('.label-label').addClass('floating-label');
    });

    input.on('focusout', function () {
        if ($(this).val().length !== 0 ) {
            $(this).siblings('.label-label').addClass('floating-label');
        }else if ($(this).attr('placeholder') !==  undefined) {
            $(this).siblings('.label-label').addClass('floating-label');
        }else {
            $(this).siblings('.label-label').removeClass('floating-label');
        }
    });


}

form_focus();
