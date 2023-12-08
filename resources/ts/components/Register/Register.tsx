import Layout from '../Layout/LayoutMain'
import Login from '../Register/Login'
import Singup from '../Register/SingUp'
import { useParams } from 'react-router-dom'

export default function Register() {
    const { modeRegister } = useParams();
    if (modeRegister ===  "Log_in") {
       return (
        <Layout>
            <Login />
        </Layout>
       ) 
    } else if (modeRegister === "Sign_up") {
       return (
        <Layout>
            <Singup />
        </Layout>
       ) 
    }
}
