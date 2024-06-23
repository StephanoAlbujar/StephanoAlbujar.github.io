

/*
let img=document.getElementById("imgf");
//Obtener el atributo src
console.log(img.getAttribute("src"));
//Obtener el atributo width
console.log(img.getAttribute("width"));
//Modificar la propiedad ancho
img.setAttribute("width","300px");
//Modificar la propiedad altura
img.setAttribute("height","300px");
*/
let btnMin = document.getElementById("btnMin");
let btnMax = document.getElementById("btnMax");
let btnOtro = document.getElementById("btnOtro");
let  imgprueba = document.getElementById("imgf/apagado.jpg")

let alturaInicial=100;
let anchoIncial= 100;
let a_o_r_dim = 30;

btnMin.addEventListener("click", function(){
    let ancho = imgprueba.getAttribute("Width")
    let altura = imgprueba.getAttribute("height");
    
    let anchoSinPX=ancho.replace("px","");
    let alturaSinPX= altura.replace("px","");
    console.log("Ancho : " + ancho);
    console.log("Altura : " + altura);
    console.log("anchoSinPX : " + anchoSinPX);
    console.log("alturaSinPX : " + alturaSinPx);

    imgPrueba.setAttribute("width",
        fn_formatMediaPx(parseInt(anchoSinPx)+parseInt(a_o_r_dim)));
    imgPrueba.setAttribute("height",
        fn_formatMediaPx(parseInt(alturaSinPx)+parseInt(a_o_r_dim)));
});

function fn_formatMediaPx

btnOtro.addEventListener("click", fn_dimension_incial);

function fn_dimension_incial(){

    imgPrueba.setAttribute("width",fn_formatMediaPx(anchoInicialIncial));
    imgPrueba.setAttribute("height",fn_formatMediaPx(alturaIncial));
}

function fn_formatMediaPx(dimension)
