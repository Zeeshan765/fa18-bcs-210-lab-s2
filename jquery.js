// Document Ready
$(function() {

    $("#PreviousBtn").hide();

    $.ajax({
        url: "https://reqres.in/api/users?page=" + 1,
        method: "GET",
        

        success: function (response) {
            $('.Result').html('');
            for (var i = 0; i < response.data.length; i++) {
                $('.Result').append(' <div class="NewResult">  <p class="id">' + response.data[i].id + '</p> <p class="email">' + response.data[i].email + '</p> <p class="firstname ">' + response.data[i].first_name + '</p> <p class="lastname ">' + response.data[i].last_name + '</p>  <p class="avatar"> <img src="' + response.data[i].avatar + '" alt=""> </p></div>');
            }

        }
    });


// Next Button  Click Function

    $("#NextBtn").click(function () {
        $.ajax({
            url: "https://reqres.in/api/users?page=" + 2,
            method: "GET",
            success: function (response) {
                $('.Result').html('');
                for (var i = 0; i < response.data.length; i++) {
                    $('.Result').append(' <div class="NewResult">  <p class="id">' + response.data[i].id + '</p> <p class="email">' + response.data[i].email + '</p> <p class="firstname ">' + response.data[i].first_name + '</p> <p class="lastname ">' + response.data[i].last_name + '</p>  <p class="avatar"> <img src="' + response.data[i].avatar + '" alt=""> </p></div>');
                }

            }
        });


        $("#NextBtn").hide();
        $("#PreviousBtn").show();
    });



// Previous Button  Click Function

    $("#PreviousBtn").click(function () {
        $.ajax({
            url: "https://reqres.in/api/users?page=" + 1,
            method: "GET",
            success: function (response) {
                $('.Result').html('');
                for (var i = 0; i <response.data.length; i++) {
                    $('.Result').append(' <div class="NewResult">  <p class="id"> ' + response.data[i].id + '</p> <p class="email">' + response.data[i].email + '</p> <p class="firstname ">' + response.data[i].first_name + '</p> <p class="lastname ">' + response.data[i].last_name + '</p>  <p class="avatar"> <img src="' + response.data[i].avatar + '" alt=""> </p></div>');
                }

            }
        });

        $("#PreviousBtn").hide();
        $("#NextBtn").show();
    });

});