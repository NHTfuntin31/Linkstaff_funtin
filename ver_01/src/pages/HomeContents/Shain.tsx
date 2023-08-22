import { ShainSection, ShainHeading, ShainList, ShainItem, TopShaintxt } from './../../styles/homeStyles/topShainBox'
import { ButtonNormal, LargeButton} from './../../components/ButtonStyled'
import { useTranslation } from 'react-i18next';

export const Shain = () =>{
  const { t } = useTranslation();
  return(
    <>
      <ShainSection>
          <ShainHeading>転職活動のプロ・転職コンシェルジュがあなたの転職活動をフルサポート</ShainHeading>
          <ShainList>
            <ShainItem><img src="	https://www.workport.co.jp/cmn4/img/top_img23.jpg" alt="" /></ShainItem>
            <ShainItem><img src="	https://www.workport.co.jp/cmn4/img/top_img23.jpg" alt="" /></ShainItem>
            <ShainItem><img src="	https://www.workport.co.jp/cmn4/img/top_img23.jpg" alt="" /></ShainItem>
            <ShainItem><img src="	https://www.workport.co.jp/cmn4/img/top_img23.jpg" alt="" /></ShainItem>
            <ShainItem><img src="	https://www.workport.co.jp/cmn4/img/top_img23.jpg" alt="" /></ShainItem>
            <ShainItem><img src="	https://www.workport.co.jp/cmn4/img/top_img23.jpg" alt="" /></ShainItem>
          </ShainList>
          <TopShaintxt><p>ワークポートでは、キャリアコンサルタントのことを”転職コンシェルジュ”と呼んでいます。「転職活動にまつわる様々なご要望にお応えする」と いう”コンシェルジュ”としてのマインドで、良質で満足度の高いサービスを提供いたします。常に不安がつきまとう転職活動だからこそ、私たちが 転職のプロとして全力でサポートすることをお約束いたします。</p></TopShaintxt>
          <LargeButton><ButtonNormal>
            <span>{t("top.button.tenshoku_konsheruju_shokai")}</span></ButtonNormal></LargeButton>
      </ShainSection>
    </>
  )
}