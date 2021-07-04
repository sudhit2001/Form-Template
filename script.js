$(function(){

    $('.one').click(function(){

        $('.info1').addClass('hide');
        $('.text1').addClass('hide');
        $('.info2').removeClass('hide');
        $('.text2').removeClass('hide');

    });
    $('.two').click(function(){

        $('.info2').addClass('hide');
        $('.text2').addClass('hide');
        $('.info1').removeClass('hide');
        $('.text1').removeClass('hide');

    });

});