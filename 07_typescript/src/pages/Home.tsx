import styled from 'styled-components'
import { useTranslation } from 'react-i18next';


const HeroContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	img {
		width: 100%;
	}
`

const MenuTab = styled.nav`
	height: 50px;
	max-width: 1024px;
	margin: 0 auto;
	padding: 20px;
	ul {
		display: grid;
		grid-template-columns: auto auto auto auto auto;
		height: 100%;
		align-items: center;
	}
	a {
		display: inline-block;
		text-align: center;
		width: 100%;
		position: relative;
		overflow: hidden;
		color: black;
		text-decoration: none;
		font-size: 1.5rem;
		&:hover {
			color: green;
			font-weight: bold;
		}
	 }
	 
	 a:after {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: green;
		transform: translate(-100%, 0);
		transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
		content: "";
	 }
	 
	 a:hover:after {
		transform: translate(0, 0);
	 }
	 li {
		list-style: none;
		padding: 0 10px;
		border-left: 1px solid lightgray;
		border-right: 1px solid lightgray;
	 }
	 li+li {
		border-left: 0;
	 }
`

const TopSection = styled.section`
	 width: 100%;
	 text-align: center;
`
const ReadSection = styled.section`
	 max-width: 776px;
	 margin: 20px auto;
	 display: grid;
	 grid-template-columns: 1fr 1fr;
	 font-size: 16px;
	 ul {
		list-style: inside;
	 }
	 span {
		color: green;
	 }
	 span:before {
		content: "・"
	 }
	 button {
		padding: 20px;
		border-radius: 4px;
		border: 1px solid black;
		background: white;
		transition: all 0.5s ease;
		font-weight: bold;
		&:hover {
			background: black;
			color: white;
		}
	 }
	 @media (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 10px;
		button {
			margin: 0 5px;
		}

	 }
`



const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<MenuTab>
				<ul>
					<li><a href="/search">{t('top.kyujin_wo_sagasu')}</a></li>
					<li><a href="#">{t('top.tenshoku_sodan_service')}</a></li>
					<li><a href="#">{t('top.tenshoku_oyakudachi_joho')}</a></li>
					<li><a href="#">{t('top.kaisha_joho')}</a></li>
					<li><a href="#">{t('top.otoiawase')}</a></li>
				</ul>
			</MenuTab>
			<HeroContainer>
				<img src="https://www.workport.co.jp/cmn4/img/mv_vol4n.webp" />
			</HeroContainer>
			<TopSection>
				<h2>ワークポートは、あなたのキャリアを一緒に考え、<br />ベストな企業、仕事を見つける転職エージェントです。</h2>
			</TopSection>
			<ReadSection>
				<ul>
					<li><span>転職活動のプロに相談したい</span></li>
					<li><span>非公開求人も含めて、様々な求人を見たい</span></li>
					<li><span>求人検索や面接日程調整を代行してほしい</span></li>
				</ul>
				<button>転職相談サービスについて詳しく知りたい</button>
			</ReadSection>
		</>

	)
}

export default Home