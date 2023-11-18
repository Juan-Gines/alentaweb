import { useParams } from 'react-router-dom'
import ResetPassword from '../components/auth/ResetPassword'

const ResetPasswordPage = () => {
  const { token } = useParams()
  const newToken = token.replaceAll(' ', '.')
  return (
    <>
      <ResetPassword token={newToken} />
    </>
  )
}

export default ResetPasswordPage
