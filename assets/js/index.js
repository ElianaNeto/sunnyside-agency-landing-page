$(document).ready(function(){
    $('.menu-list ul li a').click(function() {
        $('.menu-list li a').removeClass("active");
        $(this).addClass("active");  
    });
});