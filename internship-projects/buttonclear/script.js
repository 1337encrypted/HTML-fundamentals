let gcount=0;
let btncount=0;

let products={
    1:{pid:100, pname:"fruits", price:500},
    2:{pid:200, pname:"computers", price:400}
}

$(function(){
    $("#append").on("click",function(){
        ++btncount;
        $("#list").append("<li>"+products[btncount].pname+" "+products[btncount].price+" <Button id='"+btncount+"' class='btn btn-primary m-3'>Add to Cart</Button></li>")
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