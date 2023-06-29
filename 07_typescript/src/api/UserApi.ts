import axios from 'axios';
import {userLoginStart,userLoginSuccess,userLoginError, userLogoutSuccess} from '../redux/slice/AuthSlice'

const UserLogin = (identifier: string, password: string, navigate: any, dispatch: any) => {
    dispatch(userLoginStart());
    axios.post('https://lusty.asia:1443/api/auth/local', {identifier, password}).then(res => {
        const userJSON: string = JSON.stringify(res.data.user);
        localStorage.setItem('user', userJSON);
        localStorage.setItem('jwt', res.data.jwt);
        dispatch(userLoginSuccess(res.data.user))
        navigate("/member")
    }).catch(error => {
        console.log('An error occurred:', error);
        window.alert("wrong UserName or Password");
        dispatch(userLoginError())
    });
}

const UserLogout = (navigate: any, dispatch:any) => {
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        dispatch(userLogoutSuccess());
        navigate("/login");
}

export {UserLogin, UserLogout}
