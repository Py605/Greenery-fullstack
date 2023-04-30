import axios from "axios";

const BASE_URL = 'https://perenual.com/api/species-list?key=sk-f5sW6421322fbae39352';


export const fetchapi = async (url) =>{
     const {data} = await axios.get(`${BASE_URL}&${url}`)
     return data
}

