let gcount = 0;
var grandTotal=0;

const counterDisplayElem = document.getElementById("count");
let counterMinusElem = document.getElementsByClassName('.minus-button');
let counterPlusElem = document.getElementsByClassName('.plus-button');
let fruitsCount=[0,0,0];

function increment(){
    document.getElementById("count").innerHTML=count++;
}

function decrement(){
    document.getElementById("count").innerHTML=count--;
}

const allProducts={
    fruits: [{pid:100,pname:"Orange",price:200,Image:"../HTML/orange.jpeg"},
    {pid:101,pname:"Mango",price:600,Image:"../HTML/mango.png"},
    {pid:102,pname:"Apple",price:250,Image:"../HTML/apple.jpeg"}],
    computers: [{pid:200,pname:"Macbook Air",price:80000},{pid:201,pname:"ASUS TUF gaming",price:58000},{pid:201,pname:"Microsoft surface GO",price:71900}],
    clothing: [{pid:300,pname:"Tshirt",price:800},{pid:301,pname:"Jeans",price:1500},{pid:302,pname:"Hoodies",price:2000}]
}

$(function(){
    $("#btn1").on("click",function(){
        let prodCategory= $("#product").val();
        let products = allProducts[prodCategory];
        var  i=0;

        products.forEach(prod=>$("#list").append("<li>"+prod.pname+" <span id="+prod.pid+">"+prod.price+"</span> <img src='"+prod.Image+"' height='100px' width='100px'> <button onclick='increment("+prod.pid+")' id='"+prod.pid+"'>Add to cart</button></li>"))  
    });
});

function increment(id){
    gcount++;
    document.getElementById("count").innerHTML=gcount;
    let item=id-100;
    let price=0;

    console.log(id);
    if(id==100){
        price=document.getElementById(id).innerHTML;
        document.getElementById("1").innerHTML=++fruitsCount[item]+"*"+price+" = "+fruitsCount[item]*price;
        // document.getElementById("1").innerHTML=++fruitsCount[item]*price;
        console.log(fruitsCount[item]);
        grandTotal+=parseInt(price);
    }
    else if(id==101){
        price=document.getElementById(id).innerHTML;
        document.getElementById("2").innerHTML=++fruitsCount[item]+"*"+price+" = "+fruitsCount[item]*price;
        // document.getElementById("1").innerHTML=++fruitsCount[item]*price;
        console.log(fruitsCount[item]);
        grandTotal+=parseInt(price);
    }
    else if(id==102){
        price=document.getElementById(id).innerHTML;
        document.getElementById("3").innerHTML=++fruitsCount[item]+"*"+price+" = "+fruitsCount[item]*price;
        // document.getElementById("1").innerHTML=++fruitsCount[item]*price;
        console.log(fruitsCount[item]);
        grandTotal+=parseInt(price);
    }
    document.getElementById("grandtotal").innerHTML=grandTotal;
}