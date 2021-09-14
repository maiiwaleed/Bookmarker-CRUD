
var pNameInput= document.getElementById('name');
var pSiteInput= document.getElementById('url');
var pSiteTitle= document.getElementById('urlTitle');
var submit= document.getElementById('mainBtn');
var searchBox= document.getElementById("searchBox");
var warn=document.getElementsByClassName("alert");

//searchBox.addEventListener("keyup",onSearch);

var currentLoc; //location of update row
var urls=[];  //main array of data


if(JSON.parse(localStorage.getItem("urlList"))!= null){
    urls=JSON.parse(localStorage.getItem("urlList"));
    display();
}

//================validate================================
//submit.classList.add("disabled");

function checkValid(){
    var val=pNameInput.value;
    var regEx=/^[A-Z][a-zA-Z ]+$/;
    if(!regEx.test(val)){
        warn[0].classList.remove("d-none");
        pNameInput.classList.add("is-invalid")
        pNameInput.classList.remove("is-valid")
        submit.classList.add("disabled");
    }
    else{
        warn[0].classList.add("d-none");
        pNameInput.classList.add("is-valid")
        pNameInput.classList.remove("is-invalid")
        submit.classList.remove("disabled");
    }
}

function checkValidUrl(){
    var val=pSiteInput.value;
    var regEx=/^((http|https):\/\/)(www.)?[a-zA-Z0-9@:%._\\+~#?&\/\/=]{2,256}\.[a-z]+[-a-zA-Z0-9@:%._\\+~#?&\/\/=]*$/;
    if(!regEx.test(val)){
        warn[1].classList.remove("d-none");
        pSiteInput.classList.add("is-invalid")
        pSiteInput.classList.remove("is-valid")
        submit.classList.add("disabled");
    }
    else{
        warn[1].classList.add("d-none");
        pSiteInput.classList.add("is-valid")
        pSiteInput.classList.remove("is-invalid")
        submit.classList.remove("disabled");
    }
}



pNameInput.onkeyup=function(){
    checkValid();
}

pSiteInput.onkeyup=function(){
    checkValidUrl();
}



submit.onclick=function(){
    if(submit.innerHTML=="update"){
        doUpdate(currentLoc);
    }
    else if(submit.innerHTML=="Submit"){
        addSite();
    }
}

function addSite(){
    // var lName=pNameInput.value;
    // var lUrl=pSiteInput.value;
    
    var info={
        name:pNameInput.value,
        url:pSiteInput.value,
        location:null
    };
    urls.push(info);

    localStorage.setItem("urlList",JSON.stringify(urls));
    display();
    clear();
       
}

function clear(){
    pNameInput.value='';
    pSiteInput.value='';
}

function display(){

    var trs='';
    for(var i=0; i<urls.length;i++){
       urls[i].location=i;
        
        trs+=
            `<tr>
                <td class="arrow p-0 me-1"> <button onclick="moveUp(${i})" class="btn btn-light "><i class="fas fa-arrow-up"></i></button> </td>
                <td class="arrow p-0"> <button onclick="moveDown(${i})" class="btn btn-light "><i class="fas fa-arrow-down"></i></button> </td>
                <td><h5>${i+1}</h5></td>
                <td><h5>${urls[i].name}</h5></td>
                <td> <button class="btn btn-primary"> <a class="text-white text-decoration-none m-0 p-0" href="${urls[i].url}" target="_blank">visit</a></button> </td>
                

                <td> <button onclick="updateRow(${i})" class="btn btn-warning">update</button> </td>

                <td> <button onclick="deleteRow(${i})" class="btn btn-danger">delete</button> </td>
                
            </tr> `
    }

    document.getElementById('record').innerHTML=trs;
}

function deleteRow(index){

    urls.splice(index,1)
    localStorage.setItem("urlList",JSON.stringify(urls));
    display();
    //console.log(urls);
}

function moveUp(index){
   var tempName;
   var tempUrl;
   var tempLoc;

  if( (index!=0)  &&  (urls.length!=1) ){
    //(JSON.parse(localStorage.getItem("urlList")))
        tempName=urls[index-1].name;
        tempUrl=urls[index-1].url;
        tempLoc=urls[index-1].location;

        urls[index-1].name=urls[index].name;
        urls[index-1].url=urls[index].url;
        urls[index-1].location=urls[index].location;

        urls[index].name=tempName;
        urls[index].url=tempUrl;
        urls[index].location=tempLoc;

        localStorage.setItem("urlList",JSON.stringify(urls));
        display()
    }

    else {
        alert('can not move')
    }
}

function moveDown(index){
    var tempName;
    var tempUrl;
    var tempLoc;
 
   if( (index!=urls.length-1)  &&  (urls.length!=1) ){
     //(JSON.parse(localStorage.getItem("urlList")))
         tempName=urls[index+1].name;
         tempUrl=urls[index+1].url;
         tempLoc=urls[index+1].location;
 
         urls[index+1].name=urls[index].name;
         urls[index+1].url=urls[index].url;
         urls[index+1].location=urls[index].location;
 
         urls[index].name=tempName;
         urls[index].url=tempUrl;
         urls[index].location=tempLoc;
 
         localStorage.setItem("urlList",JSON.stringify(urls));
         display()
     }
 
     else {
         alert('can not move')
     } 
}

function updateRow(index){

    pNameInput.value=urls[index].name;
    pSiteInput.value=urls[index].url;

    checkValid();
    checkValidUrl();

   // pSiteInput.classList.add("d-none");
   // pSiteTitle.classList.add("d-none");
    submit.innerHTML="update";
    submit.classList.add("btn-warning");
    currentLoc=index;
}

function doUpdate(index){
    urls[index].name=pNameInput.value;
    urls[index].url=pSiteInput.value;

    localStorage.setItem("urlList",JSON.stringify(urls));
    display();
    clear();
    
    //pSiteInput.classList.remove("d-none");
    //pSiteTitle.classList.remove("d-none");
    submit.classList.remove("btn-warning");
    submit.innerHTML="Submit";
    

}

function onSearch(keyword){
   
        var trs='';
        for(var i=0;i<urls.length;i++){
            if(  urls[i].name.toLowerCase().includes(keyword.toLowerCase())  ){
                trs+=
                `<tr>
                    <td class="arrow p-0 me-1"> <button onclick="moveUp(${i})" class="btn btn-light "><i class="fas fa-arrow-up"></i></button> </td>
                    <td class="arrow p-0"> <button onclick="moveDown(${i})" class="btn btn-light "><i class="fas fa-arrow-down"></i></button> </td>
                    <td><h5>${i+1}</h5></td>
                    <td><h5>${urls[i].name}</h5></td>
                    <td> <button class="btn btn-primary"> <a class="text-white text-decoration-none m-0 p-0" href="${urls[i].url}" target="_blank">visit</a></button> </td>
                    

                    <td> <button onclick="updateRow(${i})" class="btn btn-warning">update</button> </td>

                    <td> <button onclick="deleteRow(${i})" class="btn btn-danger">delete</button> </td>
                    
                </tr> `;
            }
        }//end of for
        document.getElementById('record').innerHTML=trs;
    
}





// /^(https:\/\/)[A-Za-z0-9\.\-,_~]$/

// ^(https:\/\/)[A-Za-z0-9\.\-\,\_\~\?\=\&\+\/\$]+$

// (https:\/\/)[[A-Za-z0-9\.][A-Za-z0-9\-]+[A-Za-z0-9\/]+[A-Za-z0-9\$]+[A-Za-z0-9\,]+[A-Za-z0-9_]+[A-Za-z0-9~]+[A-Za-z0-9\?]+[A-Za-z0-9=]+[A-Za-z0-9\&]+[A-Za-z0-9\+]+$]


//^(https:\/\/www\.)[A-Za-z]+(\.com)$

//^((http|https):\/\/)(www.)?[a-zA-Z0-9@:%._\\+~#?&\/\/=]{2,256}\.[a-z]+[-a-zA-Z0-9@:%._\\+~#?&\/\/=]*$