import styled from "styled-components";
import { RegisterButton } from "../pages/Mypage";
import { NavLink, Routes, Route } from "react-router-dom";
import Basic from "../registrationPage/Basic";
import EducationWork from "../registrationPage/EducationWorkExperience";
import Motivation from "../registrationPage/Motivation";
import Qualification from "../registrationPage/Qualification";
import Breadcrumbs from "../components/Breadcrumbs";
import { useTranslation } from "react-i18next";

const Ul = styled.ul`
margin-top: 40px ;
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  align-items: center;
  margin-bottom: 50px;
  transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
  @media screen and (max-width: 896px) {
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }
`;

export const Container = styled.div`
  font-family: "Noto Sans", -apple-system, BlinkMacSystemFont, "Helvetica Neue",
    "Hiragino Kaku Gothic ProN", メイリオ, Meiryo, sans-serif;
  display: flex;
  justify-content: center;
  line-height: 2;
  width: 100%;
  height: auto;
  background-color: #a83d85;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
`;

const Li = styled.li`
  width: 100%;
  height: 50px;
  margin: 0 10px;
  display: table;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  width: 1000px;
  margin: 0px auto;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 69%;
  height: auto;
  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;
export const Span = styled.span`
  width: 100%;
  padding: 13px;
  display: table;
  @media screen and (max-width: 896px) {
    transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
    display: unset;
  }
`;
const Div = styled.div`
  display: block;
  width: 100%;
  height: 50px;
  background-color: #f4f6f7;

`
const ButtonBottom = styled.div`
width: 100%;
/* position: relative; */
  background-color: #ffffff;
`;
function News() {
  const { t } = useTranslation();
  return (
    <ButtonBottom>
      
      <Breadcrumbs></Breadcrumbs>
      <Nav>
        <Ul>
          <Li>
            <RegisterButton>
              <NavLink
                to="Basic"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
              >
                <Span>{t("common.kihon_jouhou")}</Span>
              </NavLink>
            </RegisterButton>
          </Li>
          <Li>
            <RegisterButton>
              <NavLink
                to="Educa"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
              >
                <Span>{t("common.gakireki_shokureki")}</Span>
              </NavLink>
            </RegisterButton>
          </Li>
          <Li>
            <RegisterButton>
              <NavLink
                to="Motiva"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
              >
                <Span>{t("common.shikaku_tsuukin_jikan_hoka")}</Span>
              </NavLink>
            </RegisterButton>
          </Li>
          <Li>
            <RegisterButton>
              <NavLink
                to="Quanli"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "isActive" : ""
                }
              >
                <Span>{t("common.shibou_douki_kibou_jouken")}</Span>
              </NavLink>
            </RegisterButton>
          </Li>
        </Ul>
      </Nav>
      <Div></Div>
      <Routes>
        <Route path="/Basic" element={<Basic />} />
        <Route path="/Educa" element={<EducationWork />} />
        <Route path="/Motiva" element={<Motivation />} />
        <Route path="/Quanli" element={<Qualification />} />
      </Routes>
    </ButtonBottom>
  );
}

export default News;
