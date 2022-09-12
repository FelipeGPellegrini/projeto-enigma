
function textowhite(){
    let txt = document.getElementById("morsecode")
    txt.style.color = "white"
}

function resp1(){
    let campotxt1 = document.getElementById("iresposta1")
    if (campotxt1.value == "-... .-. .- ... .. .-.."){
        window.location.href = "/fase2.html";
    }
    else {
        Swal.fire(
            'Resposta errada',
            'Tente novamente',
            'error'
          )
    }

}

function resp2(){
    let campotxt2 = document.getElementById("iresposta2")
    if (campotxt2.value.toUpperCase() === "AGOSTO"){
        window.location.href = "/fase3.html";
    }
    else {
        Swal.fire(
            'Resposta errada',
            'Tente novamente',
            'error'
          )
    }

}

function resp3(){
    let campotxt3 = document.getElementById("iresposta3")

    if (campotxt3.value.toUpperCase() == "GUERRA FRIA"){
        window.location.href = "/fase4.html";
    }
    else {
        Swal.fire(
            'Resposta errada',
            'Tente novamente',
            'error'
          )
    }

}

function resp4(){
    let campotxt4 = document.getElementById("iresposta4")

    if (campotxt4.value.toUpperCase() == "ANIL"){
        window.location.href = "/fase5.html";
    }
    else {
        Swal.fire(
            'Resposta errada',
            'Tente novamente',
            'error'
          )
    }

}

function resp5(){
    let campotxt5 = document.getElementById("iresposta5")

    if (campotxt5.value.toUpperCase() == "TRATADO DE TORDESILHAS"){
        window.location.href = "/fim.html";
    }
    else {
        Swal.fire(
            'Resposta errada',
            'Tente novamente',
            'error'
          )
    }

}

