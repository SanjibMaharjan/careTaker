if (window.matchMedia('(max-width: 640px)').matches) { 
    const navbar = document.getElementById('navbar');
    const navDrop = document.getElementById('navbar_drop');

    navDrop.addEventListener('click', () => {
        if(navbar.style.display != 'block') {
            navbar.style.display = 'block';
            navDrop.innerHTML = 'x';
        } else {
            navbar.style.display = 'none';
            navDrop.innerHTML = '&#9776';
        }
    })
} 

function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
  
    error_message.style.padding = "10px";
  
    var text;
    if(name.length < 2){
      text = "UserName must have more than 2 characters";
      error_message.innerHTML = text;
      return false;
    }

    if(subject.length < 4){
      text = "Subject must have more than 4 characters";
      error_message.innerHTML = text;
      return false;
    }

    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }

    if(message.length <= 6){
      text = "Please Enter More Than 6 Characters";
      error_message.innerHTML = text;
      return false;
    }
    
    alert("Form Submitted Successfully! We will respond you. Thank You!!");
    return true;
  }