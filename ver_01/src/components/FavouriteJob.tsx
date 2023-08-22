import styled from "styled-components"
import { Recuit_Tag } from '../pages/Search'
import { Icon } from '@iconify/react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/Store'
import { deleteJob } from "../api/JobApi"
import { JobTestType } from "../types/JobTestType"
import { Link } from "react-router-dom"
import { useMutation, useQueryClient } from '@tanstack/react-query';

const FavouriteJobBox = styled.div`
    padding: 20px 20px;
    background: white;
    height: 550px;
    .new {
        font-size: 10px;
		line-height: 1;
		margin-right: 5px;
		display: block;
		color: #fff;
		padding: 4px 6px;
		background: #ff1b00;
		border: 1px solid #ff1b00;
    }
`;
const Header = styled.div`
    display:flex;
    position: relative;
    .delete {
        position: absolute;
        right : -10px;
        top: -10px;
        cursor: pointer;
    }
`;

export const Recuit_Company = styled.div`
    display:flex;
    font-size: 12px;
    font-weight: bold;
    margin: 10px 20px 0 0;
`;

export const Recuit_Title = styled.div`
    font-size: 15px;
    font-weight: bold;
    line-height: 1.4;
    margin: 0 10px;
    a {
        color: #000;
        text-decoration: none;
        &:hover {
            text-decoration: underline
        }
    }
    .mypage_job_title {
        font-size: 12px;
    }
`;

const Body = styled.div`
    height: 40%;
`;

const Information = styled.div`
    display:flex;
    font-weight:bold;
    font-size: 11px;
    gap: 35px;
    margin: 15px 0;
    .moneyAndSkill {
        display:flex;
        flex-direction: column;
        span {
            margin : 10px 0 0 10px;
        }
    }
`;

const Bottom = styled.ul`
    display: flex;
    margin-top: 40px;
    @media screen and (max-width: 1300px) {
        display: block;
    }
`;

const Button_View = styled.div`
    display:flex;
    width: 150px;
    height: 50px;
    a {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 12px;
        border: 1px solid black;
        border-radius: 4px;
        position: relative;
        margin: 0 15px;
        color: black;
        &:hover {
            background: black;
            color: white;
        }
    }
`;

const Button_Recuit = styled.div`
    display:flex;
    width: 200px;
    height: 50px;
    a {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        font-size: 12px;
        background : #f86608;
        border-radius: 4px;
        position: relative;
        padding : 18px 20px;
        margin: 0 15px;
        color : #fff;
        &:hover {
            opacity: 0.7;
        }
    }
`;

const BoxHeader = styled.div`
    height: 32%;
    border-bottom: 1px solid lightgray;
`;
type FavouriteJobPropType = {
    job: JobTestType,
    query?: string,
    updateData: any
}
type snapshotOfPreviousJobs = {
    data: [JobTestType],
    meta: any
}
const FavouriteJob = (props: FavouriteJobPropType) => {
    const userId: number | null = useSelector((state: RootState) => state.auth.CurrentUser?.user.id);
    const jwt = useSelector((state: RootState) => state.auth.CurrentUser?.jwt);
    const queryClient = useQueryClient();
    const fetchFavoriteJob = async (id: number) => {
        await deleteJob(userId as number, jwt as string, id);
    }
    const { mutate } = useMutation({
        mutationFn: fetchFavoriteJob,
        onMutate: async () => {
            await queryClient.cancelQueries({ queryKey: ['favorite-job', props.query] })
            const snapshotOfPreviousJobs: snapshotOfPreviousJobs| undefined = queryClient.getQueryData(['favorite-job', props.query]);
            const newData = snapshotOfPreviousJobs?.data?.filter(job => job.id !== props.job.id);
            const updatedObject = { ...snapshotOfPreviousJobs, data: newData };
            queryClient.setQueryData(['favorite-job', props.query], updatedObject);
            return {
                snapshotOfPreviousJobs
            }
        },
        onError: () => {
            queryClient.invalidateQueries(['favorite-job', props.query])
        }
    })
    const handleDeleteCheck = () => {
        if (jwt && userId) {
            mutate(props.job.id)
        }
    }
    return (
        <FavouriteJobBox>
            <BoxHeader>
                <Header>
                    <Recuit_Tag>
                        <li className="new">NEW</li>
                        <li>正社員</li>
                        <li>完全週休2日制</li>
                    </Recuit_Tag>
                    <div className="delete" onClick={handleDeleteCheck}>
                        <Icon icon="lucide:x" height={20} width={20} />
                    </div>
                </Header>
                <Recuit_Company>
                    <p>{props.job.attributes.company.data.attributes.name}</p>
                </Recuit_Company>
                <Recuit_Title>
                    <a href="">{props.job.attributes.introduction}</a>
                </Recuit_Title>
            </BoxHeader>
            <Body>
                <Information>
                    <p>勤務地</p>
                    <span>{props.job.attributes.location}</span>
                </Information>
                <Information>
                    <p>給与</p>
                    <div className="moneyAndSkill">
                        <span>{props.job.attributes.salary_min}万円～{props.job.attributes.salary_max}万円</span>
                        <span className="skill">{props.job.attributes.must}</span>
                    </div>
                </Information>
            </Body>
            <Bottom>
                <li><Button_View><Link to={`/details?id=${props.job?.id}`}><span>詳細を見る</span></Link></Button_View></li>
                <li><Button_Recuit><Link to={`/apply?id=${props.job?.id}`}><span>この求人に応募する</span></Link></Button_Recuit></li>
            </Bottom>
        </FavouriteJobBox>
    )
}

export default FavouriteJob