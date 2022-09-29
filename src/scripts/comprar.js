function comprarArgentina(){
    let buscar = document.querySelector("#preview");
    let classificar = buscar.classList;
    document.getElementById("checkboxvalor2").checked = false;
    document.getElementById("valorfinal").innerText = `R$:00,00`;
    console.log(classificar);
    classificar.remove("espanha", "mexico", "franca")
    classificar.add("argentina");    
    document.getElementById("destino").innerText = `Destino: Argentina`
}

function comprarMexico(){
    let buscar = document.querySelector("#preview");
    let classificar = buscar.classList;
    document.getElementById("checkboxvalor2").checked = false;
    document.getElementById("valorfinal").innerText = `R$:00,00`;
    classificar.remove("espanha", "argentina", "franca")
    classificar.add("mexico");
    document.getElementById("destino").innerText = `Destino: México`
}

function comprarEspanha(){
    let buscar = document.querySelector("#preview");
    let classificar = buscar.classList;
    document.getElementById("checkboxvalor2").checked = false;
    document.getElementById("valorfinal").innerText = `R$:00,00`;
    classificar.remove("argentina", "mexico", "franca")
    classificar.add("espanha");
    document.getElementById("destino").innerText = `Destino: Espanha`
}

function comprarFranca(){
    let buscar = document.querySelector("#preview");
    let classificar = buscar.classList;
    document.getElementById("checkboxvalor2").checked = false;
    document.getElementById("valorfinal").innerText = `R$:00,00`;
    classificar.remove("espanha", "mexico", "argentina")
    classificar.add("franca");
    document.getElementById("destino").innerText = `Destino: França`
}