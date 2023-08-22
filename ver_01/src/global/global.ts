export const baseURL = import.meta.env.VITE_LINKSTAFF_URL;
export const baseAPI = `${baseURL}/api`;

const APIToken = import.meta.env.VITE_API_TOKEN;

export const APITokenInHeader = {
    headers: {
        Authorization: `Bearer ${APIToken}`,
    },
}