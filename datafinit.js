var queryURL = "https://api.datafiniti.co/v4/properties/search";

var data = JSON.stringify({
    format: "json", 
    num_records:10, 
    download: false,
    query:"postalCode:94118 AND prices:*"

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
}) .then(function(response) {
    console.log(response);
    console.log("hello world");
}); 

  
//   var xhr = new XMLHttpRequest();
//   xhr.withCredentials = true;
//   xhr.send(null);
  
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//       console.log(this.responseText);
//     }
//   });
  
//   xhr.open("GET", "https://api.datafiniti.co/v4/properties/search");
//   xhr.setRequestHeader("authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsInN1YiI6IjU2NSIsImlzcyI6ImRhdGFmaW5pdGkiLCJlbWFpbCI6ImFuZHJld2phMDFAZ21haWwuY29tIn0.07qQQ0hIJBabUMUwOicDlzjAc7jgn-k-dC5PC9OXHh8");
// //   xhr.setRequestHeader("Access-Control-Allow-Credentials", true);
//   xhr.send(null);


// var data = JSON.stringify({
//     "query": "Fremont",
//     "format": "json",
//     "download": "false"
//     });
    
//     var xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
    
//     xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
//     });
    
//     xhr.open("POST", "https://api.datafiniti.co/v4/properties/search");
//     xhr.setRequestHeader("authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hZG1pbiI6ZmFsc2UsInN1YiI6IjU2NSIsImlzcyI6ImRhdGFmaW5pdGkiLCJlbWFpbCI6ImFuZHJld2phMDFAZ21haWwuY29tIn0.07qQQ0hIJBabUMUwOicDlzjAc7jgn-k-dC5PC9OXHh8");
    
//     xhr.send(data);

