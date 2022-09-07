"use strict";
!function (e) {
    e(".showcolor").on("click", (function () {
        "-120px" == e(".colors").css("left") ? e(".colors").css("left", "0px") : e(".colors").css("left", "-120px")
    })), e(".sq-blue").on("click", (function () {
        e("head").append('<link rel="stylesheet" type="text/css" href="css/blue.css" />')
    })), e(".sq-red").on("click", (function () {
        e("head").append('<link rel="stylesheet" type="text/css" href="css/red.css" />')
    })), e(".sq-green").on("click", (function () {
        e("head").append('<link rel="stylesheet" type="text/css" href="css/green.css" />')
    }))
}(jQuery);