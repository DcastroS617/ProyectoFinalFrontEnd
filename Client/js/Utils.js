const uri = "https://proyectofinalsw.azurewebsites.net/api/"

const GetUser = async () => {
    let {data} = await axios.get(uri + "user")
    let returnList = []
    data.forEach(user => {
        returnList.push(user)
    })
    return returnList
}  