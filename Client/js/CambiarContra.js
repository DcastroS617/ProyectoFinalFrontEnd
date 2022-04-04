


async function NuevaContra() {

    const url = "https://proyectofinalsw.azurewebsites.net/api/"
    let Id = localStorage.getItem("editID")
    let Username = localStorage.getItem("editUser")

    const npasswordDOM = document.getElementById("npassword")
    const password2DOM = document.getElementById("password2")

    let Email = localStorage.getItem("editEmail")
    let Role = localStorage.getItem("editRole")


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
    console.log(password2DOM)
    npasswordDOM.addEventListener("change", (e) => {
        localStorage.setItem("contrasena1", e.target.value)
        const contrasena1local = localStorage.getItem("contrasena1")
        console.log(contrasena1local)
    })
    password2DOM.addEventListener("change", (e) => {
        localStorage.setItem("contrasena2", e.target.value)
        const contrasena2local = localStorage.getItem("contrasena2")
        console.log(contrasena2local)
    })
}


function main(){
 
    contrasenaOnchageEvento()
}

main()