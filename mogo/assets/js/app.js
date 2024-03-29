$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /* Fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    })

    function checkScroll(scrollOffset) {

        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed")
        }
    }

    /* Smooth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })

    /* Navigation toggle */

    $("#nav-toggle").on("click", function (event){
        event.preventDefault();

    /*    добавлять или убирать данный класс при
          при нажатии на данный элемент */
        $("#nav").toggleClass("active");
        $(this).toggleClass("active");
    })

    /* Collapse */
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");

    })
})