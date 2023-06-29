import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';

const Main = styled.div`
    font-family: "Noto Sans","Noto Sans CJK JP",-apple-system,BlinkMacSystemFont,"Helvetica Neue","Hiragino Kaku Gothic ProN",メイリオ,Meiryo,sans-serif;
    display:flex;
    flex-direction:column;
    width:100%;
    line-height: 2;
`
const Top = styled.div`
    display:flex;
    justify-content:center;
    background: #fff;
    padding: 11px 0;
    border-bottom: 1px solid #e1e6ea;
`

const List = styled.ul`
    line-height: 1;
    text-align: left;
    letter-spacing: -.4em;
    width: 70%;
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
`

const Item1 = styled.li`
    display:inline;
    font-size: 10px;
    padding-left: 18px;
    position: relative;
    letter-spacing: normal;
    &::before {
        content: '>';
        display: block;
        position: absolute;
        left: 48px;
        top: 40%;
        transform: translateY(-50%);
    }
`

const Item2 = styled.li`
    display:inline;
    font-size: 10px;
    padding-left: 18px;
    position: relative;
    letter-spacing: normal;
    &::before {
        content: "利用規約";
    }
`

const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height: 165px;
    background: #f4f6f7;
`
const HeaderTitle = styled.div`
    width:70%;
`
const Title = styled.h1`
    font-size:30px;
    font-weight:bold;
`

const Wrap = styled.div`
    padding: 50px 0;
`

const Body = styled.div`
    width: 69%;
    margin: 0 auto;
`

const BodyTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 20px;
`

const BodyContent = styled.dl`
    margin: 0 0 60px;
`

const FirstBodyContent = styled.dt`
    display:block;
    font-weight: bold;
    margin: 0 0 10px;
    font-size: 14px;
`

const SecondBodyContent = styled.dd`
    display:block;
    font-size: 13px;
    margin: 0;
    padding: 0;
`

