import { JobTestType } from "../../types/JobTestType"
import styled from "styled-components"
import { Recuit_Tag } from "../../pages/Search";
import { Recuit_Company, Recuit_Title } from "../FavouriteJob";
import { ButtonSignup, ButtonNormal } from "../ButtonStyled";
import { Link } from "react-router-dom";
import { ButtonFavourite } from "../ButtonStyled";

const Container = styled.div`
    padding: 20px 20px;
    background: white;
    height: 100%;
    width: 270px;
    font-size: 12px;
    font-weight: 700;
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
    display: block;
    padding-bottom: 20px;
    height: 150px;
    border-bottom: solid 1px lightgray;
`;

const Body = styled.div`
    width: 100%;
    height: 150px;
`;

const Information = styled.div`
    display: flex;
    margin-top: 20px;
    span {
        display: block;
        &.first_infor {
            width: 50px;
            margin-right: 20px;
        }
    }
`;

const Bottom = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`;

const ButtonSize = styled.div`
    margin: 0 auto;
    width: 170px;
    height: 40px;
`;
type JobComponentProps = {
    job: JobTestType,
    type?: string
}

const JobComponent: React.FC<JobComponentProps> = ({ job, type }) => {
    return (
        <Container>
            <Header>
                <Recuit_Tag>
                    <li className="new">NEW</li>
                    <li>正社員</li>
                    <li>完全週休2日制</li>
                </Recuit_Tag>
                <Recuit_Company>
                    <p>{job.attributes.company.data.attributes.name}</p>
                </Recuit_Company>
                <Recuit_Title>
                    <p className="mypage_job_title">{job.attributes.introduction}</p>
                </Recuit_Title>
            </Header>
            <Body>
                <Information>
                    <span className="first_infor">勤務地</span>
                    <span>{job.attributes.location}</span>
                </Information>
                <Information>
                    <span className="first_infor">給与</span>
                    <span>
                        {job.attributes.salary_min}万~{job.attributes.salary_max}万
                        <br />
                        ■経験、スキル、年齢を考慮の上、同社規定により...
                    </span>
                </Information>
            </Body>
            <Bottom>
                <ButtonSize>
                    <ButtonNormal>
                        <Link
                            to={`/details?id=${job.id}`}
                        >
                            <span>詳細を見る</span>
                        </Link>
                    </ButtonNormal>
                </ButtonSize>
                {type ?
                    <ButtonSize>
                        <ButtonSignup>
                            <Link
                                to={`/apply?id=${job.id}`}
                            >
                                <span>
                                    この求人に応募する
                                </span>
                            </Link>
                        </ButtonSignup>
                    </ButtonSize>
                    :
                    <ButtonSize>
                        <ButtonFavourite id={job.id}>
                            <span>お気に入り</span>
                        </ButtonFavourite>
                    </ButtonSize>
                }
            </Bottom>
        </Container>
    )
}

export default JobComponent