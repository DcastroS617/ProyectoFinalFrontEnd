const uri = "https://proyectofinalsw.azurewebsites.net/api/"

const GetVuelo = async () => {
    let {data} = await axios.get(uri + "vuelo")
    let returnList = []
    data.forEach(vuelo => {
        returnList.push(vuelo)
    })
    return returnList
}

const GetAerolinea = async () => {
    let { data } = await axios.get(uri + "aerolinea")
    let returnList = []
    data.forEach(aerolinea => {
        returnList.push(aerolinea)
    })
    return returnList
}

const GetDestino = async () => {
    let { data } = await axios.get(uri + "origen")
    let returnList = []
    data.forEach(destino => {
        returnList.push(destino)
    })
    return returnList
}

const GetPuerta = async () => {
    let { data } = await axios.get(uri + "puertaaeropuerto")
    let returnList = []
    data.forEach(puerta => {
        returnList.push(puerta)
    })
    return returnList
}