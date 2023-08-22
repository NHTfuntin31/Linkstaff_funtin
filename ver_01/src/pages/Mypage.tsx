import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { UserLogout } from "../api/UserApi";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/Store";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { Header,Container, Main } from "./Login";
import MypageComponent from "../components/Mypage/MypageComponent";

export const RegisterButton = styled.div`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
  font-size: 16px;
  font-weight: 545;
  transition: opacity 0.8s ease-out, all 0.4s ease-out;
  a {
    transition: all 0.3s ease;
    text-align: center;
    border: 1px solid;
    display: block;
    border-radius: 4px;
    background: #fff;
    color: black;
    transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
    &:hover {
      color: white;
      background: #000;
    }
    @media screen and (max-width: 896px) {
      padding: 10px 0;
      width: 95%;
      height: 45px;
      border-radius: 0%;
    }
  }
  .isActive {
    color: white;
    background: black;
  }
`;

const Span = styled.span`
  width: 200px;
  /* padding: 13px; */
  display: table;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const Mypage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const jobView = sessionStorage.getItem('jobView');
  if (!jobView) {
    const arr : Array<string> = [];
    sessionStorage.setItem('jobView', JSON.stringify(arr))
  } 
  const handleLogout = () => {
    UserLogout(navigate, dispatch);
  };
  const currentUser = useSelector(
    (state: RootState) => state.auth.CurrentUser?.user
  );
  const jwt = useSelector((state: RootState) => state.auth.CurrentUser?.jwt);
  if (!jwt) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <RegisterButton>
        <Link to="/shinkitoroku">
          <Span>情報登録画面</Span>
        </Link>
      </RegisterButton>
      <Container>
        <Main>
          <Header onClick={()=>handleLogout()}>
              <h1>{t('my_page.my_page')}</h1>
              <h1>{currentUser.email}{t('my_page.sama')}</h1>
          </Header>
          <Body>
            <MypageComponent title='お気に入り' link="/favourite-job" />
            <MypageComponent title='閲覧履歴' link="/history" />
          </Body>
        </Main>
      </Container>
    </>
  );
};
