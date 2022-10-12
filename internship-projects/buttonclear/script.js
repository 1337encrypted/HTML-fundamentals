let gcount=0;

$(function(){
    $("#append").on("click",function(){
        $("#list").append("<li>"+"orange price: "+"<span id='200'>200</span>"+"</li>")
    })

    $("#addToCart").on("click", function(){
        ++gcount;
        $("#counter").html(gcount);
        let price = parseInt($("#list").find("#200").text());
        let amount = price*gcount;
        $("#amount").val(amount);
    })

    $("#clear").on("click", function(){
        gcount=0;
        $("#list").empty();
        $("#counter").html(0);
        $("#amount").val('')
    })
});