import axios, { AxiosResponse } from 'axios';
import {
    userLoginStart,
    userLoginSuccess,
    userLoginError,
    userLogoutSuccess,
    userRegisterStart,
    userRegisterFailed,
    userRememberLogin
}
    from '../redux/slice/AuthSlice';
import { RegisterType } from '../types/RegisterType';
import { baseAPI } from "../global/global";

const UserLogin = (identifier: string, password: string, isRemember: boolean, navigate: any, dispatch: any, modalCheck?: boolean, showModal?:any,handleCheckLoginSuccess?:any) => {
    if (identifier && password) {
        dispatch(userLoginStart());
        axios.post(`${baseAPI}/auth/local`, { identifier, password }).then(res => {
            const jwt = res.data.jwt;
            const user = res.data.user;
            const CurrentUser = { jwt, user };
            if (res.data.user.confirmed) {
                dispatch(userLoginSuccess(CurrentUser))
                dispatch(userRememberLogin(isRemember))
                if(!modalCheck){
                    navigate("/member")
                }
                if (handleCheckLoginSuccess) {
                    handleCheckLoginSuccess(user.id, jwt)
                }
                if (showModal) {
                    showModal(false);
                    sessionStorage.removeItem('gomi_id')
                }
            } else {
                window.alert("Wrong UserName or Password");
            }
        }).catch(error => {
            if (error.response?.data.error.message) {
                window.alert("Wrong UserName or Password");
            } else {
                window.alert(error.message);
            }
            dispatch(userLoginError())
        });
    } else {
        window.alert("メールアドレス(ユーザーネーム)又はパスワードを入力してください。");
    }
}

const UserLogout = (navigate: any, dispatch: any) => {
    dispatch(userLogoutSuccess());
    navigate("/login");
}

const UserRegister = (navigate: any, dispatch: any, registedData: RegisterType) => {
    dispatch(userRegisterStart());
    axios.post(`${baseAPI}/auth/local/register`, registedData).then(res => {
        if(res) {
            navigate("/email-sended")
        }
    }
    ).catch(error => {
        if (error.response?.data.error.status == 400) {
            window.alert(error.response.data.error.message)
        }
        dispatch(userRegisterFailed())
    });
}

const UserResetPassword = (navigate: any, email: string) => {
    const emailObject = {
        email: email
    }
    axios.post(`${baseAPI}/auth/forgot-password`, emailObject).then(
        navigate("/email-sended")
    ).catch(err => {
        if (err.response.data.error.status == 400) {
            window.alert(err.response.data.error.message)
        }
    })
}

const UserResetPasswordConfirm = (navigate: any, data: any) => {
    axios.post(`${baseAPI}/auth/reset-password`, data).then(
        navigate("/success")
    ).catch(err => {
        if (err.response?.data.error.status == 400) {
            window.alert(err.response.data.error.message)
        }
    })
}

export { UserLogin, UserLogout, UserRegister, UserResetPassword, UserResetPasswordConfirm }
