import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux/es/exports"
import { UserLogout } from '../api/UserApi'
import styled from 'styled-components'

const MyPageContainer = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height: 82vh;
    background: #f4f5f6;
`;
const MyPageInformation = styled.div`
    width: 30%;
    margin: 0 auto;
    background: #fff;
    padding: 30px 30px;
`;
const Field = styled.div`
    font-size:15px;
    margin: 10px 0;
`;

const Information = styled.span`
    margin-left: 20px;
`;

const LogoutButton = styled.button`
    float:right;
    padding: 11px 15px;
    border: none;
    border-radius: 4px;
    background: purple;
    color: white;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const Mypage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        UserLogout(navigate, dispatch)
    }
    const userJSON: string | null = localStorage.getItem('user');
    if (userJSON) {
        const currentUser = JSON.parse(userJSON);
        return (
            <MyPageContainer>
                <MyPageInformation>
                    <Field>
                        <strong>Name:</strong>
                        <Information>{currentUser.username}</Information>
                    </Field>
                    <Field>
                        <strong>Email:</strong>
                        <Information>{currentUser.email}</Information>
                    </Field>
                    <Field>
                        <strong>Hitokoto:</strong>
                        <Information>{currentUser.hitokoto}</Information>
                    </Field>
                    <Field>
                        <strong>Description:</strong>
                        <Information>{currentUser.description}</Information>
                    </Field>
                    <Field>
                        <strong>Fee:</strong>
                        <Information>{currentUser.fee}</Information>
                    </Field>
                    <LogoutButton onClick={() => handleLogout()}>Logout</LogoutButton>
                </MyPageInformation>
            </MyPageContainer>
        )
    }
}
