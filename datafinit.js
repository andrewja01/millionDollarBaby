$("#btnGetAdd").on("click", function () {
    var city = $("#city").val();
    var zip = $("#zip").val();
    var state = $("#state").val();
    var rent = $("#monthlyRent").val();
    // var long = 
    // var lat =
    //var gmapAddress = city + ", " + state;
    //dynamically entering address to be searched by google maps
    //$("#address").text(city + ", " + state);
    var queryURL = "https://api.datafiniti.co/v4/properties/search";
    var data = JSON.stringify({
        format: "json",
        num_records: 10,
        download: false,
        query: "city:" + city + " AND province:CA AND postalCode:" + zip + " AND prices:* AND propertyTaxes:* AND mlsNumber:*"
    });
    $.ajax({
        type: "POST",
        url: queryURL,
        dataType: "json",
        data: data,
        contentType: "application/json",
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsInN1YiI6IjU2NSIsImlzcyI6ImRhdGFmaW5pdGkiLCJlbWFpbCI6ImFuZHJld2phMDFAZ21haWwuY29tIn0.07qQQ0hIJBabUMUwOicDlzjAc7jgn-k-dC5PC9OXHh8');
        }
    }).then(function (response) {
        console.log(response);
        var sumROI = 0;
        var sumPurchase = 0;
        var results = response.records;
        rent = rent * 12;
        //var arr = [];
        //clearing out the table body
        $("tbody").empty();
        for (var i = 0; i < results.length; i++) {
            //variable for property management fees
            var propMgmt = rent * .08;
            //variable for annual insurance fees
            var propInsurance = 1000;
            //variables for dynamically creating the table rows 
            var tBody = $("tbody");
            var tRow = $("<tr>");
            // //var strAddress = results[i].address + results[i].city + results[i].province + results[i].postalCode;
            // // var strAddress = "46540 fremont blvd fremont,ca 94538";
            // // var url = "";
            // var listing = "<a href onclick="javascript:goToURL(google.com)">Go To URL</a>";
            // //var listing = "<a id='code' href= # OnClick=javascript:codeAddress('" + strAddress + "')>" + results[i].mlsNumber + "</a>";
            // //"<href=codeAddress('" + strAddress + "')>" + results[i].mlsNumber + "</a>";
            // function goToURL(url){
            //     window.open("google.com");
            //     }
            // console.log(listing);
            var listing = $("<td>").html(results[i].mlsNumber);
            var prop = $("<td>").html(results[i].address + ", " + results[i].city + ", " + results[i].province + " " + results[i].postalCode);
            var taxes = $("<td>").html(("$" + (results[i].propertyTaxes[0].amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
            var purchPrice = $("<td>").html("$" + (results[i].prices[0].amountMax).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
            //calculating return
            var roi = $("<td>").html(Math.round((rent - results[i].propertyTaxes[0].amount - propInsurance - propMgmt) / (results[i].prices[0].amountMax) * 100) + "%");
            //calculating average return in that city/ zipcode
            var sumROI = sumROI + Math.round((rent - results[i].propertyTaxes[0].amount - propInsurance - propMgmt) / (results[i].prices[0].amountMax) * 100);
            console.log(sumROI);
            //calculating average purchase price in that city/ zipcode
            var sumPurchase = sumPurchase + (results[i].prices[0].amountMax);
            console.log(sumPurchase);
            console.log(results[i].latitude);
            console.log(results[i].longitude);
            //appending to the DOM
            tRow.append(listing, prop, roi, taxes, purchPrice);
            tBody.append(tRow);
            // var placeholder =({//info: results[i].address + ", " + results[i].city + ", " + results[i].province + " " + results[i].postalCode,
            //             lat: results[i].latitude,
            //             lng: results[i].longitude
            //         });
            // console.log(arr);
        }
        //appending averages to the DOM
        var sumROI = sumROI / 10;
        $("#spnROI").empty();
        $("#spnROI").append(sumROI + "%");
        console.log(sumROI);
        var sumPurchase = sumPurchase / 10;
        $(".average").empty();
        $(".average").append("$" + (sumPurchase.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })));
    });
});