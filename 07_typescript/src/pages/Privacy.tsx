import styled from 'styled-components'
import white from '../assets/white.svg'
import orange from '../assets/orange.svg'

const PrivacyContainer = styled.div`
  font-family: "Noto Sans","Noto Sans CJK JP",-apple-system,BlinkMacSystemFont,"Helvetica Neue","Hiragino Kaku Gothic ProN",メイリオ,Meiryo,sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: left;
  line-height: 2;
`
const CvGrap = styled.div`
  h1{
    font-size: 3rem;
  }
  margin: 0 auto;
  padding: 50px 0;
  width: 1000px;
`
const MainInfo = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  width: 1000px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  p {
    margin: 0 0 50px;
  }
  ul, li{
    list-style: none;
  }
  li{
    margin: 0 0 60px;
  }
`
const Copy = styled.div`
display: flex;
justify-content: flex-end;
`
const CopyLast = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`
const MainCv = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  width: 1000px;
  display: flex;
`
const MainCvleft = styled.div`
  padding: 60px;
  .Wrap-top{
    font-size: 2.6rem;
    font-family: 'Ryumin Pro', B-KL;
    line-height: 1.7;
    letter-spacing: 0.1em;
  }
  .Wrap-down{
  font-size: 1.4rem;
  line-height: 1;
  padding: 20px 0 30px;
  }
  img{
    padding :10px;
  }
`
const MainCvRight = styled.div`
  img {
    height: 355px;
    width: 216px;
  }
`
const Information = styled.div`
  span{
    color: #26a24c;
    font-weight: 500;
  }
  padding: 25px 0;
`
const PrivacyLogo = styled.div`
  a {
    text-decoration: none;
    color: #333333;
    display: flex;
  }
  img {
    height: 64px;
    width: 64px;
  }
  padding: 100px 0;
  a:hover span {
    text-decoration: underline;
  }
  a:active span {
    color: #333333;
  }
  a span{
    margin-top: 20px;
    margin-left: 10px;
  }
`

const Privacy = () => {
  return (
    <>
    <PrivacyContainer>
      <CvGrap>
        <h1>個人情報保護方針</h1>
      </CvGrap>
      <MainInfo>
        <p>株式会社ワークポートおよびグループ会社（以下、「当社」という。）は、総合的な人材紹介を中心とした職業紹介事業、人材採用支援事業、及び関連する業務受託事業を行っております。 当社は、当社の事業の用に供するすべての個人情報を適切に取扱うため、当社全従業者が遵守すべき行動基準として本個人情報保護方針を定め、その遵守の徹底を図ることといたします。</p>
        <ul>
          <li>1. 当社は、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守するため、日本工業規格「個人情報保護マネジメントシステム 要求事項」（JIS Q 15001）に準拠した個人情報保護マネジメントシステムを策定し、適切に運用いたします。</li>
          <li>2. 当社は、事業の内容及び規模を考慮した適切な個人情報の取得、利用及び提供を行います。 それには特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行わないこと及びそのための措置を講じることを含みます。</li>
          <li>3. 当社は、個人情報の取扱いの全部又は一部を委託する場合は、その取扱いを委託された個人情報の安全管理が図られるよう、委託を受けた者に対する必要かつ適切な監督を行います。</li>
          <li>4. 当社は、本人の同意がある場合又は法令に基づく場合を除き、個人情報を第三者に提供することはありません。</li>
          <li>5. 当社は、個人情報の漏えい、滅失又はき損の防止及び是正のための措置を講じます。</li>
          <li>6. 当社は、個人情報の取扱いに関する苦情及び相談への適切かつ迅速な対応に努めます。また、当社が保有する開示対象個人情報の開示等の求め（利用目的の通知、開示、訂正・追加又は削除、利用又は提供の停止）を受け付けます。 開示等の求めの手続きにつきましては、以下の「個人情報苦情及び相談窓口」までご連絡ください。</li>
          <li>7. 当社は、個人情報保護マネジメントシステムの継続的改善を行ないます。</li>
        </ul>
        <Information>
        <p>＜個人情報の取り扱いについて＞<br />
        本ホームページの<span>個人情報の取り扱いについて</span>をご覧ください。</p>
        </Information>
        <Copy>
        制定：2004年4月5日<br />
        改定：2017年4月3日<br />
        株式会社ワークポート<br />
        代表取締役社長 林 徹郎
        </Copy>
        <PrivacyLogo>
          <a href="#">
            <img src="https://www.workport.co.jp/cmn4/img/f_priv202304.png" />
            <span>※当社は「プライバシーマーク」使用許諾事業者として認定されています。</span>
          </a>
        </PrivacyLogo>
        <CopyLast>
        ＜ワークポートグループの個人情報苦情及び相談窓口＞<br />
        株式会社ワークポート<br />
        経営管理グループ 個人情報保護管理者：中野晶<br />
        お電話によるお問い合わせ： 0120-77-1049<br />
        受付時間:月～金 10:00～17:00（祝祭日を除く）<br />
        e-mailによるお問い合わせ：privacy@workport.jp<br />
        制定：2004年4月5日<br />
        改定：2023年4月7日<br />
        株式会社ワークポート<br />
        代表取締役社長 林 徹郎
        </CopyLast>
      </MainInfo> 
      <MainCv>
        <MainCvleft>
          <p className='Wrap-top'>専任の転職コンシェルジュが、<br />
          あなたの転職活動を成功まで導きます。</p>
          <p className='Wrap-down'>あなたの可能性を最大限に広げます。ワークポートの無料転職相談サービスをご利用ください。</p>
          <a href="#"><img src={white} /></a>
          <a href="#"><img src={orange} /></a>
        </MainCvleft>
        <MainCvRight>
        <img src="https://www.workport.co.jp/cmn4/img/cv_img03.png?date=20230227" />
        </MainCvRight>
      </MainCv>
    </PrivacyContainer>
    </>
  )
}

export default Privacy