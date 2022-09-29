function display() {
    var x = document.getElementById("cesta");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function redirect(){
  check = document.getElementById("checkboxvalor2").checked;
  if(check == true){
    location.assign('login.html')
  }else{
    return;
  }
}