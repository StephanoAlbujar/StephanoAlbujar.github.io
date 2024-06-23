

//Esto solo se ejcuta una vez
//setTimeout()

setTimeout(mostrarDatos,1000);
function mostrarDatos(){
    let date = new Date();
    console.log("Hora Actual : " + date.toLocaleTimeString());
    console.log("Ejemplo");
    
}
//Esto se ejcuta de manera ilimitada
//setInterval()

setInterval(mostrarImg,1000);

function mostrarImg(){
    let date = new Date();
    console.log("Hora Actual : " + date.toLocaleTimeString());
    console.log("Ejemplo 02");


}
