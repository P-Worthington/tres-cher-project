//slide functions 
$(document).ready(function(){
    $("#cart-btn").click(function(){
        dropDownSlideUp();
        $("#cart-lg-screen").slideToggle();
    });

    $("#login-btn").click(function(){
        dropDownSlideUp();
        $("#login-lg-screen").slideToggle();
    });

    $("#search-btn").click(function(){
        dropDownSlideUp();
        $("#search-lg-screen").slideToggle(300);
    });
});

function dropDownSlideUp () {
    $("#login-lg-screen").slideUp(0);
    $("#cart-lg-screen").slideUp(0);
    $("#search-lg-screen").slideUp(0);
}