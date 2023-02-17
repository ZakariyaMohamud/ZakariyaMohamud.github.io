$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    })

    $('a[href*="#"]').click(function(e){
    
        e.preventDefualt();

        $('html, body').animate({


            scrollTop : $($ (this).attr('href')).offset().top,
        
        },
        500,
        'linear'
        );


    });
});