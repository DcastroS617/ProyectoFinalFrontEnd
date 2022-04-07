let ListaConsecutivos = []
let ListaCantidad = []
let ObjetoConsecutivo = {}
let Entidades = {}
let constantValues = ["PA01", "OR01", "VL01", "CM01", "RS01", "AL01"]

const GetConsecutivos = async () => {
    ListaConsecutivos = []
    Entidades = {}
    const consecutivos = await GetConsecutivo()
    consecutivos.forEach((consecutivo, index) => {
        Entidades[consecutivo.Entidad] = (index || 0) + 1
        Entidades[consecutivo.Descripcion] = consecutivo.Descripcion
        ListaConsecutivos.push(consecutivo)
    })
    console.log(ListaConsecutivos)
}

const FiltrarConsecutivos = () => {
    let obj = Object.values(Entidades)
    console.log(obj)
    for (let i = 0; i < obj.length; i++) {
        if (i % 2 === 0) {
           ObjetoConsecutivo.Cantidad = obj[i]
        } else {
           ObjetoConsecutivo.Descripcion = obj[i]
        }
    }
    console.log(ObjetoConsecutivo)
}

const MostrarConsecutivos = () => {
    $(".tableconsecutivo tbody").empty()
    let obj = Object.values(Entidades)
    obj.forEach((consecutivo, index) => {
        let fila = `
        <tr>
            <td>${index}</td>
            <td>${consecutivo.cantidad}</td>
            <td>${consecutivo.descripcion}</td>
        </tr>`
        $(".tableconsecutivo > tbody").append(fila)
    })

}

const main = async () => {
    await GetConsecutivos()
    FiltrarConsecutivos()
}

main()