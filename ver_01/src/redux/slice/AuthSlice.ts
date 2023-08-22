import { createSlice } from "@reduxjs/toolkit";
import { UserType } from '../../types/UserType';

const UserInitialState: UserType = {
    CurrentUser: {
        jwt: "",
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
        }
    },
    isFetching: true,
    isError: false,
    isRemember: false
}


const AuthSlice = createSlice({
    name: "auth",
    initialState: UserInitialState,
    reducers: {
        userLoginStart: (state) => {
            state.isFetching = true
        },
        userLoginSuccess: (state, actions) => {
            state.isFetching = false,
            state.CurrentUser = actions.payload,
            state.isError = false
        },
        userLoginError: (state) => {
            state.isFetching = false,
            state.isError = true
        },
        userLogoutSuccess: (state) => {
            state.isError = false,
            state.CurrentUser = UserInitialState.CurrentUser
        },
        userRegisterStart: (state) => {
            state.isFetching = true
        },
        userRegisterFailed: (state) => {
            state.isFetching = false,
            state.isError = true
        },
        userRememberLogin: (state, action) => {
            state.isRemember = action.payload
        }
    }
})

export const {
    userLoginStart,
    userLoginSuccess,
    userLoginError,
    userLogoutSuccess,
    userRegisterStart,
    userRegisterFailed,
    userRememberLogin
} = AuthSlice.actions

export default AuthSlice.reducer