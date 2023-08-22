import { ReasonBox, TopReason, TopReasonList, Box, BoxIn, BoxInItem, Textp, Add, Picture} from '../../styles/homeStyles/topReasonBox'
import { ButtonSignup, LargeButton} from './../../components/ButtonStyled'
import { useTranslation } from 'react-i18next';

export const Reason = () => {
	const { t } = useTranslation();
  return(
    <>
      <ReasonBox>
				<TopReason>
					<h2>ワークポートが選ばれる理由</h2>
					<TopReasonList>
						<Box>
							<BoxIn>
								<BoxInItem>
									<p>転職決定人数</p>
									<Picture><img src="https://www.workport.co.jp/cmn4/svg/top_reason01.svg" alt="" /></Picture>
								</BoxInItem>
							</BoxIn>
							<Textp><p>ワークポートは求職者一人ひとりと誠実に向き合い、優れた提案力で転職決定人数においてNo.1を獲得。安心してお任せください。</p></Textp>
							<Add><p>※リクナビNEXT『GOOD AGENT RANKING ～2022年度下半期～』（2022年10月～2023年3月）にて、『転職決定人数部門　第1位』を受賞。</p></Add>
						</Box>
						<Box>
							<BoxIn>
								<BoxInItem>
									<p>国内拠点数</p>
									<Picture><img src="https://www.workport.co.jp/cmn4/svg/top_reason02.svg?date=20230703" alt="" /></Picture>
								</BoxInItem>
							</BoxIn>
							<Textp><p>北海道から沖縄まで、日本全国の転職希望者の皆様をサポートいたします。大手企業から地元企業、リモートワークの求人まで幅広く取り揃えております</p></Textp>
						</Box>
						<Box>
							<BoxIn>
								<BoxInItem>
									<p>転職相談実績</p>
									<Picture><img src="https://www.workport.co.jp/cmn4/svg/top_reason03.svg" alt="" /></Picture>
								</BoxInItem>
							</BoxIn>
							<Textp><p>実績豊富な転職活動のプロ（転職コンシェルジュ）が専属で対応。人材紹介業20年で培ったノウハウを余すことなくご提供いたします。</p></Textp>
						</Box>
					</TopReasonList>
				</TopReason>
				<LargeButton style={{height: '60px'}}><ButtonSignup><span>{t("top.button.tenshoku_sodan_sabisu_ni_moshikomu")}</span></ButtonSignup></LargeButton>
			</ReasonBox>
    </>
  )
}