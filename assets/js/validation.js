$(function() {


    
    $("#city_error_message").hide(); 
    $("#zip_error_message").hide();
    $("#rent_error_message").hide();

    var error_city = false;
    var error_zip = false;
    var error_rent = false;

    $("#city").focusout(function() {
        check_city();
    })
    $("#zip").focusout(function() {
        check_zip();
    })
    $("#monthlyRent").focusout(function() {
        check_rent();
    })


    function check_city() {
        var cityPattern = /^[a-zA-Z0-9_ ]*$/;
        var cities = $("#city").val();
        if(cityPattern.test(cities) && cities !== '') {
            $("#city_error_message").hide();
            $("#city").css("border-bottom", "2px solid #34F458");
        } else {
            $("#city_error_message").html("Fill with characters, please.");
            $("#city_error_message").show();
            $("#city").css("border-bottom", "2px solid #F90A0A");
            error_city = true;
        }
    }

    function check_zip() {
        var zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;
        var zips = $("#zip").val();
        if (zipPattern.test(zips) && zips !== '') {
            $("#zip_error_message").hide();
            $("#zip").css("border-bottom", "2px solid #34F458");
        } else {
            $('#zip_error_message').html("Needs a 5 digit zip code.");
            $("#zip_error_message").show();
            $("#zip").css("border-bottom", "2px solid #F90A0A");
            error_zip = true;
        }
    }

    function check_rent() {
        var rentPattern =  /^[a-zA-Z0-9_ ]*$/;
        var rents = $("#monthlyRent").val(); 
        if (rentPattern.test(rents) && rents !== '') {
            $("#rent_error_message").hide();
            $("#monthlyRent").css("border-bottom", "2px solid #34F458");
        } else {
            $('#rent_error_message').html("Rent must contain numbers.");
            $("#rent_error_message").show();
            $("#monthlyRent").css("border-bottom", "2px solid #F90A0A");
            error_zip = true;
        }
    }
})