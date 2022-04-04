async function NuevoRoll() {
    const url = "https://proyectofinalsw.azurewebsites.net/api/"
    const passwordDOM = document.getElementById("password")
    const npasswordDOM = document.getElementById("npassword")
    const objeto = {
        password: passwordDOM.value,
        npassword: npasswordDOM.value

    }
    const { data } = await axios.push(url + "user", objeto, {
        "Content-type": "application/json",
        "Accept": "application/json"
    })
    console.log(data)
}// JavaScript source code// JavaScript source code
