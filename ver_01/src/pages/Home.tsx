import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import { Reason } from './HomeContents/Reason';
import { Achi } from './HomeContents/Achi';
import { NewInfo } from './HomeContents/NewInfo';
import { Search } from './HomeContents/Search';
import { Shain } from './HomeContents/Shain';
import { Voice } from './HomeContents/Voice';
import { Service } from './HomeContents/Service';
import { useState } from "react";
import { Link } from "react-router-dom";
import {ButtonLogin, LargeButton} from './../components/ButtonStyled'

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

const MenuTab = styled.nav`
  height: 50px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  ul {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    height: 100%;
    align-items: center;
  }
  a {
    display: inline-block;
    text-align: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    height: 28px;
    &:hover {
      color: green;
      font-weight: bold;
    }
  }

  a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: green;
    transform: translate(-100%, 0);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
    content: "";
  }

  a:hover:after {
    transform: translate(0, 0);
  }
  li {
    list-style: none;
    padding: 0 10px;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
  }
  li + li {
    border-left: 0;
  }
`;

const TopSection = styled.section`
  width: 100%;
  text-align: center;
`;
const ReadSection = styled.section`
  max-width: 776px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.6rem;
  ul {
    list-style: inside;
  }
  ul li span {
    color: green;
  }
  ul li span:before {
    content: "・";
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    button {
      margin: 0 5px;
    }
  }
`;
const InquiryList = styled.div`
  position: absolute;
  left: -2px;
  width: 196px;
  height: auto;
  background: #ffffff;
  .linkText {
    text-align: left;
    height: 55px;
    padding: 20px;
    color: #000000;
    font-size: 1.3rem;
    font-weight: bold;
    border-top: 1px solid #e1e6ea;
  }
  .linkText::after {
      content: none;
    }
`;
const Home = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //ranodm image 
  const randomImage = `images/${Math.floor(Math.random() * 6)}.jpg`;
  const [topImage] = useState<string>(randomImage)
  
  return (
    <>
      <MenuTab>
        <ul>
          <li>
            <a href="/search">{t("top.kyujin_wo_sagasu")}</a>
          </li>
          <li>
            <a href="#">{t("top.tenshoku_sodan_service")}</a>
          </li>
          <li>
            <a href="#">{t("top.tenshoku_oyakudachi_joho")}</a>
          </li>
          <li>
            <a href="#">{t("top.kaisha_joho")}</a>
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            <a style={{ cursor: "pointer" }}>{t("top.otoiawase")}</a>
            {isHovered && (
              <InquiryList
              className="InquiryList"
              onMouseEnter={handleMouseEnter}
              >
                <ol>
                <li>
                  <Link to="/jobSeekers" className="linkText">
                    {t("top.tenshoku_kibou_sha")}
                  </Link>
                </li>
                <li>
                  <Link to="/experienced" className="linkText">
                    {t("top.chyouto_saiyo")}
                  </Link>
                </li>
                <li>
                  <Link to="/inquiryOthers" className="linkText">
                    {t("top.sonota")}
                  </Link>
                </li>
            </ol>
              </InquiryList>
            )}
          </li>
        </ul>
      </MenuTab>
      <HeroContainer>
        <img src={topImage} />
      </HeroContainer>
      <TopSection>
        <h2>
          ワークポートは、あなたのキャリアを一緒に考え、
          <br />
          ベストな企業、仕事を見つける転職エージェントです。
        </h2>
      </TopSection>
      <ReadSection>
        <ul>
          <li>
            <span>転職活動のプロに相談したい</span>
          </li>
          <li>
            <span>非公開求人も含めて、様々な求人を見たい</span>
          </li>
          <li>
            <span>求人検索や面接日程調整を代行してほしい</span>
          </li>
        </ul>
        <LargeButton style={{width: '388px', height: '72px'}}><ButtonLogin><span>{t("top.button.tenshoku_sodan_sabisu_ni_tsuite_kuwashiku")}</span></ButtonLogin></LargeButton>
      </ReadSection>
      <Reason />
      <Achi />
      <NewInfo />
      <Search />
      <Shain />
      <Service /> 
      <Voice />
    </>
  );
};

export default Home;
