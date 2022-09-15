// color change
function changeBG(color){
  document.body.style.backgroundColor = color;
  let txt = document.getElementsByClassName("text");
  let txt1 = document.getElementsByClassName("text1");
  let menu = document.getElementById("menu-bar");
  let form1 = document.getElementsByClassName("same");
  let imgBox = document.getElementsByClassName("light");
  //ImgBox Start
  if (color == "#fbfbf2"){
    for(let box of imgBox){
      box.style.background = "#202020";
    };
  }
  else if(color == "#008080"){
    for(let box of imgBox){
      box.style.background = '#71f57c';
    }
  }
  else if(color == "#191970"){
    for(let box of imgBox){
      box.style.background = "#F80000";
    };
  }
  else if(color == "#171717"){
    for(let box of imgBox){
      box.style.background = "#F5F5DC";
    };
  }
  else{
    for(let box of imgBox){
      box.style.background = "#202020";
    }; 
  };
  
  //ImgBox Start

  //form color change start
  if (color == "#fbfbf2"){
    for(let form of form1){
      form.style.background = "#202020";
    };
  }
  else if(color == "#008080"){
    for(let form of form1){
      form.style.background = "#DDA0DD";
    };
  }
  else if(color == "#191970"){
    for(let form of form1){
      form.style.background = "#92ff95";
    };
  }
  else if(color == "#171717"){
    for(let form of form1){
      form.style.background = "#FFF9E3";
    };
  }
 else{
  for(let form of form1){
    form.style.background = "#FFF9E3";
  };
 }
  
  //nav bar start
  if(color == '#fbfbf2'){
    menu.style.background = "#202020";
     }
  else if(color == '#008080'){
    menu.style.background = "#71f57c";
  }
  else if(color == '#191970'){
    menu.style.background = "#F80000 ";
  }
  else if(color == '#171717'){
    menu.style.background = "#F5F5DC";
  }
  else{
    menu.style.background = "#FFC0CB";
  };
  // Nav bar End

  //top start
  if (color == "#171717"){
    for(let elm of txt){
      elm.style.color = "#fff";
    };
  }
  else if (color == "#008080"){
    for(let elm of txt){
      elm.style.color = "#fff";
    };
  }
 else if (color == "#191970"){
    for(let elm of txt){
      elm.style.color = "#fff";
    };
  }
  else{
    for(let elm of txt){
        elm.style.color = "#111";
      };
  }
  if (color == '#fbfbf2'){
    for( elmn of txt1){
      elmn.style.color = "#fff";
    }
  }
  else{
    for(elmn of txt1){
      elmn.style.color = "#111";
    }
  }
};

// Sticky Menu
window.addEventListener('scroll' , function(){
  let navbar = document.getElementById("menu-bar");
  navbar.classList.add('sticky');
     if(window.pageYOffset >= 303){
     }
     else{
       navbar.classList.remove('sticky');
     }
   });

   // Form Validation Start
   let username = document.getElementById("username");
   let password  = document.getElementById("password");
   let flag = 1;
function validateFrom(){
if(username.value == ""){
 document.getElementById("userError").innerHTML = "User Name is empty";
 flag = 0;
}else if(username.value.length < 3){
 document.getElementById("userError").innerHTML = "Username require min 3 char";
 flag = 0;
}else{
 document.getElementById("userError").innerHTML = "";
flag = 1;
}
if(password.value == ""){
 document.getElementById("passError").innerHTML = "Password is empty";
 flag = 0;
}
else{
 document.getElementById("passError").innerHTML = "";
}
if (flag){
return true;
}
else{
return false;
}
}

// Images slider
let flag2 = 0;

function controller(x){
    flag2 = flag2 + x;
    slideshow(flag2);
}

slideshow(flag2);

function slideshow(num){
  let slides = document.getElementsByClassName("slide");

if(num == slides.length){
flag2 = 0;
num = 0;
}
if(num < 0){
  flag2 = slides.length - 1;
  num = slides.length - 1;
}

  for (let y of slides){
   y.style.display = "none";
  };
  slides[num].style.display = "block";
}

