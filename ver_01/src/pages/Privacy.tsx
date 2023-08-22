import white from '../assets/white.svg'
import orange from '../assets/orange.svg'
import { useTranslation } from 'react-i18next';
import Breadcrumb from './../components/Breadcrumbs'
import { HeaderContainer, FooterMain, SectionContainer} from '../styles/footerStyles'
import { MainBannerContainer,MainBannerLeft, MainBannerRightComponent } from "./../components/banner";
import  { useEffect } from 'react';


const Privacy = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <>
    <Breadcrumb />
    <HeaderContainer>
      <h1>{t('privacy.kojin_joho_hogo_hoshin')}</h1>
    </HeaderContainer>
    <FooterMain>
          <SectionContainer>
           <h3>株式会社ワークポートおよびグループ会社（以下、「当社」という。）は、総合的な人材紹介を中心とした職業紹介事業、人材採用支援事業、及び関連する業務受託事業を行っております。 当社は、当社の事業の用に供するすべての個人情報を適切に取扱うため、当社全従業者が遵守すべき行動基準として本個人情報保護方針を定め、その遵守の徹底を図ることといたします。</h3>
          </SectionContainer>

          <SectionContainer>
            <h3>1. 当社は、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守するため、日本工業規格「個人情報保護マネジメントシステム 要求事項」（JIS Q 15001）に準拠した個人情報保護マネジメントシステムを策定し、適切に運用いたします。</h3>
            {/* </SectionContainer> */}
            {/* <SectionContainer> */}

            <h3> 2. 当社は、事業の内容及び規模を考慮した適切な個人情報の取得、利用及び提供を行います。 それには特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行わないこと及びそのための措置を講じることを含みます。</h3>
            {/* </SectionContainer> */}
            {/* <SectionContainer> */}

            <h3>3. 当社は、個人情報の取扱いの全部又は一部を委託する場合は、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行います。</h3>
            {/* </SectionContainer> */}
            {/* <SectionContainer> */}

            <h3>4. 当社は、本人の同意がある場合又は法令に基づく場合を除き、個人情報を第三者に提供することはありません。</h3>
            {/* </SectionContainer> */}
            {/* <SectionContainer> */}

            <h3>5. 当社は、個人情報の漏えい、滅失又はき損の防止及び是正のための措置を講じます。</h3>
            {/* </SectionContainer> */}
            {/* <SectionContainer> */}

            <h3>6. 当社は、個人情報の取扱いに関する苦情及び相談への適切かつ迅速な対応に努めます。また、当社が保有する開示対象個人情報の開示等の求め（利用目的の通知、開示、訂正・追加又は削除、利用又は提供の停止）を受け付けます。 開示等の求めの手続きにつきましては、以下の「個人情報苦情及び相談窓口」までご連絡ください。</h3>
            {/* </SectionContainer> */}
            {/* <SectionContainer> */}

            <h3> 7. 当社は、個人情報保護マネジメントシステムの継続的改善を行ないます。</h3>
          </SectionContainer>

           <SectionContainer>

          <h2>＜個人情報の取り扱いについて＞</h2>
          <br />
          <p>本ホームページの<span>個人情報の取り扱いについて</span>をご覧ください。</p>
          </SectionContainer>
          <SectionContainer>
          <p>
          制定：2004年4月5日<br />
          改定：2017年4月3日<br />
          株式会社ワークポート<br />
          代表取締役社長 林 徹郎
          </p>
          </SectionContainer>
          <SectionContainer>
            <a href="#">
              <img src="https://www.workport.co.jp/cmn4/img/f_priv202304.png" />
              <span>※当社は「プライバシーマーク」使用許諾事業者として認定されています。</span>
            </a>
            </SectionContainer>

          <SectionContainer>
          <h2>＜ワークポートグループの個人情報苦情及び相談窓口＞</h2>
          <br />
          <p>
          株式会社ワークポート
          <br />
          経営管理グループ 個人情報保護管理者：中野晶
          <br />
          お電話によるお問い合わせ： 0120-77-1049
          <br />
          受付時間:月～金 10:00～17:00（祝祭日を除く）
          <br />
          e-mailによるお問い合わせ：privacy@workport.jp
          <br />
          制定：2004年4月5日
          <br />
          改定：2023年4月7日
          <br />
          株式会社ワークポート
          <br />
          代表取締役社長 林 徹郎
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
  )
}

export default Privacy