import { useLocation, Navigate } from 'react-router-dom';
import { Container, Box } from './ResetPassword';
import { BoxHeader,InputField,RegisterButton,BoxBottom } from "./Login";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserResetPasswordConfirm } from '../api/UserApi';

const ResetPasswordConfirm = () => {
    const [password, setPassword] = useState<string>();
    const [passwordConfirm,setPasswordConfirm] = useState<string>();
    const navigate = useNavigate()
    const location = useLocation();
    const codeParams = location.search
    const code = codeParams.slice(6);
    if(!code) {
        return <Navigate to="/login"/>
    }
    const handleChangePassword = () => {
        if (password && passwordConfirm && code) {
            if (password.length < 6 && passwordConfirm.length < 6) {
                window.alert("パスワード又はパスワード確認を6文字以上を入力してください!");
            }else if(password !== passwordConfirm) {
                window.alert("パスワードが一致しません!");
            } else {
                const dataObject = {
                    code: code,
                    password: password,
                    passwordConfirmation: passwordConfirm
                }
                UserResetPasswordConfirm(navigate, dataObject)
            }
        } else {
            window.alert("まだ入力していない項目があります!");
        }
    }
    return (
        <Container>
            <Box>
                <BoxHeader>
                    <h2>新しいパスワードを入力してください。</h2>
                </BoxHeader>
                <InputField>
                    <strong>新しいパスワード</strong>
                    <input type="text" value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                </InputField>
                <InputField>
                    <strong>新しいパスワード確認</strong>
                    <input type="text" value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}/>
                </InputField>
                <BoxBottom>
                    <RegisterButton onClick={handleChangePassword}><h3>確認</h3></RegisterButton>
                </BoxBottom>
            </Box>
        </Container>
    )
}

export default ResetPasswordConfirm