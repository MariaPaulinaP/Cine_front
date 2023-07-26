import axios from "axios"

const URL_BACK = 'http://localhost:3000/teatros'

export const traerBack = async () => {
    try {
        const {data} = await axios.get(URL_BACK)
        return data
        
    } catch (error) {
        return []
    }

}