let ListaAerolineas = []

const GetAerolineas = async () => {

    $(".tableaerolinea tbody").empty()
    ListaAerolineas = []

    const aerolineas = await GetAerolinea()
    aerolineas.forEach((aerolinea, index) => {
      let fila = `
      <tr>
        <td>${aerolinea.Id}</td>
        <td>${aerolinea.Nombre}</td>
        <td>${aerolinea.Logo}</td>
        <td><button class="btn btn-outline-dark" onclick="MostrarEditarAerolinea(${index})">Editar</button></td>
        <td><button class="btn btn-outline-dark" onclick="EliminarAerolinea(${index})">Eliminar</button></td>
      </tr>`  
      $(".tableaerolinea > tbody").append(fila)
      ListaAerolineas.push(aerolinea)
    })
}

const MostrarAgregarAerolinea = () => {
   /* $('.wholetable').attr('hidden', true)
    $('.addAerolinea').removeAttr('hidden')*/
    $('.wholetable').slideUp()
    $('.addAerolinea').removeAttr('hidden')
}

const AgregarAerolinea = async () => {
    const NombreAerolineaDOM = document.querySelector('.addNombre > label ~ input[type="text"]')
    const LogoAerolineaDOM = document.querySelector('.addLogo > label ~ input[type="text"]')

    const newAerolinea = {
        Id: "",
        Nombre: NombreAerolineaDOM.value,
        Logo: LogoAerolineaDOM.value
    }

    const {data} = await axios.post(uri + '/aerolinea', newAerolinea, {
        "Accept":"application/json",
        "Content-type": "application/json"
    })
    await GetAerolineas()
    CerrarAgregarAerolinea()
    console.log(data)
}

const CerrarAgregarAerolinea = () => {
    $('.wholetable').slideDown()
    $('.addAerolinea').attr('hidden', true)
    $('.addNombre > label ~ input[type="text"]').val('')
    $('.addLogo > label ~ input[type="text"]').val('')
}

const MostrarEditarAerolinea = (id) => {
    $('.wholetable').slideUp()
    $('.editAerolinea').removeAttr('hidden')

    const aerolinea = ListaAerolineas[id]
    localStorage.setItem('EditAerolineaId', aerolinea.Id)

    $('.editNombre > label ~ input[type="text"]').val(aerolinea.Nombre)
    $('.editLogo > label ~ input[type="text"]').val(aerolinea.Logo)
}

const EditarAerolinea = async () => {
    const NombreAerolineaDOM = document.querySelector('.editNombre > label ~ input[type="text"]')
    const LogoAerolineaDOM = document.querySelector('.editLogo > label ~ input[type="text"]')
    const AerolineaIdLocal = localStorage.getItem('EditAerolineaId')

    const editAerolinea = {
        Id: AerolineaIdLocal,
        Nombre: NombreAerolineaDOM.value,
        Logo: LogoAerolineaDOM.value
    }

    const {data} = await axios.put(uri + 'aerolinea/' + AerolineaIdLocal, editAerolinea, {
        "Accept":"application/json",
        "Content-type": "application/json"
    })
    await GetAerolineas()
    CerrarEditarAerolinea()
    console.log(data)
}

const CerrarEditarAerolinea = () => {
    $('.wholetable').slideDown()
    $('.editAerolinea').attr('hidden', true)
}

const EliminarAerolinea = async (id) => {
    const aerolinea = ListaAerolineas[id]
    const {data} = await axios.delete(uri + 'aerolinea/' + aerolinea.Id)

    await GetAerolineas()
    console.log(data)
}

const main = async () => {
    await GetAerolineas()
}
main()