var address = "1910 Bonair Dr SW";
var city = "Seattle";
var state = "WA";
var zipCode = "94109";
var queryURL = "http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1gix3lgz7kb_2qbsp&address=" + address + "&citystatezip=" + city + "%2C" + state;

$.ajax({
    url: queryURL,
    method: "GET"
}) .then(function(response) {
    console.log(response)
}); 