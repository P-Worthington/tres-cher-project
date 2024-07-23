//slide functions 
$(document).ready(function(){
    $("#cart-btn").click(function(){
        $("#login-lg-screen").slideUp(0);
        $("#search-lg-screen").slideUp(0);
        $("#menu-lg-screen").slideUp(0);
        $("#cart-lg-screen").slideToggle(300);
    });

    $("#login-btn").click(function(){
        $("#search-lg-screen").slideUp(0);
        $("#menu-lg-screen").slideUp(0);
        $("#cart-lg-screen").slideUp(0);
        $("#login-lg-screen").slideToggle(300);
    });

    $("#search-btn").click(function(){
        $("#login-lg-screen").slideUp(0);
        $("#menu-lg-screen").slideUp(0);
        $("#cart-lg-screen").slideUp(0);
        $("#search-lg-screen").slideToggle(300);
    });

    $("#menu-btn").click(function(){
        $("#search-lg-screen").slideUp(0);
        $("#login-lg-screen").slideUp(0);
        $("#cart-lg-screen").slideUp(0);
        $("#menu-lg-screen").slideToggle(300);
    });

    //clearMouseOut("#search-lg-screen")
    //clearMouseOut("#login-lg-screen")
    //clearMouseOut("#cart-lg-screen")
    //clearMouseOut("#menu-lg-screen")
});

function clearMouseOut (id) {
    $(document).mouseup(function (e) {
        if ($(e.target).
            closest(id).
            length=== 0) {
            $(id).hide();
        }
    });
}