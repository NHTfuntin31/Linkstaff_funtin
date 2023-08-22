export interface UserType {
    CurrentUser: {
        jwt: string | null,
        user: {
            id: number | null,
            username: string | null,
            email: string | null,
            provider: string | null,
            confirmed: boolean,
            blocked: boolean,
            createdAt: string | null,
            updatedAt: string | null,
            hitokoto: string | null,
            avatar_id: number | null,
            description: string | null,
            fee: string | null,
            notificationSound: boolean,
            lang_code: string | null,
            lang_main: string | null,
            role_linkstaff: string | null,
            avatar_url: string | null
        }
    }
    isFetching: boolean,
    isError: boolean,
    isRemember: boolean
}