$(".fa-bars").click(function(){
    $("ul").slideToggle();
})



function validation(){

let name= document.getElementById("my-name").value;
let email= document.getElementById("my-email").value;
let number= document.getElementById("my-number").value;


if(name == ""){
    document.getElementById("one").innerHTML="!Please fill the name";
    return false;
}

if(email == ""){
    document.getElementById("two").innerHTML="!Please fill your email";
    return false;
}

if(number == ""){
    document.getElementById("three").innerHTML="!Please fill the contact number";
    return false;
}

else{
    document.write("Your message is send")
}



}