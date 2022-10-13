$(document).ready(function() {
   
    $('.parent').css('width', $('img').width());

    $('img').parent().zoom({
        magnify: 4,
        target: $('.contain').get(0)
    });
});