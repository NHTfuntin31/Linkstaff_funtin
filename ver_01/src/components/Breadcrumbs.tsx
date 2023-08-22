import { useLocation, NavLink } from "react-router-dom"
import styled from "styled-components";
import { DISPLAY_LG} from "./../../src/GlobalStyle"
import { useTranslation } from "react-i18next";
import { JobTestType } from "../types/JobTestType";
        
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 10px;
    font-weight: bold;
    padding: 11px 0;
    border-bottom: 1px solid #e1e6ea;

`;
const Crumbs = styled.div`
    display:flex;
    margin-left: 30px;
    width: 100%;
    max-width: ${DISPLAY_LG};
    @media (max-width: ${DISPLAY_LG}){
        margin-left: 20px;
    }

   
    a {
        color: black;
        transition: color 0.4s ease;
        &:hover {
            color: #26a24c;
        }
    }
    @media (max-width: 599px) {
        width:95%;
        margin-left:30px;
              
    }
`;

const Crumb = styled.div`
    &::before {
        content: ">";
        margin: 0 7px;
    }
    `;
type BreadCrumbProps = {
    job?: JobTestType
}
const Breadcrumbs = (props : BreadCrumbProps) => {
    const { t } = useTranslation();
    const location = useLocation();
    let currentLink = '';
    const getLinkText = (link: string) => {
        if(link == 'agree') {
            return '利用規約';
        } else if (link == 'Inquiry') {
            return 'お問い合わせ';
        } else if (link == 'shinkitoroku') {
            return '情報登録画面'
        } else if (link == 'Basic') {
            return 'Basic'
        } else if (link == 'Educa') {
            return 'EducationWork'
        } else if (link == 'favourite-job') {
            return 'お気に入り'
        } else if (link == 'member') {
            return 'マイページ'
        } else if (link == 'privacy') {
            return '個人情報保護方針'
        } else if (link == 'information') {
            return t("common.kojin_johono_toriatsukaini_tsuite")
        } else if (link == 'experienced') {
            return t("common.chyouto_saiyo")
        } else if (link == 'jobSeekers') {
            return t("common.otoiawase")
        } else if (link == 'information') {
            return t("common.sonota")
        } else if (link =='details') {
            return '求人一覧'
        } else if (link == 'information') {
            return '個人情報の取り扱いについて'
        } else if (link == 'accessibility') {
            return '推奨環境'
        } else {
            return link
        }
    }
    const crumbsArr = location.pathname.split('/')
    .filter(crumb => crumb !== '');
    if (props.job) {
        const linkText = props.job.attributes.introduction + ' /' + props.job.attributes.company.data.attributes.name;
        crumbsArr.push(linkText)
    }
    const lastCrumb = crumbsArr[crumbsArr.length -1];

    const crumbs = crumbsArr.map(crumb  => {
        if(crumb == 'details') {
            currentLink += "/search";
        } else {
            currentLink += `/${crumb}`;
        }
        return (
            <Crumb key={crumb}>
                {
                    crumb == lastCrumb ? 
                    getLinkText(crumb) 
                    :<NavLink to={currentLink}>{getLinkText(crumb)}</NavLink>
                }
            </Crumb>
        );
    })
    return (
        <Container>
            <Crumbs>
                <NavLink to="/">TOP</NavLink>
                {crumbs}
            </Crumbs>
        </Container>
    )
}

export default Breadcrumbs