import React, { useState, useEffect  } from "react";
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
import { Icon } from '@iconify/react';
import { useQuery } from "@tanstack/react-query";
import { ButtonNormal, LargeButton} from './../../components/ButtonStyled'
import { useTranslation } from 'react-i18next';
import { baseAPI } from "../../global/global";

export const NewInfo = () => {
  const { t } = useTranslation();
  const [sliceIndex, setSliceIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [itemsPerSlice, setItemsPerSlice] = useState(4);
  const [position, setPosition] = useState(0);
  const [swipeStartX, setSwipeStartX] = useState(0);

  const handleSwipe = (direction: number) => {
    const maxSliceIndex = Math.ceil(data.data.length / itemsPerSlice) - 1;
    if (direction === 1 && sliceIndex < maxSliceIndex) {
      setShowNext(true);
      setTimeout(() => {
        setShowNext(false);
        setSliceIndex(sliceIndex + 1);
      }, 500);
    } else if (direction === -1 && sliceIndex > 0) {
      setShowNext(true);
      setTimeout(() => {
        setShowNext(false);
        setSliceIndex(sliceIndex - 1);
      }, 500);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 599) {
        setItemsPerSlice(2);
      }else if(window.innerWidth < 1024){
        setItemsPerSlice(3);
      }
       else {
        setItemsPerSlice(4);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
  const handleLeftClick = () => {
    if (sliceIndex > 0) {
      setShowNext(true);
      setTimeout(() => {
        setShowNext(false);
        setSliceIndex(sliceIndex - 1);
      }, 500);
    }
  };

  const handleRightClick = () => {
    const maxSliceIndex = Math.ceil(data.data.length / itemsPerSlice) - 1;
    if (sliceIndex < maxSliceIndex) {
      setShowNext(true);
      setTimeout(() => {
        setShowNext(false);
        setSliceIndex(sliceIndex + 1);
      }, 500);
    }
  };

  const handleSwipeStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setSwipeStartX(event.touches[0].clientX);
  };

  const handleSwipeEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const diff = swipeStartX - event.changedTouches[0].clientX;
    if (diff > 0) {
      handleSwipe(1); // Swipe left
    } else if (diff < 0) {
      handleSwipe(-1); // Swipe right
    }
  };

  const slicedData = data.data.slice(
    sliceIndex * itemsPerSlice,
    sliceIndex * itemsPerSlice + itemsPerSlice
  );

  const renderedItems = slicedData.map((item: any, index: any) => (
    <GroupLink key={index} className={showNext ? "fade-out" : "fade-in"}>
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
        <p>({sliceIndex + 1}/{Math.ceil(data.data.length / itemsPerSlice)})</p>

        <TopNewInfo>
          <TopNewBox>
            <TopNewSwiper
              onTouchStart={handleSwipeStart}
              onTouchEnd={handleSwipeEnd}
              style={{ transform: `translateX(-${position * 300}px)` }}
            >
              <button className="LeftBtn" onClick={handleLeftClick}>＜</button>
              <SwiperSwaper>
                {renderedItems}
              </SwiperSwaper>
              <button className="RightBtn" onClick={handleRightClick}>＞</button>
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
