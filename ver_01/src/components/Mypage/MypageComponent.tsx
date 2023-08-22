import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ContentComponent from "./ContentComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { useQueries } from "@tanstack/react-query";
import { baseURL, APITokenInHeader } from "../../global/global";
import { getQueryString } from "../../global/globalfuntion";
import { getFavouriteJob } from "../../api/JobApi";
import { JobTestType } from "../../types/JobTestType";

const Box = styled.div`
    width: 100%;
    background: #ffffff;
    padding: 30px;
`;

const Title = styled.div`
    width: 100%;
    text-align: center;
    position: relative;
    h1 {
        color: black;
        font-size: 20px;
        a {
            color: black;
            font-size: 20px;
        }
    }
    p {
        position: absolute;
        right: 0;
        top: 0;
    }
`;

const Body = styled.div`

`;

type MypageComponentProps = {
    title: string,
    link: string
}
const MypageComponent: React.FC<MypageComponentProps> = ({ title, link }) => {
    const userId: number | null = useSelector(
        (state: RootState) => state.auth.CurrentUser?.user.id
    );
    const jwt = useSelector((state: RootState) => state.auth.CurrentUser?.jwt);
    const [show, setShow] = useState<boolean>(true);
    const [query, setQuery] = useState<string>('');
    const [favoriteJobQuery,setFavoriteJobQuery] = useState<string>('');
    const arrJobView: Array<string> = JSON.parse(String(sessionStorage.getItem('jobView')));
    const getArrJob = async () => {
        const arr = await getFavouriteJob(userId as number, jwt as string);
        getQueryString(arr).then((result) => {
            setFavoriteJobQuery(String(result));
        }).catch(err => {
            console.log(err);
        });
    }
    useEffect(() => {
        getQueryString(arrJobView).then((result) => {
            setQuery(String(result));
        }).catch(err => {
            console.log(err);
        });
        getArrJob()
    }, [arrJobView])
    const newData = useQueries({
        queries: [
            {queryKey: ['favorite-job', favoriteJobQuery], 
            queryFn: () => fetch(`${baseURL}/api/job-tests?${favoriteJobQuery}&populate=company&pagination[page]=${favoriteJobQuery ? 1 : 10*10000}`,
                APITokenInHeader).then(res => res.json()),
            keepPreviousData: true,
            },
            {queryKey: ["viewd-job", query], queryFn: () =>
            fetch(
                `${baseURL}/api/job-tests?${query}&populate=company`,
                APITokenInHeader
            ).then((res) => res.json()),
            keepPreviousData: true,
        }
        ]
    })
    if (newData[0].isLoading || newData[1].isLoading) {
        return (
            <>
                <p>
                    Loading...
                </p>
            </>
        );
    }
    if (newData[0].error || newData[1].error) return "An error has occurred: ";
    const getLinkPage = (value: string) => {
        if (value == '/history') {
            return title
        } else {
            return <Link to={link}>{title}</Link>
        }
    }
    const changeComponent = (type: string) => {
        const nullArr: Array<JobTestType> = [];
        if (type == "/favourite-job") {
            return <ContentComponent data={newData[0].data.data} type={type} />
        } else if (type == "/history") {
            return <ContentComponent data={arrJobView.length> 0 ? newData[1].data.data : nullArr} />
        } else {
            return "";
        }
    }
    return (
        <Box>
            <Title onClick={() => setShow(!show)}>
                <h1>{getLinkPage(link)}</h1>
                <p>{show ? "-" : "+"}</p>
            </Title>
            <Body>
                {show && changeComponent(link)}
            </Body>
        </Box>
    )
}

export default MypageComponent