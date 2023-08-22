import Button from "./Button";
import { ButtonType } from "../types/ButtonType";
import styled from "styled-components";
import { getFavouriteJob, upadateJob, deleteJob } from "../api/JobApi";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/Store";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import LoginModal from "./Modal/LoginModal";
import { useDispatch } from "react-redux";
import { getStateArrJob } from "../redux/slice/JobArrSlice";

export const SmallButton = styled.div`
    width: 84px;
    height: 36px;
    font-size: 1.2rem;
`;

export const JiyuButton = styled.div`
    margin: 0px 5px;
    font-size: 1.2rem;
    span {
        padding: 4px;
    }
`;

export const MediumButton = styled.div`
    width: 286px;
    height: 50px;
    font-size: 1.5rem;
`;

export const LargeButton = styled.div`
    width: 320px;
    height: 60px;
    font-size: 1.5rem;
`;

const loginBtn: ButtonType = {
    styledButton: {
        color: "white",
        background: "black",
        fontWeight: "bold",
        border: "1px solid",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        margin: "0 auto",
        hoverColor: "black",
        hoverBackground: "white",
    },
};
const favoriteBtn: ButtonType = {
    styledButton: {
        ...loginBtn.styledButton,
        hoverColor: "white",
        hoverBackground: "black",
    },
};
const noneFavoriteBtn: ButtonType = {
    styledButton: {
        hoverColor: "black",
        hoverBackground: "white",
    },
};
const signupBtn: ButtonType = {
    styledButton: {
        color: "white",
        background: "#f86608",
        fontWeight: "bold",
        border: "1px solid #f86608",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        margin: "0 auto",
        hoverColor: "white",
        hoverBackground: "#f86608",
        hoverOpactity: "0.7",
    },
};

const searchModalBtn: ButtonType = {
    styledButton: {
        color: "white",
        background: "#26a24c",
        fontWeight: "bold",
        border: "1px solid #26a24c",
        width: "100%",
        maxWidth: "100%",
        height: "100%",
        margin: "0 auto",
        hoverColor: "white",
        hoverBackground: "#26a24c",
        hoverOpactity: "0.7",
    },
};
type PropsType = {
    children: object | string;
};

type FavouriteBtnProps = {
    children?: object | string;
    id?: number;
    withIcon?: boolean;
    setJobArr?: any;
    jobArr?: Array<string | number>;
};
const ButtonLogin = (props: PropsType) => {
    return <Button styled={loginBtn}>{props.children}</Button>;
};

const ButtonSignup = (props: PropsType) => {
    return <Button styled={signupBtn}>{props.children}</Button>;
};

const ButtonNormal = (props: PropsType) => {
    return <Button>{props.children}</Button>;
};

const ButtonSearchModal = (props: PropsType) => {
    return <Button styled={searchModalBtn}>{props.children}</Button>;
};

const ButtonFavourite = (props: FavouriteBtnProps) => {
    const userId: number | null = useSelector(
        (state: RootState) => state.auth.CurrentUser?.user.id
    );
    const jwt = useSelector((state: RootState) => state.auth.CurrentUser?.jwt);
    const [showModal, setShowModal] = useState<boolean>(false);
    const jobArr = useSelector((state: RootState) => state.job.jobArray);
    const dispatch = useDispatch();
    const fetchUpdateFavoriteJob = async (id: number) => {
        await upadateJob(userId as number, jwt as string, id);
    };
    const fetchDeleteFavoriteJob = async (id: number) => {
        await deleteJob(userId as number, jwt as string, id);
    };
    const updateMutation = useMutation({
        mutationFn: fetchUpdateFavoriteJob,
        onMutate: (id) => {
            const newArr = [...jobArr, id];
            dispatch(getStateArrJob(newArr));
        },
        onSuccess: async () => {
            getJobArrayAgain()
        },
        onError: () => {
            getJobArrayAgain()
        },
    });
    const deleteMutation = useMutation({
        mutationFn: fetchDeleteFavoriteJob,
        onMutate: (id) => {
            const newArr = jobArr.filter((item) => item !== id);
            dispatch(getStateArrJob(newArr));
        },
        onSuccess: async () => {
            getJobArrayAgain()
        },
        onError: async () => {
            getJobArrayAgain()
        },
    });
    const handleCheck = () => {
        if (!jwt) {
            setShowModal(true);
            sessionStorage.setItem("gomi_id", String(props.id));
        } else {
            if (userId) {
                updateMutation.mutate(Number(props.id));
            }
        }
    };
    const getJobArrayAgain = async () => {
        const arr = await getFavouriteJob(userId as number, jwt as string);
        dispatch(getStateArrJob(arr));
        console.log(arr);
    };
    const handleDeleteCheck = () => {
        if (jwt && userId) {
            deleteMutation.mutate(Number(props.id));
        }
    };
    const handleCheckLoginSuccess = async (userId: number, jwt: string) => {
        const JobId = sessionStorage.getItem("gomi_id");
        await upadateJob(userId as number, jwt as string, Number(JobId));
        const arr = await getFavouriteJob(userId as number, jwt as string);
        dispatch(getStateArrJob(arr));
    };
    return (
        <>
            {showModal && (
                <LoginModal
                    title="お気に入りリストへ追加するには、"
                    status={showModal}
                    showModal={setShowModal}
                    handleCheckLoginSuccess={handleCheckLoginSuccess}
                />
            )}
            {jobArr?.includes(Number(props.id)) ? (
                <Button styled={favoriteBtn} click={handleDeleteCheck}>
                    {props.withIcon && (
                        <Icon
                            icon="mdi:checkbox-outline"
                            className="fvr_checkbox"
                            rotate={2}
                            hFlip={true}
                            vFlip={true}
                            width={20}
                            height={20}
                        />
                    )}
                    {props.children}
                </Button>
            ) : (
                <Button styled={noneFavoriteBtn} click={handleCheck}>
                    {props.withIcon && (
                        <Icon
                            icon="mdi:checkbox-blank-outline"
                            className="fvr_checkbox"
                            hFlip={true}
                            vFlip={true}
                            width={20}
                            height={20}
                        />
                    )}
                    {props.children}
                </Button>
            )}
        </>
    );
};

export {
    ButtonLogin,
    ButtonSignup,
    ButtonNormal,
    ButtonSearchModal,
    ButtonFavourite,
};
