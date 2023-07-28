import axios from "axios"

const URL_BACK = 'http://localhost:3000'

const endpoits = {
    teatros : `${URL_BACK}/teatros`, 
    funciones : `${URL_BACK}/funciones`, 
}

export const traerTeatros = async () => {
    try {
        const {data} = await axios.get(endpoits.teatros)
        return data
        
    } catch (error) {
        return []
    }
}

export const traerFunciones = async () => {
    try {
        const {data} = await axios.get(endpoits.funciones)
        return data
        
    } catch (error) {
        return []
    }
}