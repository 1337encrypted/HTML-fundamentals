$(function(){
    $("#confirm").on("click", function(){
        $("#list").append("<li>"+$("#name").val()+" "+$("#address").val()+"<input type='radio' name='sameradiobtn'></li>")
    });
});