let ListaConsecutivos = []
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
    for(let i = 0; i < obj.length; i++){
        if(i % 2 === 0){
            console.log(obj[i])
        }   
    }
}

const main = async () => {
    await GetConsecutivos()
    FiltrarConsecutivos()
}

main()