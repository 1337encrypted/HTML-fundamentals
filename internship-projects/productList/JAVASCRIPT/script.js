let gcount=0;
let productqty = [0,0,0];

const allProducts={
    fruits: [{pid:100,pname:"Orange",price:200,Image:"../IMAGES/orange.jpeg"},
    {pid:101,pname:"Mango",price:600,Image:"../IMAGES/mango.png"},
    {pid:102,pname:"Apple",price:250,Image:"../IMAGES/apple.jpeg"}],
    computers: [{pid:200,pname:"Macbook Air",price:80000},
    {pid:201,pname:"ASUS TUF gaming",price:58000},
    {pid:201,pname:"Microsoft surface GO",price:71900}],
    clothing: [{pid:300,pname:"Tshirt",price:800},
    {pid:301,pname:"Jeans",price:1500},
    {pid:302,pname:"Hoodies",price:2000}]
}

let priceid=0;
let btncount=0;

$(function(){
    $("#btn1").on("click",function(){
        $("#list").empty();
        let prodCategory= $("#product").val();
        let products = allProducts[prodCategory];
        ++btncount;
        ++priceid;
        products.forEach(prod=>$("#list").append("<li>"+prod.pname+"<img src='"+prod.Image+"' height=100 width=100> <Button onclick='increment("+prod.pid+")' class='btn btn-primary m-3' id='"+prod.pid+"'>Add to Cart</Button> <span id='"+priceid+"'>"+prod.price+"</span></li>"))
        
        
        
    });
});
function increment(id){
    // $("#checkout").empty();
    let price=0;
    gcount++;
    ++productqty[id-100];
    $("#counter").text(gcount);
    let prodCategory= $("#product").val();
    let products = allProducts[prodCategory];
    console.log(productqty);
    products.forEach(prod=>{
        if(prod.pid==id){
            $("#checkout").append("<tr><td>"+prod.pname+"</td><td>"+prod.price+"</td><td>"+productqty[id-100]+"</td></tr>");
        }
    
    })
}