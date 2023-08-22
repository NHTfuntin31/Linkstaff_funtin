import white from "../assets/white.svg";
import orange from "../assets/orange.svg";
import { MainBannerContainer,MainBannerLeft, MainBannerRightComponent } from "./../components/banner";
import { useTranslation } from "react-i18next";

import Breadcrumb from "./../components/Breadcrumbs";
import {HeaderContainer,FooterMain,SectionContainer,} from "../styles/footerStyles";
import {useEffect} from 'react';

const Information = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Breadcrumb />
      <HeaderContainer>
        <h1>{t("common.kojin_johono_toriatsukaini_tsuite")}</h1>
      </HeaderContainer>
      <FooterMain>
        <SectionContainer>
            <p>
              （個人情報保護法及びJISに基づく公表事項及び本人が容易に知り得る状態に置く事項）
            </p>
        </SectionContainer>
        <SectionContainer>
            <h2>[個人情報の利用目的]</h2>
            <p>
              当社は、業務上必要な範囲内で、かつ、適法で公正な手段により個人情報を取得します。
              <br />
              当社では、主にWeb、メール、電話などにより個人情報を取得します。
              <br />
              また、クレームやトラブル応対ならびに電話応対の品質向上の為に通話の録音により個人情報を取得することがあります。
              <br />
              <br />
              当社の業態が、総合的な人材紹介を中心とした職業紹介事業、人材採用支援事業、及び関連する業務受託事業をおこなうことであることを踏まえて当社が取扱う個人情報の利用目的を以下のように定めます。
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>
              1.ご利用者（当社webサービス利用者、職業紹介希望者等）の個人情報
            </h2>
            <p>
              ・ご希望する職種の求人企業様をご紹介するため。
              <br />
              ・当社のサービス及び提携企業様のサービスに関する各種情報をご提供するため。
              <br />
              ・当社が提供する職業紹介サービスの品質向上のため。
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>2.お取引先様から委託を受ける業務において取り扱う個人情報</h2>
            <br />
            <p>
              ・適正診断などの各種評価業務に関してご契約内容を実施し適切に管理するため。
            </p>
        </SectionContainer>
        <SectionContainer>
            <h2>3.お取引先様（求人企業様を含む）の個人情報</h2>
            <br />
            <p>・お取引先様との間のご契約内容を適切に管理するため。</p>
        </SectionContainer>
        <SectionContainer>
            <h2>4.当社への入社を希望される皆様の個人情報</h2>
            <br />
            <p>
              ・就職先としてご興味をお持ちになった方並びにご応募いただいた方への採用、募集情報等の提供・連絡のため。
              <br />
              ・採用選考業務のため。
            </p>
        </SectionContainer>
        <SectionContainer>
            <h2>5.当社へお問合せいただいた方の個人情報。</h2>
            <br />
            <p>
              ・当社の接客態度等の向上のため。
              <br />
              ・お問い合わせやご連絡内容を正確に把握し、対処するため。
            </p>
        </SectionContainer>
        <SectionContainer>
            <h2>
              6.一般に販売されている法人・団体等の名簿、WEB、新聞、雑誌などの一般公開情報
            </h2>
            <br />
            <p>・当社のサービスや商品に関するご案内をするため。</p>
            <br />
            <p>
              ※なお、個別に利用目的を通知する場合には、その利用目的によるものとします。
            </p>
            ※上記利用目的において、「ご契約内容を適切に管理するため」としているものは、「契約に入る前の段階における利用」と「契約終了後における利用」を含みます。
        </SectionContainer>
        <SectionContainer>
            <h2>＜ワークポート グループにおける個人情報の共同利用について＞</h2>
            <br />
            <p>
              当社およびワークポートグループ各社は、上記の利用目的の範囲内で、取得する個人情報をワークポートグループ各社との間で以下の通り共同利用させていただきます。尚、当社はお客様からのご要望に応じて個人情報の共同利用を停止いたします。
            </p>
        </SectionContainer>
        <SectionContainer>
            <h2>1.共同利用者の範囲</h2>
            <br />
            <p>当社及びワークポートグループ各社とします。</p>
        </SectionContainer>
        <SectionContainer>
            <h2>2.利用目的</h2>
            <br />
            <p>上記「個人情報の利用目的」記載の目的と同じです。</p>
        </SectionContainer>
        <SectionContainer>
            <h2>3.共同利用する個人情報の項目</h2>
            <br />
            <p>
              氏名・住所・電話番号・電子メールアドレス等のお客様の属性に関する情報や、その他業務上の連絡先に関する項目
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>4.取得方法</h2>
            <br />
            <p>取得方法は書面、電子メール等の電磁的通信手段等で行います。</p>
        </SectionContainer>
        <SectionContainer>
            <h2>5.管理責任者</h2>
            <br />
            <p>株式会社ワークポート 経営管理グループ 個人情報保護管理者 中野晶</p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜グループ会社一覧＞</h2>
            <br />
            <p>
              ・株式会社ワークポート東日本
              <br />
              ・株式会社ワークポート東海
              <br />
              ・株式会社ワークポート西日本
              <br />
              ・株式会社ワークポート九州
              <br />
              ・WORKPORT ASIA Co., Ltd.
              <br />
              ・WORKPORT KOREA Co., Ltd.
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜第三者への提供＞</h2>
            <br />
            <p>
              当個人情報を以下の条件において第三者に提供する他は、法令に基づく場合を除いて、本人の同意を得ることなく第三者に提供することはありません。
            </p>
            <br />
            <p>
              1.第三者に提供する目的求人企業への応募通知をするため
              <br />
              2.提供する個人情報の項目氏名、住所、生年月日、職務経歴、転職活動情報（企業名、選考ステータス、提示年収）。
              <br />
              3.提供の手段又は方法提供先へ直接、書面（電子的方式、磁気的方式など人の知覚によっては認識できない方式で作られる記録を含む。以下、同じ）にて提供。または、アクセス制御されたWeb管理画面によって提供。
              <br />
              4.当該情報の提供を受ける者又は提供を受ける者の組織の種類、及び属性当社と求人掲載のご契約をいただいている企業様で人材を求めている企業様。
              <br />
              5.個人情報の取扱いに関する契約
              <br />
              当社は、当個人情報の提供を受ける者との間で個人情報の目的外利用の禁止及び非開示契約を締結しております。
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜要配慮個人情報について＞</h2>
            <p>
              当社は、次に示す内容を含む個人情報の取得は原則として行いません。
              <br />
              ただし、利用者が自ら提供した場合は、当社が要配慮個人情報を取得することに利用者の同意があったものとみなします。
            </p>
        </SectionContainer>
        <SectionContainer>
            <p>
              1.思想、信条又は宗教に関する事項
              <br />
              2.人種、民族、門地、本籍地（所在都道府県に関する情報を除く。）、身体・精神障害、犯罪歴その他社会的差別の原因となる事項
              <br />
              3.勤労者の団結権、団体交渉その他団体行動の行為に関する事項
              <br />
              4.集団示威行為への参加、請願権の行使その他政治的権利の行使に関する事項
              <br />
              5.保健医療又は性生活に関する事項
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜個人情報提供の任意性＞</h2>
            <br />
            <p>
              当社への個人情報の提供は任意によるものです。
              <br />
              サービスの実施において、必ずしも全ての質問にご回答戴く必要はありませんが、それぞれの必要項目にご回答戴けなかった場合、該当するサービスが受けられないことがあります。
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜委託＞</h2>
            <br />
            <p>個人情報の取扱いを委託することはありません。</p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜開示対象個人情報の開示等および問い合わせ窓口について＞</h2>
            <br />
            <p>
              ご本人からの求めにより、当社が保有する開示対象個人情報の利用目的の通知、開示、内容の訂正・追加または削除、利用の停止・消去および第三者への提供の停止（「開示等」といいます。）を受け付けております。
              <br />
              開示等を受け付ける窓口は、以下の「個人情報苦情及び相談窓口」をご覧下さい。
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜個人情報を入力するにあたっての注意事項＞</h2>
            <br />
            <p>
              必須項目以外の情報の提供は任意です。ただし、当該情報が提供されない場合には、掲載される求人案件に対し、直接応募するサービスを適切にご提供できない場合がございます。
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜本人が容易に認識できない方法による個人情報の取得＞</h2>
            <br />
            <p>
              本ホームページでは、お客様に最適なサービスを提供するためにクッキー（Cookie）を一部使用しています。このクッキー（Cookie）から個人情報を特定できるような情報を得ることはありません。
            </p>
        </SectionContainer>

        <SectionContainer>
            <h2>＜個人情報保護方針＞</h2>
            <br />
            <p>本ホームページの個人情報保護方針をご覧ください。</p>
        </SectionContainer>

        <SectionContainer className="footer_right">
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
  );
};

export default Information;
