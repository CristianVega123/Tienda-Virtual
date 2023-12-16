import Layout from '../Layout/LayoutMain'
import { useStateUser } from '../../store/StateGlobalShop'

export default function Tienda() {
  const { user_email, user_id, user_isValid, user_name, user_role,user_surname} = useStateUser();

  return (
    <Layout>
      <div>
        <span>{user_id}</span>
        <span>{user_name}</span>
        <span>{user_surname}</span>
        <span>{user_email}</span>
        <span>{user_isValid}</span>
        <span>{user_role}</span>
      </div>
    </Layout>
  )
}
