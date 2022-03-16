$(document).ready(function() {
    $("#hide").click(function(){
        $("h1").hide();
    });
    $("#show").click(function(){
        $("h1").show();
    });
    $("#toggle").click(function(){
        $("#input_value, #value").toggle();
    });
    $("#slide_up").click(function(){
        $("h1").slideUp();
    });
    $("#slide_down").click(function(){
        $("h1").slideDown();
    });
    $("#slide_toggle").click(function(){
        $("#input_value, #value").slideToggle();
    });
    $("#fade_out").click(function(){
        $("h1").fadeOut();
    });
    $("#fade_in").click(function(){
        $("h1").fadeIn();
    });
    $("#add_class").click(function(){
        $("h1").addClass("color_change");
    });
    $("#remove_class").click(function(){
        $("h1").removeClass("color_change");
    });
    $("#remove_class").click(function(){
        $("h1").removeClass("color_change");
    });
    $("#before").click(function(){
        $("h1").before("¯\_(ツ)_/¯");
    });
    $("#after").click(function(){
        $("h1").after("¯\_(ツ)_/¯");
    });
    $("#append").click(function(){
        $("h1").append(" jQuery Functions");
    });
    $("#html").click(function(){
        $("h1").html("<h2>jQuery Functions</h2>");
    });
    $("#attr").click(function(){
        $("#input_value").attr("value","yooo");
    });
    $("#value").click(function(){
        $("#input_value").val("functions jQuery");
    });
    $("#text").click(function(){
        $("h1").text("Functions jQuery");
    });
});