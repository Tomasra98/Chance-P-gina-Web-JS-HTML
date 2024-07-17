function generarNumero () {
    const Aletorio = parseInt(Math.random() * 900) +100;
    let numeroGenerado = document.getElementById("numerosGenerados")
    numeroGenerado.innerHTML = "El número ganador es el " + Aletorio;
    console.log("el número aletorio es:",Aletorio )
    return Aletorio;
}

function comparacion () {
    const Aletorio = generarNumero ();
    let numeroIngresado = document.getElementById("numeroIngresado").value
    let apuesta = document.getElementById("apuesta").value;
    console.log(numeroIngresado)


    if (Aletorio == numeroIngresado){
        let Obtenido = apuesta * 500
        document.getElementById("resultado").innerHTML = "Felicidades, has ganado una cantidad de: " + Obtenido;
    } else {document.getElementById("resultado1").innerHTML  = "Lo sentimos, has perdido la cantidad de: " + apuesta;

    }
    
}  



function compararIndices() {
    const Aleatorio = generarNumero ();
    const numeroIngresado = document.getElementById("numeroIngresado")
    const aletorioString = Aleatorio.toString();
    const ingresadoString = numeroIngresado.toString();

    if(aletorioString !== ingresadoString){
        console.log("Los números no tienen los mismos  dígitos");
        return; 
    }
    const aletorioArray = aletorioString.split("").sort();
    const ingresadoArray = ingresadoString.split("").sort("");
    
    if(aletorioArray.join("") === ingresadoArray.join("")){
        console.log("Los números contienen los mismos dígitos")
    }else{
        console.log("Los números no contienen los mismos dígitos")
    }
    
}





function llamado() {
    comparacion ();
    compararIndices ();   
}