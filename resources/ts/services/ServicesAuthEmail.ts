import axios from "axios";
import { SetStateAction } from "react";

const url_server = import.meta.env.VITE_APP_URL;
const generateUrl = "\\api\\generated_validation";
const validtoken = "\\api\\validate_token_email";

export const generate_token_email = async (valid: boolean) => {
    return axios.post(`${url_server}${generateUrl}`, {
        accept: valid,
    });
};

export const send_token_email = async (token: number, changeAuth: React.Dispatch<SetStateAction<boolean>>) => {
    const validAuthEmail = await axios.post(`${url_server}${validtoken}`, {
        "token_valid": token
    })

    if (validAuthEmail.status === 200) {
        changeAuth(true) 
    }
};
