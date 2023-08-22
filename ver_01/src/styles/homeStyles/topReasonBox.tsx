import styled from 'styled-components'
import { DISPLAY_LG } from '../../GlobalStyle'

export const ReasonBox = styled.section`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`
export const TopReason = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	flex-direction: column;
	align-items: center;
	gap: 34px;
`
export const TopReasonList = styled.div`
	display: flex;
	width: 100%;
	height: 428px;
	justify-content: center;
	align-items: flex-start;
	gap: 35px;
	@media(max-width : ${DISPLAY_LG}){
		flex-direction: column;
		align-items: center;
		height: 950px;
	}
`
export const Box = styled.div`
	width: 310px;
	height: 428px;
	@media(max-width: ${DISPLAY_LG}){
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 30px;
		width: 100%;
	}
	
`
export const BoxIn = styled.div`
	display: inline-flex;
	width: 100%;
	padding: 40px 80px;
	justify-content: center;
	align-items: center;
	
	background: #094;
`
export const BoxInItem = styled.div`
	display: flex;
	padding-bottom: 0px;
	flex-direction: column;
	align-items: center;
	gap: 12.8px;

		p {
			color: #FFF;
			text-align: center;
			font-size: 2.4rem;
			font-family: A-OTF Ryumin Pro;
			font-style: normal;
			font-weight: 550;
			line-height: 28.8px;
		}
`
export const Textp = styled.div`
	display: flex;
	width: 310px;
	height: 84px;
	padding: 10px 2px 4px 0px;
	justify-content: center;
	align-items: center;

	p {
		height: 76px;
		color: #000;
		font-size: 1.4rem;
		font-weight: 400;
		line-height: 28px;
	}

	@media(max-width: ${DISPLAY_LG}){
		padding: 0 30px;
		width: 100%;
	}
`
export const Add = styled.div`
	display: flex;
	width: 303.45px;
	display: inline-flex;
	padding: 13px 7px 3px 0px;
	align-items: center;

	p {
		height: 66px;
		color: #909090;
		font-size: 1.2rem;
		font-weight: 500;
		line-height: 24px;
	}
	@media(max-width: ${DISPLAY_LG}){
		padding: 0 30px;
		width: 100%;
	}
`
export const Picture = styled.div`

	width: 146px;
	height: 47.88px;
	@media(max-width : ${DISPLAY_LG}){
		display: flex;
		width: 65%;
		justify-content: center;
		flex-direction: column;
		align-items: center;

		img {
			width: 65%;
		}
	}
`
