/*===contact form==========================*/

function validform(){
    const nameform = document.getElementById("name");
    const mail = document.getElementById("email");
    const msg = document.getElementById("msg");
    const errordiv = document.getElementById("formerror");

   let messages = []
    var regx = /^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i

    if( regx.test(mail.value) && nameform.value.length > 0 &&  msg.value.length > 0){
        /* redirect to this page when form submit */
        window.location = "thank-you.html";
    }
    else{
        if(nameform.value.length == 0){
            messages += "*Please Enter The Name <br>"
        }
        if(msg.value.length == 0){
            messages += "*Please Enter Some Message <br>"
        }
        if(!regx.test(mail.value)){
            messages +="*Please Enter Valid Email"
        }
    }
    errordiv.innerHTML = messages
}