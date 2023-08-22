import axios from "axios";
import { JobTestType } from "../types/JobTestType";
import { baseAPI} from "../global/global";

const getFavouriteJob = async (userId: number, jwt: string) => {
    const arr: Array<number|string> = [];
    try {
        const res = await axios.get(`${baseAPI}/users/${userId}?populate=job_tests`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        const jobs = res.data.job_tests;
        if (jobs) {
            jobs.map((item: JobTestType) => {
                arr.push(item.id)
            })
        }
        return arr
    } catch (err) {
        console.log(err);
        return arr
    }
}

const upadateJob = async (useId: number, jwt: string, id: number) => {
    const data = {
        job_tests: {
            connect: [id]
        }
    };
    try {
        await axios.put(`${baseAPI}/users/${useId}?populate=job_tests`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
    } catch (err) {
        throw new Error();
    }
}

const deleteJob = async (useId: number, jwt: string, id: number) => {
    const data = {
        job_tests: {
            disconnect: [id]
        }
    };
    try {
        await axios.put(`${baseAPI}/users/${useId}?populate=job_tests`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            }
        })
    } catch (err) {
        throw new Error();
    }
}

export { getFavouriteJob, upadateJob,  deleteJob}