const Agree = () => {
    const { t } = useTranslation();

    return (
        <Main>
            <Top>
                <List>
                    <Item1><Link to="/" style={{color: 'black'}}>TOP</Link></Item1>
                    <Item2></Item2>
                </List>
            </Top>
            <Header>
                <HeaderTitle>
                    <Title>{t('common.riyokiyaku')}</Title>
                </HeaderTitle>
            </Header>
            <Wrap></Wrap>
            <Body>
                <BodyTitle>
                    [サービスご利用上のお願い]
                </BodyTitle>
                <BodyContent>
                    <FirstBodyContent>
                        1.弊社サイトや転職支援サイトの弊社取り扱い求人について
                    </FirstBodyContent>
                    <SecondBodyContent>
                        今後、弊社サイトや転職支援サイト（イーキャリアFA、マイナビ転職エージェントなど）での、弊社取り扱いの求人についてのお問い合わせは、担当転職コンシェルジュまでご連絡ください。
                    </SecondBodyContent>
                </BodyContent>
                <BodyContent>
                    <FirstBodyContent>
                        2.応募企業へのご連絡について
                    </FirstBodyContent>
                    <SecondBodyContent>
                        弊社から応募させていただいた企業に、電話・メールなどで直接お問い合わせをされることはご遠慮ください。（面接後のお礼なども含みます）選考中におきましては、一部例外を除き、全ての連絡において担当転職コンシェルジュが間に入らせていただいております。選考に支障をきたすことになりかねませんので、ご協力をお願いいたします。
                    </SecondBodyContent>
                </BodyContent>
                <BodyContent>
                    <FirstBodyContent>
                        3.応募用書類等について
                    </FirstBodyContent>
                    <SecondBodyContent>
                        書類や面接時の内容及び数値に、偽りや誤解の発生する恐れがないようにお願いいたします。
                    </SecondBodyContent>
                </BodyContent>
                <BodyContent>
                    <FirstBodyContent>
                        4.携帯電話用メールアドレスの利用について
                    </FirstBodyContent>
                    <SecondBodyContent>
                        迅速な面接のスケジュール設定や確認連絡などで、携帯メールを利用して連絡させていただく場合もございます。<br />
                        携帯電話の設定で、PCメール受信拒否をされている方は、「workport.jp」のドメイン受信設定をお願いいたします。（設定は機種／キャリアにより異なります）
                    </SecondBodyContent>
                </BodyContent>
                <BodyContent>
                    <FirstBodyContent>
                        5.自己応募企業、他社紹介会社からの応募企業について
                    </FirstBodyContent>
                    <SecondBodyContent>
                        求人紹介、応募代行、選考管理をさせていただく立場上、他社選考状況をお伝えいただけます様、ご協力をお願いしております。また過去に応募されたことのある企業もお伝えください。
                    </SecondBodyContent>
                </BodyContent>
                <BodyContent>
                    <FirstBodyContent>
                        6.選考の途中辞退について
                    </FirstBodyContent>
                    <SecondBodyContent>
                        応募した企業の選考中（内定後）の前触れのない辞退など弊社側での説明責任が難しい場合、信頼関係を損ねてしまう恐れがございますので、ご理解、ご協力いただけます様、よろしくお願いいたします。
                    </SecondBodyContent>
                </BodyContent>
                <BodyContent>
                    <FirstBodyContent>
                        7.サポート終了に関して
                    </FirstBodyContent>
                    <SecondBodyContent>
                        転職相談サービスにおいて、弊社ならびに弊社社員への誹謗中傷や迷惑行為などがございましたらサポートを終了させていただくことがございます。
                    </SecondBodyContent>
                </BodyContent>
            </Body>
            <Body>
                <BodyTitle>
                    [取扱業務の範囲]
                </BodyTitle>
                <BodyContent>
                    <FirstBodyContent>
                        <dt>取扱職種</dt>
                        <dd style={{ fontSize: '13px', fontWeight: '400' }}>・全職種</dd>
                    </FirstBodyContent>
                </BodyContent>
                <BodyContent>
                    <FirstBodyContent>
                        <dt>取扱地域</dt>
                        <dd style={{ fontSize: '13px', fontWeight: '400' }}>・日本国内、一部海外</dd>
                    </FirstBodyContent>
                </BodyContent>
            </Body>
            <Body>
                <BodyTitle>
                    [手数料に関する事項]
                </BodyTitle>
                <BodyContent>
                    <FirstBodyContent>
                        <dt>求職受付手数料</dt>
                        <dd style={{ fontSize: '13px', fontWeight: '400' }}>・無料</dd>
                    </FirstBodyContent>
                </BodyContent>
            </Body>
            <Body>
                <BodyTitle>
                    [求職者の個人情報の取扱いに関する事項]
                </BodyTitle>
                <BodyContent>
                    <FirstBodyContent>
                        <dt>個人情報取扱ポリシー</dt>
                        <dd style={{ fontSize: '13px', fontWeight: '400' }}>・
                        <Link to="/information"
                        style={{fontWeight: '500', color:'#26a24c'}}>http://www.workport.co.jp/information/</Link></dd>
                    </FirstBodyContent>
                </BodyContent>
            </Body>
            <Body>
                <BodyTitle>
                    [苦情処理に関する事項]
                </BodyTitle>
                <BodyContent>
                    <FirstBodyContent>
                        <dt>弊社サービスに対する、ご意見などございましたら、以下までご連絡願います。</dt>
                        <dd style={{ fontSize: '13px', fontWeight: '400' }}>
                            ・Eメールアドレス：objection@workport.jp<br/>
                            【例】担当転職コンシェルジュより選考結果のご連絡が無い場合<br/>
                            担当転職コンシェルジュの変更を依頼したい場合・・・等
                        </dd>
                    </FirstBodyContent>
                </BodyContent>
            </Body>
            <Body>
                <BodyTitle>
                    [人事アプローチのご案内]
                </BodyTitle>
                <BodyContent>
                    <FirstBodyContent>
                        <p style={{ fontSize: '12px', fontWeight: '400' }}>
                            弊社では、求人企業の人事担当者様にご来社いただき、レジュメを見て興味を持った求職者様に逆アプローチを行える、「人事アプローチ」というサービスを企業向けに行っております。毎月200社以上の求人企業がご来社され、これまでこのサービスを利用し、多数のご入社が決まっております。こちらのサービスの利用を希望されない場合は、担当転職コンシェルジュにお伝えください。
                        </p>
                    </FirstBodyContent>
                </BodyContent>
            </Body>
        </Main>
    )
}

export default Agree