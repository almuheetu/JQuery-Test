// $(".my-div h1,#p1,h1").text('goodbye')

// $("a").attr("href");



//  $("h1").css("color", "red");
//  $("h1").css("font-size", "3rem");
//  $("h1").css("font-style", "italic");


//  $("h1").css({"color":"black","font-size":"100px","font-style":"italic"});



// $("h1").addClass("style1 style2")

// $("button").click(function() {
//     $("h1").text("you have clicked the button")
//     $("h1").toggleClass("style1")
// });


// $(".myButton").click(function () {
//     var value = this.innerHTML;
//     $("h1").text(value + " is clicked")
// });

$("#loginBtn").on("click", function () {
    var password1 = $("#pass1").val();
    var password2 = $("#pass2").val();


    if (password1 != "" && password2 != "") {
        if (password1 == password2) {
            
        }
    }
})