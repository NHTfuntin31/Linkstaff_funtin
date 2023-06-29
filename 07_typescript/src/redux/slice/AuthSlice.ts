import { createSlice } from "@reduxjs/toolkit";
import {UserType} from '../../types/UserType';

const UserInitialState :UserType =  {
    jwt:"",
    user: {
        id: 0,
        username: "",
        email: "",
        provider: "",
        confirmed: false,
        blocked: false,
        createdAt: "",
        updatedAt: "",
        hitokoto: "",
        avatar_id: 0,
        description: "",
        fee: "",
        notificationSound: false,
        lang_code: "",
        lang_main: "",
        role_linkstaff: "",
        avatar_url: ""
    },
    isFetching: true,
    isError: false
}


const AuthSlice = createSlice({
    name :"auth",
    initialState: UserInitialState,
    reducers: {
        userLoginStart: (state) => {
            state.isFetching = true
        },
        userLoginSuccess : (state, actions) => {
            state.isFetching = false,
            state.user= actions.payload,
            state.isError = false
        },
        userLoginError : (state) => {
            state.isFetching = false,
            state.isError = true
        },
        userLogoutSuccess: (state) => {
            state.isError = false,
            state.user= UserInitialState.user
        }
    }
})

export const {
    userLoginStart,
    userLoginSuccess,
    userLoginError,
    userLogoutSuccess
} = AuthSlice.actions

export default AuthSlice.reducer