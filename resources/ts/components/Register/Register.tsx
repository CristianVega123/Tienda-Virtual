import Layout from '../Layout/LayoutMain'
import { useParams } from 'react-router-dom'

export default function Register() {
    const { modeRegister } = useParams();
  return (
    <Layout>
        <div>
            {
                modeRegister
            }
            Register
        </div>
    </Layout>
  )
}
