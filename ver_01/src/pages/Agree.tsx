import white from "../assets/white.svg";
import orange from "../assets/orange.svg";
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { HeaderContainer, FooterMain, SectionContainer} from '../styles/footerStyles'
import { MainBannerContainer,MainBannerLeft, MainBannerRightComponent } from "./../components/banner";
import {useEffect} from 'react';
import Breadcrumb from './../components/Breadcrumbs'



const Agree = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <>
        <Breadcrumb />
        <HeaderContainer>
           <h1>{t('common.riyokiyaku')}</h1>
        </HeaderContainer>
        <FooterMain>
            <SectionContainer>
                <h2>
                    [サービスご利用上のお願い]
                </h2>
                    <h2>
                        1.弊社サイトや転職支援サイトの弊社取り扱い求人について
                    </h2>
                    <p>
                        今後、弊社サイトや転職支援サイト（イーキャリアFA、マイナビ転職エージェントなど）での、弊社取り扱いの求人についてのお問い合わせは、担当転職コンシェルジュまでご連絡ください。
                    </p>
            </SectionContainer>

            <SectionContainer>

                    <h2>
                        2.応募企業へのご連絡について
                    </h2>
                    <p>
                        弊社から応募させていただいた企業に、電話・メールなどで直接お問い合わせをされることはご遠慮ください。（面接後のお礼なども含みます）選考中におきましては、一部例外を除き、全ての連絡において担当転職コンシェルジュが間に入らせていただいております。選考に支障をきたすことになりかねませんので、ご協力をお願いいたします。
                    </p>
            </SectionContainer>

            <SectionContainer>

                    <h2>
                        3.応募用書類等について
                    </h2>
                    <p>
                        書類や面接時の内容及び数値に、偽りや誤解の発生する恐れがないようにお願いいたします。
                    </p>
            </SectionContainer>

            <SectionContainer>

                    <h2>
                        4.携帯電話用メールアドレスの利用について
                    </h2>
                    <p>
                        迅速な面接のスケジュール設定や確認連絡などで、携帯メールを利用して連絡させていただく場合もございます。<br />
                        携帯電話の設定で、PCメール受信拒否をされている方は、「workport.jp」のドメイン受信設定をお願いいたします。（設定は機種／キャリアにより異なります）
                    </p>
            </SectionContainer>

            <SectionContainer>
/                    <h2>
                        5.自己応募企業、他社紹介会社からの応募企業について
                    </h2>
                    <p>
                        求人紹介、応募代行、選考管理をさせていただく立場上、他社選考状況をお伝えいただけます様、ご協力をお願いしております。また過去に応募されたことのある企業もお伝えください。
                    </p>
            </SectionContainer>

            <SectionContainer>

                    <h2>
                        6.選考の途中辞退について
                    </h2>
                    <p>
                        応募した企業の選考中（内定後）の前触れのない辞退など弊社側での説明責任が難しい場合、信頼関係を損ねてしまう恐れがございますので、ご理解、ご協力いただけます様、よろしくお願いいたします。
                    </p>
            </SectionContainer>

            <SectionContainer>

                    <h2>
                        7.サポート終了に関して
                    </h2>
                    <p>
                        転職相談サービスにおいて、弊社ならびに弊社社員への誹謗中傷や迷惑行為などがございましたらサポートを終了させていただくことがございます。
                    </p>
            </SectionContainer>

            <SectionContainer>
                    <h2>[取扱業務の範囲] </h2>
                    <h2>取扱職種</h2>
                    <p>・全職種 </p>
            </SectionContainer>

            <SectionContainer>
                    <h2>取扱地域</h2>
                    <p>・日本国内、一部海外</p>
            </SectionContainer>

            <SectionContainer>
                    <h2>
                        [手数料に関する事項]
                    </h2>
                    <h2>求職受付手数料</h2>
                    <p style={{ fontSize: '13px', fontWeight: '400' }}>・無料</p>
            </SectionContainer>


            <SectionContainer>
                    <h2>
                        [求職者の個人情報の取扱いに関する事項]
                    </h2>
            </SectionContainer>

                <SectionContainer>
                    <h2>個人情報取扱ポリシー</h2>
                    <p style={{ fontSize: '13px', fontWeight: '400' }}>・
                    <Link to="/information"
                    style={{fontWeight: '500', color:'#26a24c'}}>http://www.workport.co.jp/information/</Link></p>
                </SectionContainer>

            <SectionContainer>
                    <h2>
                        [苦情処理に関する事項]
                    </h2>
            </SectionContainer>

            <SectionContainer>
                    <h2>弊社サービスに対する、ご意見などございましたら、以下までご連絡願います。</h2>
                    <p style={{ fontSize: '13px', fontWeight: '400' }}>
                        ・Eメールアドレス：objection@workport.jp<br/>
                        【例】担当転職コンシェルジュより選考結果のご連絡が無い場合<br/>
                        担当転職コンシェルジュの変更を依頼したい場合・・・等
                    </p>
            </SectionContainer>

            <SectionContainer>
                    <h2>
                        [人事アプローチのご案内]
                    </h2>
                    <p style={{ fontSize: '12px', fontWeight: '400' }}>
                        弊社では、求人企業の人事担当者様にご来社いただき、レジュメを見て興味を持った求職者様に逆アプローチを行える、「人事アプローチ」というサービスを企業向けに行っております。毎月200社以上の求人企業がご来社され、これまでこのサービスを利用し、多数のご入社が決まっております。こちらのサービスの利用を希望されない場合は、担当転職コンシェルジュにお伝えください。
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

export default Agree