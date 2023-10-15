
// $("h1").css("color" , "red");

// $("button").html("<em>Hey</em>");

// $("button").click(function() {
//     $("h1").css("color","red");
// });

$(document).keypress(function(event){
    $("h1").text(event.key);
});