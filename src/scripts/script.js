function valor(){
    var check = document.getElementById("checkboxvalor2").checked;
    var valor = 30;

    if(check == true){
        document.getElementById("valorfinal").innerText = `R$:${valor},00`;
    }

    if(check == false){
        document.getElementById("valorfinal").innerText = `R$:00,00`;
    }
}
