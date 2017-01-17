form_focus = function () {
    $('input[type="text"]').on('focusin', function () {
        $(this).siblings('label').addClass('label-top');
    });

    $('input[type="text"]').on('focusout', function () {
        if ($(this).val().length > 0) {
          $('input[type="text"]').siblings('label').addClass('label-top');
        }
        else {
          $('input[type="text"]').siblings('label').removeClass('label-top');
        }
    });

    $('input[type="text"]').on('change', function () {
        if ($(this).val().length > 0) {
          $('input[type="text"]').siblings('label').addClass('label-top');
        }
        else {
          $('input[type="text"]').siblings('label').removeClass('label-top');
        }
    });
}

form_focus();
