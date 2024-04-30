$(document).ready(function(){
    $(".invisible-content-MH").hide();
    $(document).on('click',"#btn",function(){
        var morelessButton=$(".invisible-content-MH").is(":visible")?'Read More':'Read Less';
        $(this).text(morelessButton);
        $(this).parent(".box-MH").find(".invisible-content-MH").toggle();
        $(this).parent(".box-MH").find(".visible-content-MH").toggle();
    });
});