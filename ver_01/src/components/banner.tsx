import styled from "styled-components";
import white from "../assets/white.svg";
import orange from "../assets/orange.svg";

export const MainBannerContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  font-family: "Ryumin Pro", serif;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  background: #f4f6f7;
`;

export const MainBannerLeft = styled.div`
  padding: 60px;
  font-family: "Ryumin Pro", serif;

  .Wrap-top {
    font-size: 2.6rem;
    font-family: "Ryumin Pro", serif;
    font-weight: bold;
    line-height: 1.7;
    letter-spacing: 0.1em;
  }

  .Wrap-down {
    font-size: 1.4rem;
    line-height: 1;
    padding: 20px 0 30px;
  }

  img {
    padding: 10px;
  }
`;

export const MainBannerRightComponent = styled.div`
  img {
    height: 355px;
    width: 216px;
  }

  @media (max-width: 599px) {
    img {
      margin-left: -70px;
      width: 100px;
      height: 100%;
    }
  }
`;

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <MainBannerLeft>
        <p className="Wrap-top">
          専任の転職コンシェルジュが、
          <br />
          あなたの転職活動を成功まで導きます。
        </p>
        <p className="Wrap-down">
          あなたの可能性を最大限に広げます。ワークポートの無料転職相談サービスをご利用ください。
        </p>
        <a href="#">
          <img src={white} alt="White Image" />
        </a>
        <a href="#">
          <img src={orange} alt="Orange Image" />
        </a>
      </MainBannerLeft>
      <MainBannerRightComponent>
        <img
          src="https://www.workport.co.jp/cmn4/img/cv_img03.png?date=20230227"
          alt="Banner Image"
        />
      </MainBannerRightComponent>
    </MainBannerContainer>
  );
};

export default MainBanner;