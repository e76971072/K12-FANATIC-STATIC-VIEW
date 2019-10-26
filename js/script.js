
$(document).ready(function() {
    //$('.Highschool').click(HighschoolFunction); 
    $('.name-jersey').arctext({radius:135});
}); 


function HighschoolFunction (){
    var arrayImg = ["cedar_park.png"
                    ,"glen.png"
                    ,"lion.png"
                    ,"rouse.png"
                    ,"vipers.png"
                    ,"vista-ridge.png"];
    $.each (arrayImg, function (index, value){
        
    })
}

function displayShippingContainer (){
   var toggleName = document.getElementById("shipping-01");
   if ( toggleName.style.display === "none"){
    toggleName.style.display = "block"; 
   }
   else{
       toggleName.style.display = "none"; 
   }
  

}
function displayShippingContainer2 (){
    var toggleName = document.getElementById("gender");
    if ( toggleName.style.display === "none"){
     toggleName.style.display = "block"; 
    }
    else{
        toggleName.style.display = "none"; 
    }
   
 
 }