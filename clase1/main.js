function changeColor(newColor) {
    var elem = document.getElementById('texto');//Tomo el id 'texto'

    elem.style.color = newColor;//ejecuto el cambio de color que reciba por el parametro 'newColor'
 
}

function cambiarLabel() {
    console.log("llego aqui");
    document.querySelector('#label1').innerHTML="Otro texto nuevo";  //ID
    document.querySelector('.parrafotexto').style.color = 'red'; //class
}

document.addEventListener("DOMContentLoaded", () => {
    alert('')
});



