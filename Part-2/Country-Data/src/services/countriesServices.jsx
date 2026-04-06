import axios from "axios"

const getAll = async baseURL => {
    const { data } = await axios.get(baseURL)
    return data
}

export default { getAll }