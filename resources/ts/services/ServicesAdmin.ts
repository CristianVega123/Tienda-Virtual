import axios from "axios";

let url_server = import.meta.env.VITE_APP_URL;
let apiURL = "\\api\\admin\\store_products"


export const store_admin = async (form: FormData) => {

    let data = await axios.post(`${url_server}${apiURL}`, form)
    console.log(data);
    
    
}