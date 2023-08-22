import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/Store'
import FavouriteJob from '../components/FavouriteJob'
import styled from "styled-components"
import { Navigate } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import { useQuery} from '@tanstack/react-query'
import { getFavouriteJob } from '../api/JobApi'
import { getQueryString } from '../global/globalfuntion'
import { useState, useEffect } from "react";
import { APITokenInHeader, baseURL } from '../global/global'
import { JobTestType } from '../types/JobTestType'
import { useDispatch } from 'react-redux'
import { getStateArrJob } from "../redux/slice/JobArrSlice";

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    background: #f4f5f6;
`;

export const Header = styled.div`
    width:100%;
    margin: 30px auto;
`;

const Body = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    width: 100%;
    margin: 20px auto;
`;
export const Main = styled.div`
    width: 1000px;
    margin: 0 auto;
    @media (max-width: 900px) {
        width: 95%
    }
`;

const FavouriteJobsPage = () => {
    const jwt = useSelector((state: RootState) => state.auth.CurrentUser?.jwt);
    const userId = useSelector((state: RootState) => state.auth.CurrentUser?.user.id);
    const [favoriteJobQuery, setFavoriteJobQuery] = useState<string>('');
    const getArrJob = async () => {
        const arr = await getFavouriteJob(userId as number, jwt as string);
        getQueryString(arr).then((result) => {
            setFavoriteJobQuery(String(result));
        }).catch(err => {
            console.log(err);
        });
    }
    const favoriteJob = useQuery({
        queryKey: ['favorite-job', favoriteJobQuery],
        queryFn: () => fetch(`${baseURL}/api/job-tests?${favoriteJobQuery}&populate=company&pagination[page]=${favoriteJobQuery ? 1 : 10*10000}`,
            APITokenInHeader).then(res => res.json()),
        keepPreviousData: true
    })
    useEffect(() => {
        getArrJob();
    }, [])

    if(favoriteJob.isLoading) return <p>...loading</p>

    if(favoriteJob.error) return <p>error</p>

    if (!jwt) {
        return <Navigate to="/login" />;
    }
    const updateData = (data:number) => {
        if (data) {
            console.log(data);
            favoriteJob.refetch();
        }
        
    }
    return (
        <Container>
            <Breadcrumbs></Breadcrumbs>
            <Main>
                <Header>
                    <h2>お気に入り</h2>
                </Header>
                <Body>
                    {favoriteJob.data?.data?.map((item:JobTestType, index:number) => {
                        return (
                            <FavouriteJob key={index} job={item} query={favoriteJobQuery} updateData={updateData}/>
                        )
                    })}
                </Body>
            </Main>
        </Container>
    )
}

export default FavouriteJobsPage