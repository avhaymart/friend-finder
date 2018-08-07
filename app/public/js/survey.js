var userArray = [];

$(document).ready(function () {
    $("button").on("click", function (e) {
        e.preventDefault();
        $("#survey").fadeOut(function () {
            $("#results").fadeIn();
        });
    })
})