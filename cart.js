
const product= [
   {
       id: 0,
       image: 
       "https://imgs.search.brave.com/9UIcVk0yGaeWDqppJbNJmGs4du6qcXDoBSRkTrzrbY4/rs:fit:864:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5k/b2ZpUzFsYkRidk03/ZUZMXzlBTVFBSGFF/RSZwaWQ9QXBp",
       title: 'Hundai',
       price: 1200000,
   },
   {
       id: 1,
       image: "https://imgs.search.brave.com/ktxmz7BZUrRxjo4y8ib4_pCEaLJ0uciE-Cl_JwpSscQ/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/clR1VEZlX1NaX2U5/eTNRVTdLNFZnSGFF/SyZwaWQ9QXBp" ,
       title: 'Mahindra',
       price: 6000000,
   },
   {
       id: 2,
       image:"https://imgs.search.brave.com/Wt8Es3yiibNtY70JIFAHe4-IxgXfsi5xQiV9UMW8PvE/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/X0ZXTm1PaVl6RmVP/RVB1cGQtZ1l3SGFF/byZwaWQ9QXBp" ,
       title: 'Benz',
       price: 4000000,
   },
   {
       id: 3,
       image:"https://imgs.search.brave.com/nuHoSY78zON5P6Yt2y-BLN8VtC0VcGP3-LTfFLQpU-Q/rs:fit:751:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/MjZ6M0NrUmY1LWRV/Szd6YnRYWmdBSGFF/ciZwaWQ9QXBp" ,
       title: 'TATA',
       price: 3000000,
   }
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
   var {image, title, price} = item;
   return(
       `<div class='box'>
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'> 
       <p>${title}</p>
       <h2>${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       "<button id='a'onclick='removePopup("+(i)+")'>Remove from cart</button>"+
    // "<button id='a'onclick='document.getElementById('id01').style.display='block''>Remove from cart</button>"+
       `</div>
       </div>`
   )
}).join('')
 var productIndex
function removePopup(index){
    // alert("hi")
     productIndex=index
    document.getElementById('id01').style.display='block'
}
function removeProduct(){
// alert(productIndex)          
console.log( product[productIndex-1].title)
 // let text="Are u sure u want to delete the item from cart"
    for(i=0; i<cart.length; i++)
        { 
         if(cart[i].title== product[productIndex-1].title){
            cart.splice(i,1)
             displaycart();
                return( document.getElementById('id01').style.display = "none")
                     }
         else{ 
            cart=display()
             }
        }
        // document.getElementById('id01').style.display = "none"
        
}
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
   }
   }
var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart()  
}

// function delElement(a){
//     // console.log(a)
//    cart.splice(a, 1);
//    displaycart();
// }
function delElement(a){
    let text="Are u sure u want to delete the item from cart"
    if(cart&&confirm(text)==true){
        cart.splice(a, 1); 
        displaycart();
    }
    else{
        cart=display()
    }

}

// function Remove(b){
//     console.log( product[b-1].title)
//     let text="Are u sure u want to delete the item from cart"
//     for(i=0; i<cart.length; i++)
//     { if(cart[i].title== product[b-1].title&&confirm(text)==true){
//        cart.splice(i,1)
//        displaycart();
//        return;
//     }
//     else{ 
//         cart=display()
//    }
//    }  
// }



     


function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = ""+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = ""+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }

   
}


// const cartProducts = [
//     { id: 0, name: "Hundai", price: 1200000 },
//     { id: 1, name: "Mahindra", price: 6000000 },
//     { id: 2, name: "Benz", price: 4000000 },
//     { id: 3, name: "TATA", price: 3000000 }
//   ];s
//   function search(){
//     const searchInput = document.getElementById("searchInput").value;
//     console.log(searchInput)
  
//   }

//   const searchInput = document.getElementById("search-input");
  
  
//     const searchInput = document.getElementById("searchInput");
//     console.log(searchInput)
  
  const filteredProductsDiv = document.getElementById("filtered-products");
  
  function search(e){
    const searchInput = document.getElementById("searchInput").value;
    console.log(searchInput)
    //  searchInput.addEventListener("click", e => {
       
    const searchTerm = searchInput.toUpperCase();
    const filteredProducts = product.filter(product =>
      product.title.toUpperCase().includes(searchTerm)
    );
    const categories = [...new Set(filteredProducts.map((item)=>
        {return item}))]
        let i=0;
     document.getElementById('root').innerHTML = categories.map((item)=>
     {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
     }).join('')
     
//     filteredProductsDiv.innerHTML = "";
//     filteredProducts.forEach(product => {
//       const productDiv = document.createElement("div");
//       productDiv.textContent = `${product.name} - $${product.price}`;
//       filteredProductsDiv.appendChild(productDiv);
//     });
// //   });
//   console.log(filteredProductsDiv )
  }

  