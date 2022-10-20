$(function(){
    let firsttime = true;

    $(".cardbox").hide();
    $("#confirm").on("click", function(){
        if(firsttime){
            firsttime=false;
            $("#card1").show();
            $("#list1").append("<li>"+$("#name").val()+" "+$("#address").val()+" "+$("#street").val()+" "+$("#city").val()+" "+$("#pincode").val()+" "+$("#mobile").val()+"</li>")
            $("#name").val("");
            $("#address").val("");
            $("#street").val("");
            $("#city").val("");
            $("#pincode").val("");
            $("#mobile").val("");
        }
        else{
            $("#card2").show();
            $("#list2").append("<li>"+$("#name").val()+" "+$("#address").val()+" "+$("#street").val()+" "+$("#city").val()+" "+$("#pincode").val()+" "+$("#mobile").val()+"</li>")
            $("#name").val("");
        }
    });
});