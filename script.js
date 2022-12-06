var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName()
{
    let name=document.getElementById("contact-name").value;
    let nm=null
     nm = name.trim()
    var spc=/^[!@#$%^&()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]$/;
    document.getElementById("contact-name").value = nm;
    if(nm==""||name==null)
    {
        document.getElementById("lbname").style.display="block"
        return false;
    }
    else if(!isNaN(nm[0]))
    {
        document.getElementById("lbname").style.display="none"
        document.getElementById("lbname-01").style.display="block"
        return false;
    }
    else if(nm.match(spc))
    {
        document.getElementById("lbname").style.display="none" 
        document.getElementById("lbname-01").style.display="none"  
        document.getElementById("lbname-02").style.display="block"
        return false;
    }
    else{
        document.getElementById("lbname").style.display="none" 
        document.getElementById("lbname-01").style.display="none" 
        document.getElementById("lbname-02").style.display="none"
        return true;

    }
}




    /*
    var name = document.getElementById('contact-name').value;
    if(name.length ==0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="bx bx-check-circle"></i>';
    return true;
*/

function validateEmail(){

    var val=document.getElementById("contact-email").value;
    var v=null
     v = val.trim()
    document.getElementById("contact-email").value = v;
    if(v==""||val==null)
    {
        document.getElementById("lbemail").style.display="block"
        return false
    }
    else if(!isNaN(v[0]))
    {
        document.getElementById("lbemail-01").style.display="block"
        return false
    }


    else if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(v))
  {
    document.getElementById("lbemail-02").style.display="block"
    return false
  }
   
  else{
        document.getElementById("lbemail").style.display="none" 
        document.getElementById("lbemail-01").style.display="none"
        document.getElementById("lbemail-02").style.display="none" 
        return true

    }

    /*

    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML = 'Email invalid'
        return false;
    }
    emailError.innerHTML = '<i class="bx bx-check-circle"></i>';
    return true; */
}

function validateSubject(){

    var val=document.getElementById("contact-subject").value;
    var v=null
     v = val.trim()
    document.getElementById("contact-subject").value = v;
    var n=v.length
    console.log(n)
    if(v==""||val==null)
    {
        document.getElementById("lbsub").style.display="block"
        return false
    }
    else{
        
        return true

    }


    /*
    var subject = document.getElementById('contact-subject').value;
    var required = 15;
    var left = required - subject.length;
    if(left>0){
        subjectError.innerHTML = left + 'more characters required';
        return false;
    }
    subjectError.innerHTML = '<i class="bx bx-check-circle"></i>';
    return true;
*/
}

function validateMessage(){


    var val=document.getElementById("contact-message").value;
    var v=null
     v = val.trim()
    document.getElementById("contact-message").value = v;
    var n=v.length
    console.log(n)
    if(v==""||val==null)
    {
        document.getElementById("lbmes").style.display="block"
        return false
    }
    else{
        
        return true

    }

    /*
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;
    if(left>0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="bx bx-check-circle"></i>';
    return true;
*/
}