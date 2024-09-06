$(document).ready(function () {
    // Add image via data 
    $(".bg-image").css('background', function () {
        var bg = ('url(' + $(this).data("image-src") + ') no-repeat center center');
        return bg;
    });
    // fit image nicely
    $(".bg-image, section").css("background-size", "cover");

    /*******************************
     * ACCORDION WITH TOGGLE ICONS
     *******************************/
    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('icon_minus-06');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-up");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-caret-up").removeClass("fa-caret-up").addClass("fa-caret-down");
    });
});

//# sourceMappingURL=app.js.map
