var div1 = document.getElementById("div1")
var para = document.getElementById("para")


function postingValue(){
    var val = document.getElementById("textArea1").value;
  
if (val !== "") {
       document.getElementById("textArea1").value = "";
       
       document.getElementById("para").innerHTML+=(val)
       
   para.style.color = "#000"
   para.style.marginLeft = 30 + "px"
   para.style.fontFamily = "my-font"
   para.style.fontSize = 20 + "px"
   para.style.marginTop = 10 + "px"
    div1.style.display = "block";


    

}   
    

  
else{
    var post = document.getElementById("error")
    post.innerHTML = "!Please enter a valid post"
    post.style.color = "red"
    post.style.textAlign = "center"
 
}

setTimeout(function postingValue(){
    var post = document.getElementById("error").innerHTML = ""
    
},2000)
}







function likeIn() {
    var icon = document.getElementById("icon");
    icon.style.color = "blue";
}
function deletePost() {
    event.target.parentNode.parentNode.parentNode.remove();
}
function onShare(){
    var click = document.getElementById("appear")
   click.style.display = "block"
   click.style.display = "flex"
   
}