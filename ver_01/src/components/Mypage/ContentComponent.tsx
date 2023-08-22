import { JobTestType } from "../../types/JobTestType"
import styled from "styled-components"
import JobComponent from "./JobComponent"

const Bottom = styled.div`
    text-align: center;
    margin-top: 30px;
    font-size: 12px;
    font-weight: bold;
`;

const Body = styled.div`
    overflow-x: auto;
    height: 500px;
    margin-top: 50px;
`;

const Content = styled.ul`
    display: flex;
`;
type ContentComponentProps = {
    data : Array<JobTestType>,
    type?: string
}

const ContentComponent : React.FC<ContentComponentProps> = ({data, type}) => {
    return (
        <>
            {data.length > 0 ?
            <Body>
                <Content style={{width : `${data.length * 270}px`}}>
                    {data?.map((item: JobTestType, index:number) => {
                        return (
                            <li key={index}><JobComponent job={item} type={type}/></li>
                        )
                    })}
                </Content>
            </Body>
            :<Bottom>現在求人はございません。</Bottom>}
        </>
    )
}

export default ContentComponent