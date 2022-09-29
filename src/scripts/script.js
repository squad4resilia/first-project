function valor(){
    var buscar = document.querySelector("#preview");
    var check = document.getElementById("checkboxvalor2").checked;
    console.log(check)
    var valor = 0;
    var classificar = buscar.classList;
    if(classificar == "argentina"){
        valor = 2300;
    }
    if(classificar == "mexico"){
        valor = 3200;
    }
    if(classificar == "espanha"){
        valor = 5700;
    }if (classificar == "franca"){
        valor = 5800;
    }
    if(check == true){
        document.getElementById("valorfinal").innerText = `R$:${valor},00`;
    }
    if(check == false){
        document.getElementById("valorfinal").innerText = `R$:00,00`;
    }
}
