import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  SearchBox,
  TextSearch,
  Input,
  Button,
  ButtonList,
  SearchAria,
  H2,
  P,
  ListButton,
  SearchIndustry,
  TopType,
  TopLink,
  SpecialLink,
} from "./../../styles/homeStyles/topSearchBox";
import { ButtonNormal, SmallButton, LargeButton} from './../../components/ButtonStyled'
import SearchModal from "../../components/Modal/searchModal";
import { useTranslation } from 'react-i18next';
import ConfirmModal from "../../components/Modal/ConfirmModal";
import ReInfoModal from "../../components/Modal/ReInfoModal";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showSearchModal, setshowSearchModal] = useState(false);
  const [a, seta] = useState(false);
  const [b, setb] = useState(false);
  const [param, setParam] = useState<string | null>(sessionStorage.getItem('param'));
  const AriaArray: string[] = ["北海道","宮城","群馬","東京","新潟","石川","静岡","京都","大阪","兵庫","岡山","広島","香川","愛媛","福岡","熊本","鹿児島","沖縄"]
  const openModal = () => {
    setshowSearchModal(true);
    seta(false)
    setb(false)
  };

  const handleSearch = () => {
    sessionStorage.setItem('param', String(param));
    sessionStorage.setItem('page', '1');
    sessionStorage.setItem('pageSize', '20');
    navigate('/search');
  }
  const handleSearchPress = (e:any) => {
    if (e.key == 'Enter') {
      handleSearch();
    }
  }
  const AriaBtn = AriaArray.map((item: string, index: number) => (
    <SmallButton key={index}>
      <ButtonNormal>
        <span>{item}</span>
      </ButtonNormal>
    </SmallButton>
    ));
    
  return (
    <>
      <SearchModal status={showSearchModal} showModal={setshowSearchModal}/>
      <ConfirmModal status={a} showModal={seta} onFunction={openModal}/>   
      <ReInfoModal status={b} showModal={setb} onFunction={openModal}>
        <p>Children</p>
      </ReInfoModal>
      <SearchBox>
        <H2>求人検索</H2>
        <TextSearch>
          <Input
            type="text"
            placeholder="社名、職種、業種などキーワードから探す"
            value={param ? param : ""}
            name="search"
            onChange={(e)=>setParam(e.target.value)}
            onKeyPress={handleSearchPress}
          />
          <Button className="ic" onClick={handleSearch}>
            <Icon icon="grommet-icons:form-search" width="58" height="58" />
          </Button>
          <Button className="txt">
            <p>検査する</p>
          </Button>
        </TextSearch>
        <ButtonList>
          <LargeButton onClick={()=>seta(true)} style={{width: '300px'}}><ButtonNormal>
            <span>{t("top.button.shokushu_kara_sagasu")}</span></ButtonNormal></LargeButton>
          <LargeButton onClick={openModal} style={{width: '300px'}}><ButtonNormal>
            <span>{t("top.button.kinmuchi_kara_sagasu")}</span></ButtonNormal></LargeButton>
          <LargeButton onClick={() => setb(true)} style={{width: '300px'}}><ButtonNormal>
            <span>{t("top.button.shosai_joken_kara_sagasu")}</span></ButtonNormal></LargeButton>
        </ButtonList>
      </SearchBox>
      <SearchAria>
        <H2>エリアで探す</H2>
        <P>
          各エリアの主な産業や特徴、求人情報、ワークポートの拠点情報をまとめました。
        </P>
        <ListButton>
          {AriaBtn}
        </ListButton>
      </SearchAria>
      <SearchIndustry>
        <H2>業界・職種から探す</H2>
        <TopType>
          <TopLink>
            <a href="#">
              <p>
                <span>IT業界</span>
              </p>
              <p>
                IT系コンサルタント・ITエンジニア・プログラマ・WEBデザイナー・
                WEBディレクターなど
              </p>
            </a>
          </TopLink>
          <TopLink>
            <a href="#">
              <p>
                <span>建設業界</span>
              </p>
              <p>
                建設コンサルタント・設計・CADオペレーター・施工管理・ハウスメ
                ーカーなど
              </p>
            </a>
          </TopLink>
          <TopLink>
            <a href="#">
              <p>
                <span>営業職</span>
              </p>
              <p>
                戦略・経営コンサルタント・IT営業・食品営業・化学製品営業・人材
                紹介営業など
              </p>
            </a>
          </TopLink>
          <TopLink>
            <a href="#">
              <p>
                <span>製造業界</span>
              </p>
              <p>
                物流・回路設計・AIエンジニア（ものづくり系）・プロセスエンジニ
                アなど
              </p>
            </a>
          </TopLink>
          <TopLink>
            <a href="#">
              <p>
                <span>事務職</span>
              </p>
              <p>総務・経理・人事・広報など</p>
            </a>
          </TopLink>
        </TopType>
      </SearchIndustry>
      <SearchIndustry>
        <H2>特集から探す</H2>
        <TopType>
          <SpecialLink>
            <span>
              <Icon
                icon="clarity:circle-arrow-solid"
                width="30"
                height="30"
                rotate={1}
              />
            </span>
            <a href="">年収700万円以上のITエンジニア特集</a>
          </SpecialLink>
          <SpecialLink>
            <span>
              <Icon
                icon="clarity:circle-arrow-solid"
                width="30"
                height="30"
                rotate={1}
              />
            </span>
            <a href="">年収アップを目指す営業職特集</a>
          </SpecialLink>
          <SpecialLink>
            <span>
              <Icon
                icon="clarity:circle-arrow-solid"
                width="30"
                height="30"
                rotate={1}
              />
            </span>
            <a href="">スペシャリストを目指すデザイナー・クリエイター特集</a>
          </SpecialLink>
          <SpecialLink>
            <span>
              <Icon
                icon="clarity:circle-arrow-solid"
                width="30"
                height="30"
                rotate={1}
              />
            </span>
            <a href="">急募求人特集</a>
          </SpecialLink>
          <SpecialLink>
            <span>
              <Icon
                icon="clarity:circle-arrow-solid"
                width="30"
                height="30"
                rotate={1}
              />
            </span>
            <a href="">リモートワーク求人特集</a>
          </SpecialLink>
        </TopType>
      </SearchIndustry>
    </>
  );
};
