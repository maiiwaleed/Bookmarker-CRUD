
// var phone;
// var regEx=/^(002)?(01)[0-25][0-9]{8}$/;

// do{
//     phone=prompt("enter your number")
    
// } while(!regEx.test(phone))


//=========================================


// var productsArr=[];

// //=========================================================================
// //==========used in update
// //===================================A===================================

// var currentProduct=[];

// var currentLoc;
// var flag=0;

// //===============================================================================

// if(JSON.parse(localStorage.getItem("savedProd"))!=null){
//     productsArr=JSON.parse(localStorage.getItem("savedProd"));
//     displayRow();
// }


// function addProduct(){

//         var pName= pNameInput.value;
//         var pPrice= pPriceInput.value;
//         var pCat= pCatInput.value;
//         var pDesc= pDescInput.value;

//         var product={
//             name: pName,
//             price: pPrice,
//             cat: pCat,
//             desc: pDesc,
    
//         };

//         var i= currentLoc;


//     if(document.getElementById('mainBtn').innerHTML=="update product"){
    
//         productsArr[i].name =pNameInput.value ;
//         productsArr[i].price= pPriceInput.value ;
//         productsArr[i].cat =pCatInput.value ;
//         productsArr[i].desc =pDescInput.value ;

//         displayRow();

//         //afterUpdate();
//         // flag=1;
//         // if (flag==1){
//         //     document.getElementById('mainBtn').innerHTML="Add Product";
//         //     clear();
//         //  }

//         //console.log(document.getElementById('mainBtn').innerHTML)
        
//         //document.getElementById('mainBtn').innerHTML="Add Product";
//         //console.log(document.getElementById('mainBtn').innerHTML)
        
//     }
//     else if(document.getElementById('mainBtn').innerHTML=="Add Product"){

//         productsArr.push(product);
//         localStorage.setItem("savedProd",JSON.stringify(productsArr));

//         clear();
//         displayRow();

//     }
    
//     else{
       
//        console.log("mb b7aga mn dool")
       
//     }

   

// }

// function clear(){
//     pNameInput.value='';
//     pPriceInput.value='';
//     pCatInput.value='';
//     pDescInput.value='';
// }



// function displayRow(){

//     var hasala='';

//     for(var i=0;i<productsArr.length;i++){

        
//         currentProduct.push(productsArr[i]);
        
//         currentProduct[i]["index"]=i;


//         hasala+= `<tr> 
//             <td>${productsArr[i].name}</td>
//             <td>${productsArr[i].price}</td>
//             <td>${productsArr[i].cat}</td>
//             <td>${productsArr[i].desc}</td>
//             <td ><button class="btn btn-outline-warning"  onclick="updateProduct(${i})" >Update</button></td>
//             <td ><button class="btn btn-outline-danger" onclick="delProduct(${i})" >Delete</button></td>
//         </tr>`;     
//     }

 
// this.

//     document.getElementById('tableEntry').innerHTML=hasala;

// }

// function delProduct(index){
  
//     productsArr.splice(index,1);
//     localStorage.setItem("savedProd",JSON.stringify(productsArr));

//     displayRow();
// }


// function updateProduct(   index ){

//     // when we press update 
//     // 1-all the fields of the row entry will fill the input fields 
//     // 2-the 'add products' wil change to 'update'
//     // 3-when we correct the fields and press 'update' we wil access addProduct() function and access the condition of the update to update a certain row entry at certain index
//     // 4-innerHtml will change back to add products

//     document.getElementById('mainBtn').innerHTML="update product";
    
//     pNameInput.value= productsArr[index].name;
//     pPriceInput.value=productsArr[index].price;
//     pCatInput.value=productsArr[index].cat;
//     pDescInput.value=productsArr[index].desc;

//      currentLoc=currentProduct[index].index;
 
//      addProduct();
//      console.log("mb b7aga mn dool")


//      //afterUpdate();
     

// }

// function afterUpdate(){
//      //document.getElementById('mainBtn').innerHTML="Add Product";
//      //clear();
// }





// function search(keyWord){

//     var hasala='';
//     //productsArr.name.indexOf(keyWord)
//     for( var i=0;i<productsArr.length;i++){
//     if(productsArr[i].name.toLowerCase().includes(keyWord.toLowerCase())){
//             hasala+= 
//                 `<tr> 
//                 <td>${productsArr[i].name}</td>
//                 <td>${productsArr[i].price}</td>
//                 <td>${productsArr[i].cat}</td>
//                 <td>${productsArr[i].desc}</td>
//                 <td ><button onclick="updateProduct(${i})" class="btn btn-outline-warning"   >Update</button></td>
//                 <td ><button class="btn btn-outline-danger" onclick="delProduct(${i})" >Delete</button></td>
//             </tr>`;    
//          }        
//     }

//     document.getElementById('tableEntry').innerHTML=hasala;

// }


// // ====================================================


// var tag_=document.getElementsByTagName("h1")
// var singleQuery= document.querySelector(".parent .child .h1")
// document.querySelectorAll(".parent .child .h1")

// singleQuery.addEventListener("click" , func)

// function func{
//     console.log("hiii")
// }