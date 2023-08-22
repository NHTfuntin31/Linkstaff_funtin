import { Link } from "react-router-dom"
import { Container } from "./ResetPassword"
import { RegisterButton } from "./Login"


const Success = () => {
    return (
        <Container>
            <h2 style={{marginBottom: '20px'}}>パスワードを変更しました。</h2>
            <Link to="/login"><RegisterButton><h3>ログインページへ</h3></RegisterButton></Link>
        </Container>
    )
}

export default Success