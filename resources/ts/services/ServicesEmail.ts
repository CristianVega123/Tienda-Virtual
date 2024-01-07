import axios from "axios"

const url_server = import.meta.env.VITE_APP_URL

/**
 * 
 * @param email_url Dos opciones de url para bien generar la clave de verificación o verificar la email con la clave
 * @returns bool
 */
export const services_email = async (email_url: "api/generated_validation" | "verify_email") => {
    return axios.post(`${url_server}`)
}