import { ServiceBox, ServiceList, Step, Img, P } from './../../styles/homeStyles/topServiceBox'
import { ButtonNormal, LargeButton} from './../../components/ButtonStyled'
import { useTranslation } from 'react-i18next';

export const Service = () => {
  const { t } = useTranslation();
  return(
    <>
      <ServiceBox>
        <h2>サービスの流れ</h2>
        <ServiceList>
          <Step>
            <Img><img src="https://www.workport.co.jp/cmn4/img/top_img4n.jpg" alt="" /></Img>
            <div className='text_step'>
              <P className='top'>① お申し込み</P>
              <P>サイト・スマホから1分で申
              込み完了！</P>
            </div>
          </Step>
          <Step>
            <Img><img src="https://www.workport.co.jp/cmn4/img/top_img5n.jpg" alt="" /></Img>
            <div className='text_step'>
              <P className='top'>② カウンセリング</P>
              <P>転職コンシェルジュによる詳
              細なカウンセリング。</P>
            </div>           
          </Step>
          <Step>
            <Img><img src="https://www.workport.co.jp/cmn4/img/top_img6n.jpg" alt="" /></Img>
            <div className='text_step'>
              <P className='top'>③ 求人紹介</P>
              <P>あなたの希望やスキルを基に
              求人をご紹介。</P>
            </div>           
          </Step>
          <Step>
            <Img><img src="https://www.workport.co.jp/cmn4/img/top_img7n.jpg" alt="" /></Img>
            <div className='text_step'>
              <P className='top'>④ 応募・面接</P>
              <P>応募書類の添削や模擬面接な
              ど手厚くサポート。</P>
            </div>          
          </Step>
          <Step>
            <Img><img src="https://www.workport.co.jp/cmn4/img/top_img8n.jpg" alt="" /></Img>
            <div className='text_step'>
              <P className='top'>⑤ 内定・入社</P>
              <P>内定後の年収交渉、入社後の
              アフターフォローも万全</P>
            </div>          
          </Step>
        </ServiceList>
        <LargeButton><ButtonNormal>
            <span>{t("top.button.kuwashi_sabisu_no_nagare")}</span></ButtonNormal></LargeButton>
      </ServiceBox>
    </>
  )
}