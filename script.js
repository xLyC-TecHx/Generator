function generar() {

document.getElementById("serieTxt").innerText =
document.getElementById("serie").value;

document.getElementById("modeloTxt").innerText =
document.getElementById("modelo").value;

document.getElementById("turboTxt").innerText =
document.getElementById("turbo").value;

document.getElementById("coresTxt").innerText =
document.getElementById("cores").value;

document.getElementById("threadsTxt").innerText =
document.getElementById("threads").value;

document.getElementById("numeroTxt").innerText =
document.getElementById("numero").value;

}

function descargar(){

html2canvas(document.getElementById("canvas-area"))
.then(canvas=>{

let a=document.createElement("a");

a.download="lyctech.png";
a.href=canvas.toDataURL();

a.click();

});

}
