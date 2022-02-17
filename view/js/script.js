"use strict"

function scrollService() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#service").offset().top
    }, 1000);
}

function scrollContact() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact_form").offset().top
    }, 1000);
}

function codeNumber() {
    let codeValue = $("#code").val();
    switch (codeValue) {
        case 'HF0_656Y5_567':
            $(".aut").slideToggle("slow")
            $("main").css({
                "display": "block"
            })
            $("body").css({
                "background": "#E9E9E9"
            })
            break;
        default:
            $("#code").val("");
    }
}

$(function () {
    $("#serv").on("click", scrollService);
    $("#cont").on("click", scrollContact);
    $("#connexion").on("click", codeNumber)

});