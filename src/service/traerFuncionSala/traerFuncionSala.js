import axios from "axios"

const URL_BACK = 'http://localhost:3000'



export const traerFuncion = async (idPelicula) => {
    
    const endpoits = {
        funciones : `${URL_BACK}/funciones?idPelicula=${idPelicula}`, 
    }

    try {
        const {data} = await axios.get(endpoits.funciones)
        return data
        
    } catch (error) {
        return []
    }
}



export const traerSala = async (idFuncion, teatro) => {

    const endpoits = {
        teatros : `${URL_BACK}/teatros?name=${teatro}`, 
    }
    try {
        const {data} = await axios.get(endpoits.teatros)
        data[0].salas.forEach(element => {
            if(idFuncion === element.idFuncion){
                const idSala = element.numberRoom
                localStorage.setItem("idSala", idSala)
            }
        });
        
    } catch (error) {

    }
}