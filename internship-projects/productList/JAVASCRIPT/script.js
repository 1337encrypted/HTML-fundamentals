const allProducts={
    fruits: [{pid:100,pname:"Orange",price:200,Image:"/Users/shady/Documents/HTML fundamentals/internship-projects/productList/IMAGES/orange.jpeg"},
    {pid:101,pname:"Mango",price:600,Image:"/Users/shady/Documents/HTML fundamentals/internship-projects/productList/IMAGES/mango.png"},
    {pid:102,pname:"Apple",price:250,Image:"/Users/shady/Documents/HTML fundamentals/internship-projects/productList/IMAGES/apple.jpeg"}],
    computers: [{pid:200,pname:"Macbook Air",price:80000},{pid:201,pname:"ASUS TUF gaming",price:58000},{pid:201,pname:"Microsoft surface GO",price:71900}],
    clothing: [{pid:300,pname:"Tshirt",price:800},{pid:301,pname:"Jeans",price:1500},{pid:302,pname:"Hoodies",price:2000}]
}

$(function(){
    $("#btn1").on("click",function(){
        let prodCategory= $("#product").val();
        let products = allProducts[prodCategory];
        products.forEach(prod=>$("#list").append("<li>"+prod.pname+"</li><li><img src="+Image+" height=100 width=100></li>"))
    });
});