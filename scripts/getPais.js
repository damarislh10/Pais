import { urlPais } from "./url.js"

export const getPais = async() => {
    const response = await fetch (urlPais)
    const data = await response.json()
    return data
}

