//slide functions 
$(document).ready(function(){
    $("#cart-btn").click(function(){
        $("#cart-lg-screen").slideToggle();
        if($("#cart-lg-screen:visible")) {
            console.log("Hello")
        }
    });
  });