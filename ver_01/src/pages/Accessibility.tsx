import { useTranslation } from "react-i18next";
import white from "../assets/white.svg";
import orange from "../assets/orange.svg";
import { MainBannerContainer,MainBannerLeft, MainBannerRightComponent } from "./../components/banner";
import {HeaderContainer,FooterMain,SectionContainer,} from "../styles/footerStyles";
import Breadcrumb from "./../components/Breadcrumbs";
import {useEffect} from 'react';



const Accessibility = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Breadcrumb />
      <HeaderContainer>
        <h1>{t("accessibility.suishou_kankyouni_tsuite")}</h1>
      </HeaderContainer>
      <FooterMain>
        <SectionContainer>
          <h2>[{t("accessibility.suishou_kankyouni_tsuite")}]</h2>
          <p>
            ワークポートを安全にご利用いただくためには、下記ブラウザを推奨いたします。
          </p>
        </SectionContainer>
        <SectionContainer>
          <h2>●Windows</h2>
          <p>
            {" "}
            Internet Explorer 11
            <br />
            Microsoft Edge 最新バージョン
            <br />
            Firefox 最新バージョン
            <br />
            Google Chrome 最新バージョン
          </p>
          <br />
        </SectionContainer>
        {/* MACINTOCH */}
        <SectionContainer>
          <h2>●Macintosh</h2>
          <p>
            Firefox 最新バージョン
            <br />
            Google Chrome 最新バージョン
            <br />
            Safari 最新バージョン
            <br />
            ※ただし上記環境範囲内であっても、ブラウザとOSとFlash
            Playerの組み合わせにより、一部表示不具合や各種機能がご利用になれない場合がございます。（各種ブラウザのベータ版、プレビュー版等でのご利用、一部アドオンのご利用も含みます）
            <br />
            ※新しいブラウザへの対応は随時検討を進めてまいりますが、公表されていないブラウザ固有の不具合により、表示や動作の安定性が確保できていない場合がございます。
          </p>
          <br />
        </SectionContainer>
        {/* SECURITY */}
        <SectionContainer>
          <h2>[{t("accessibility.sekyuritini_tsuite")}]</h2>
          <p>
            ワークポートでは、お客様がデータの送受信を行う際に安心してご利用いただけるよう「SSL（Secure
            Sockets Layer）」と呼ばれる暗号通信技術を使用しています。
            <br />
            SSLはデジタル署名と暗号化通信を採用した相互認証により、インターネット上での通信を保護する仕組みです。お客様によって入力された個人情報がサーバーに送信される際に、このSSLによって通信が暗号化されます。そのため、外部の第三者にお客様の個人情報が読み取られることはありません。ブラウザの下方に「鍵」の印がついている時は、SSLモードにいることを意味しています。SSLを使うためにブラウザに特別な設定をする必要はありません。ただし、古いバージョンのブラウザでは表示できない場合があります。
          </p>
        </SectionContainer>
        {/* JavaScript */}
        <SectionContainer>
          <h2>[JavaScriptについて]</h2>
          <p>
            ワークポートでは一部にJavascriptを利用したコンテンツをご用意しております。
            <br />
            通常お客様がお使いのブラウザは、デフォルトでJavascriptが使用できる設定となっております。ワークポートの全てのコンテンツをご利用いただくには、
            Javascriptが使用できるブラウザ設定をお勧めいたします。
          </p>
        </SectionContainer>
        {/* SMARTPHONE */}
        <SectionContainer>
          <h2>[{t("accessibility.sumatofon_taburetto")}]</h2>
          <p>
            ご利用の端末の特性により、正しく表示されない場合や一部機能がご利用いただけない場合がございます。推奨環境に該当しないブラウザで「ワークポート」にアクセスされる場合は、お客様の責任の範囲内でのご利用となりますので、あらかじめご了承ください。
          </p>
        </SectionContainer>
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
      </FooterMain>

    </>
  );
};

export default Accessibility;
