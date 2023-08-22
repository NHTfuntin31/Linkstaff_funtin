import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { UserRegister } from '../api/UserApi'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RegisterType } from '../types/RegisterType';
import { InputField, LinkButton, BoxHeader, Box } from './Login';
import { ButtonLogin, MediumButton } from '../components/ButtonStyled';
import { useTranslation } from 'react-i18next';

const RegisterContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width :100%;
    height: 82vh;
    font-size: 15px;
    background: #f4f5f6;
    .errMess {
        position: absolute;
        font-size: 15px;
        font-weight: bold;
        color: red;
        top: 10%;
    }
`;
const BoxBody = styled.div``;
const BoxBottom = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    gap: 20px;
`;

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState<string>("");

    const handldeSubmit = () => {
        if (email && password) {
            if (password.length < 6) {
                setErrMessage("パスワードは6文字以上を入力してください!");
            } else {
                let random = '';
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                for (let i = 0; i < 15; i++) {
                    const randomIndex = Math.floor(Math.random() * characters.length);
                    random += characters.charAt(randomIndex);
                }
                const registedData: RegisterType = {
                    username: random,
                    email: email,
                    provider: "local",
                    password: password
                }
                UserRegister(navigate, dispatch, registedData)
            }
        } else {
            setErrMessage("メールアドレス、ユーザーネーム又はパスワードを入力してください。");
        }
    }
    return (
        <RegisterContainer>
            {errMessage && <p className='errMess'>{errMessage}</p>}
            <Box>
                <BoxHeader>
                    <h2>{t('register.kaiin_touroku')}</h2>
                </BoxHeader>
                <BoxBody>
                    <InputField>
                        <strong>{t('login.email')}</strong>
                        <input type="text" value={email} placeholder="Enter Email..."
                            onChange={(e) => setEmail(e.target.value)} />
                    </InputField>
                    <InputField>
                        <strong>{t('login.password')}</strong>
                        <input type="text" value={password} placeholder="Enter Password..."
                            onChange={(e) => setPassword(e.target.value)} />
                    </InputField>
                </BoxBody>
                <BoxBottom>
                    <MediumButton onClick={() => handldeSubmit()}>
                        <ButtonLogin>
                            <span>{t('register.touroku_suru')}</span>
                        </ButtonLogin>
                    </MediumButton>
                    <LinkButton>
                        <span><Link to="/login">{t('register.login')}</Link></span>
                    </LinkButton>
                </BoxBottom>
            </Box>
        </RegisterContainer>
    )
}

export default Register