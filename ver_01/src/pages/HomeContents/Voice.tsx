import { VoiceSection, List, TopVoice, TopVoiceList, Member, MemberInfo } from './../../styles/homeStyles/topVoiceBox'
import { ButtonNormal, JiyuButton, LargeButton} from './../../components/ButtonStyled'
import { useTranslation } from 'react-i18next';
export const Voice = () =>{
  const BtnArray: string[] = ["#全て","#エンジニア","#クリエイター","#ゲーム","#営業","#バックオフィス","#メーカー","#マーケティング","#販売/サービス","#人材・HR","#建築・建設"]

  const ListBtn = BtnArray.map((item: string, index: number) => (
    <JiyuButton key={index}><ButtonNormal><span>{item}</span></ButtonNormal></JiyuButton>
  ))
  const { t } = useTranslation();
  return(
    <>
      <VoiceSection>
        <h2>転職成功者の声</h2>
        <List>
          {ListBtn}
        </List>
        <TopVoice>
          <TopVoiceList>
            <Member>
              <img src="https://www.workport.co.jp/cmn4/img/topVoice_img4.png" alt="" />
              <p className='title'>じっくり自分に合う職場をみ
              つけたいという希望が叶いま
              した！</p>
              <p className='txt'>複数の社員さんと面接をさせても
              らえたほか、オフィスに招いてい
              ただき、実際に働いている社員さ
              んたちと同じ空間で職務テストを
              受けさせてもらいました…</p>
              <MemberInfo>
                <p className='txt'>A.Hさん（26歳 女性）</p>
                <p className='txt'>#営業</p>
              </MemberInfo>
            </Member>
            <Member>
              <img src="https://www.workport.co.jp/cmn4/img/topVoice_img4.png" alt="" />
              <p className='title'>じっくり自分に合う職場をみ
              つけたいという希望が叶いま
              した！</p>
              <p className='txt'>複数の社員さんと面接をさせても
              らえたほか、オフィスに招いてい
              ただき、実際に働いている社員さ
              んたちと同じ空間で職務テストを
              受けさせてもらいました…</p>
              <MemberInfo>
                <p className='txt'>A.Hさん（26歳 女性）</p>
                <p className='txt'>#営業</p>
              </MemberInfo>
            </Member>
            <Member>
              <img src="https://www.workport.co.jp/cmn4/img/topVoice_img4.png" alt="" />
              <p className='title'>じっくり自分に合う職場をみ
              つけたいという希望が叶いま
              した！</p>
              <p className='txt'>複数の社員さんと面接をさせても
              らえたほか、オフィスに招いてい
              ただき、実際に働いている社員さ
              んたちと同じ空間で職務テストを
              受けさせてもらいました…</p>
              <MemberInfo>
                <p className='txt'>A.Hさん（26歳 女性）</p>
                <p className='txt'>#営業</p>
              </MemberInfo>
            </Member>
            <Member>
              <img src="https://www.workport.co.jp/cmn4/img/topVoice_img4.png" alt="" />
              <p className='title'>じっくり自分に合う職場をみ
              つけたいという希望が叶いま
              した！</p>
              <p className='txt'>複数の社員さんと面接をさせても
              らえたほか、オフィスに招いてい
              ただき、実際に働いている社員さ
              んたちと同じ空間で職務テストを
              受けさせてもらいました…</p>
              <MemberInfo>
                <p className='txt'>A.Hさん（26歳 女性）</p>
                <p className='txt'>#営業</p>
              </MemberInfo>
            </Member>
          </TopVoiceList>
        </TopVoice>
        <LargeButton><ButtonNormal>
            <span>{t("top.button.tenshoku_seikosha_no_koe_ichiran")}</span></ButtonNormal></LargeButton>
      </VoiceSection>
    </>
  )
}
