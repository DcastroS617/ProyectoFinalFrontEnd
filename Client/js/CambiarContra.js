


async function NuevaContra() {

    const url = "https://proyectofinalsw.azurewebsites.net/api/"
    const npasswordDOM = document.getElementById("npassword")
    const password2DOM = document.getElementById("password2")
    const objeto = {
        password: passwordDOM.value,
        npassword: npasswordDOM.value
       
    }
    const { data } = await axios.put(url + "user", password2DOM, objeto, {
        "Content-type": "application/json",
        "Accept": "application/json"
    })
    console.log(data)
}// JavaScript source code

function VerificarClave() {
    const password1DOM = document.getElementById("password")
    const password2DOM = document.getElementById("password2")
    if (password1DOM.value == password2DOM.value) {
        document.getElementById("warning").innerHTML = "Contraseña Correcta"
    } else {
        document.getElementById("warning").innerHTML = "Contraseña debe ser igual a la ingresada en el campo anterior"
    }
}

function contrasenaOnchageEvento() {
    const npasswordDOM = document.querySelector("#npasswordtxt")
    const password2DOM = document.getElementById("password2txt")
    console.log(npasswordDOM)
    npasswordDOM.addEventListener("change", (e) => {
        localStorage.setItem("contrasena1", e.value)
        const contrasena1local = localStorage.getItem("contrasena1")
        console.log(contrasena1local)

    })





}
function main(){
 
    contrasenaOnchageEvento()
}

main()