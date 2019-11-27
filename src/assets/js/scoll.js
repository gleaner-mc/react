$(function () {
    //绑定滚动条事件
    //绑定滚动条事件
    $(window).bind("scroll", function () {
        var sTop = $(window).scrollTop();
        var sTop = parseInt(sTop);
        if (sTop >= 100) {
            if (!$("#scrollSearchPro").is(":visible")) {
                try {
                    $("#scrollSearchPro").slideDown();
                } catch (e) {
                    $("#scrollSearchPro").show();
                }
            }
        }
        else {
            if ($("#scrollSearchPro").is(":visible")) {
                try {
                    $("#scrollSearchPro").slideUp();
                } catch (e) {
                    $("#scrollSearchPro").hide();
                }
            }
        }
    });
})

/**
         * Javascript API调用ActionSheet
         */
        !function ($) {
            var $myAs = $('#J_ActionSheet');

            $('#J_ShowActionSheet').on('click', function () {
                $myAs.actionSheet('open');
            });

            $('#J_Cancel').on('click', function () {
                $myAs.actionSheet('close');
            });

        }(jQuery);

