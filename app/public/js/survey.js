var userArray = [];

$(document).ready(function () {
    $("#sub").on("click", function (e) {
        var formData = $("#surveyForm").serializeArray();
        e.preventDefault();
        console.log($("#surveyForm").serializeArray());
        $.ajax({
            url:"/api/friends",
            type:"POST",
            data:formData
        }
        ).then(function(res) {
            console.log(res);
            console.log("ran");
            $("#survey").fadeOut(function () {
                $("#friendName").text(res[0]);
                $("#userName").text(formData[0].value);
                $("#userImage").attr("src", formData[1].value);
                $("#friendImage").attr("src", res[1]);
                $("#results").fadeIn();
            });
        })
       
    })
})