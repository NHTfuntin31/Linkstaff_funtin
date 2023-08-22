import styled from "styled-components"
import { BoxHeader,InputField,RegisterButton,BoxBottom } from "./Login";
import { UserResetPassword } from "../api/UserApi";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'

export const Container = styled.div`
    height: 79vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f4f5f6;
    font-weight: bold;
`;

export const Box = styled.div`
    padding: 60px 120px;
    background: #fff;
`;

const ResetPassword = () => {
    const [email, setEmail] = useState<string>();
    const navigate = useNavigate();
    const handleReserPassword = () => {
        if (email) {
            UserResetPassword(navigate,email)
        } else {
            window.alert("メールアドレスを入力してください。")
        }
    }
    return (
        <Container>
            <Box>
                <BoxHeader><h2>メールアドレスを入力してください。</h2></BoxHeader>
                <InputField>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </InputField>
                <BoxBottom>
                    <RegisterButton onClick={handleReserPassword}><h3>次へ</h3></RegisterButton>
                </BoxBottom>
            </Box>
        </Container>
    )
}

export default ResetPassword