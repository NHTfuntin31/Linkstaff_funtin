import { useRef  } from "react";
import {
  NewInfoSection,
  TopNewInfo,
  TopNewSwiper,
  SwiperSwaper,
  GroupLink,
  Description,
  IMG,
  Term,
  Details,
  TopNewBox,
} from "./../../styles/homeStyles/topNewInfoBox";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ButtonNormal, LargeButton} from './../../components/ButtonStyled'
import { useTranslation } from 'react-i18next';
import { baseAPI } from "../../global/global";

export const NewInfo = () => {
  const { t } = useTranslation();
  const scrl = useRef<HTMLDivElement | null>(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["job"],
    queryFn: () =>
      fetch(`${baseAPI}/jobs`).then((res) => res.json()),
  });
  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  if (error) return "An error has occurred: ";

  const slide = (shift: number) => {
    if(scrl.current){
      scrl.current.scrollLeft += shift;
    }
  };

  const renderedItems = data.data.map((item: any, index: any) => (
    <GroupLink key={index}>
      <IMG>
        <img
          src="https://www.workport.co.jp/img_rec/231/rec1.jpg?date=20230406"
          alt=""
        />
      </IMG>
      <Description>
        <Term>
          <p>{item.attributes.company}</p> <br />
          <p>{item.attributes.requirement}</p>
        </Term>
        <Details>
          <p>会社情報</p>
        </Details>
      </Description>
      <Details className="money">
          <p>
            <span>給与</span>
            {item.attributes.salary_from}万円～
            {item.attributes.salary_to}万円
          </p>
        </Details>
    </GroupLink>
  ));

  return (
    <>
      <NewInfoSection>
        <h2>新着求人</h2>
        <TopNewInfo>
          <TopNewBox>
            <TopNewSwiper>
              <button className="LeftBtn" onClick={() => slide(-450)}>＜</button>
              <SwiperSwaper ref={scrl}>
                {renderedItems}
              </SwiperSwaper>
              <button className="RightBtn" onClick={() => slide(+450)}>＞</button>
            </TopNewSwiper>
          </TopNewBox>
        </TopNewInfo>
        <LargeButton style={{height: '60px'}}>
          <ButtonNormal>
            <Link to="/search"><span>{t("top.button.shinchaku_kyujin_ichiran")}</span></Link>
          </ButtonNormal>
        </LargeButton>
      </NewInfoSection>
    </>
  );
};
