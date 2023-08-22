import { useLocation} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import { Recuit_Tag } from "./Search";
import { JobTestType } from "../types/JobTestType";
import { Link } from "react-router-dom";
import { useEffect} from "react";
import { baseAPI,APITokenInHeader } from "../global/global";
import { ButtonFavourite } from "../components/ButtonStyled";

const DetailMain = styled.div`
    background: #f4f5f6;
`;
const DetailBox = styled.section`
    font-weight: bold;
    width: 65%;
    background: #fff;
    margin: 50px auto;
    padding: 40px 30px;
`;

const DetailBoxTop = styled.div`
    .details_status {
        margin-bottom: 20px;
        display: flex;
        flex-wrap: nowrap;
        li {
            display: block;
            background: #ff1b00;
            border: 1px solid #ff1b00;
            color: #fff;
            padding: 4px 6px;
            font-size: 10px;
            margin-right: 5px;
        }
    }
    .details_company {
        font-size: 15px;
        margin-bottom: 10px;
    }
    .details_title {
        font-size: 20px;
        margin-bottom: 15px;
    }
    .details_information {
        display: flex;
		flex-wrap: nowrap;
		margin-bottom: 30px;
        li {
			font-size: 12px;
			max-width: 550px;
            span {
                margin-left: 10px;
            }
        }
        .area {
            margin-left: 10px;
        }
    }
`;

const DetailText = styled.div`
    margin: 20px 0 30px;
    padding-top: 20px;
    border-top: 1px solid #e1e6ea;
    font-size: 12px;
`;

const DetailBtnBox = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    li {
        width: 305px;
        font-size: 15px;
        margin: 0 30px 0 0;
        span {
            font-weight: 500;
        }
        #orange {
            background: #f86608;
            border: 1px solid #f86608;
            span {
                color: #fff;
            }
        }
    }
`;

const Button = styled.div`
    text-align: center;
    background: #fff;
    border-radius: 4px;
    position: relative;
    max-width: 300px;
    margin: 0 auto;
    font-weight: 500;
    a, p {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        border-radius: 4px;
        height: 50px;
        cursor: pointer;
    }
`;
const Details = () => {
    const { search } = useLocation();
    const jobId = search.slice(4);
    useEffect(() => {
        const arr = sessionStorage.getItem('jobView');
        if (arr && !arr.includes(jobId)) {
            const arrJobView = JSON.parse(arr);
            arrJobView.push(jobId);
            sessionStorage.setItem('jobView', JSON.stringify(arrJobView));
        }
    }, [jobId])
    const { isLoading, error, data } = useQuery({
        queryKey: ['details'],
        queryFn: () =>
            fetch(
                `${baseAPI}/job-tests/${jobId}?populate=company`,
                APITokenInHeader
            ).then(
                (res) => res.json(),
            ),
    })
    if (isLoading) {
        return (
            <>
                <p>Loading...<Icon icon="line-md:loading-twotone-loop" /></p>
            </>
        )
    }

    if (error) return 'An error has occurred: '

    const JobData : JobTestType = data.data
    return (
        <DetailMain>
            <Breadcrumbs job={JobData} />
            <DetailBox>
                <DetailBoxTop>
                    <ul className='details_status'>
                        <li className='new'>NEW</li>
                    </ul>
                    <p className="details_company">{JobData.attributes.company.data.attributes.name}</p>
                    <h1 className="details_title">{JobData.attributes.introduction}</h1>
                    <ul className='details_information'>
                        <li className='money'><span><Icon icon="majesticons:yen-circle" width={16} height={15} /> 想定給与</span><span>{JobData.attributes.salary_min}万円～{JobData.attributes.salary_max}万円</span></li>
                        <li className='area'><span><Icon icon="icon-park-solid:local-two" width={16} height={15} /></span><span>{JobData.attributes.location}</span></li>
                    </ul>
                </DetailBoxTop>
                <Recuit_Tag>
                    <li>正社員</li>
                    <li>完全週休2日制</li>
                </Recuit_Tag>
                <DetailText>
                    <p className="txt">【累計4.4億円の資金調達】フルリモート／フルフレックス制あり</p>
                </DetailText>
                <DetailBtnBox>
                    <li>
                        <ButtonFavourite id={JobData.id}><span>お気に入りに追加</span></ButtonFavourite>
                    </li>
                    <li><Button id="orange"><Link to={`/apply?id=${JobData.id}`}><span>この求人に応募する</span></Link></Button></li>
                </DetailBtnBox>
            </DetailBox>
        </DetailMain>
    )
}

export default Details
