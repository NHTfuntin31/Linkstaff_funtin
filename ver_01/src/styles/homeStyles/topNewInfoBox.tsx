import styled from 'styled-components'
import { DISPLAY_LG } from '../../GlobalStyle'

export const NewInfoSection = styled.section`
  display: flex;
	justify-content: space-around;
	flex-direction: column;
  width: 100%;
  align-items: center;

  h2 {
    color: #000;
    text-align: center;
    font-size: 2.6rem;
    font-weight: 500;
    line-height: 26px;
  }
`
export const TopNewInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${DISPLAY_LG};
  margin: 50px auto;
  padding: 30px;
`
export const TopNewSwiper = styled.div`
  display: flex;
	justify-content: center;
  align-items: center;
  padding-top: 25px;
  width: 100%;
  height: 500px;
`
export const SwiperSwaper = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  height: 100%;
  max-width: ${DISPLAY_LG};
  flex: 1;
  overflow-x: scroll;
  scroll-behavior: smooth;

  @media(max-width: ${DISPLAY_LG}){
    gap: 5px;
  }
`
export const TopNewBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 451.56px;
  button {
    height: 100px;
    width: 40px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.2s ease-out;
    transition-delay: 0.2s;
    border: none;
    
    &.LeftBtn {
      margin-right: 30px;
    }
    &.RightBtn {
      margin-left: 30px;
    }

    @media(max-width: ${DISPLAY_LG}){
      &.LeftBtn {
        margin-right: 0px;
      }
      &.RightBtn {
        margin-left: 0px;
      }
    }
  }

  &:hover button {
    opacity: 1;
    transition-delay: 0.2s;
  }
`
export const GroupLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 210px;
  height: 331.56px;
  padding-bottom: 0px;

  &.fade-in {
    opacity: 1;
    transition: opacity 0.8s ease;
  }
  
  &.fade-out {
    opacity: 0;
    transition: opacity 0.8s ease;
  }
`
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 210px;
  height: 151.56px;
  flex-shrink: 0;
`
export const IMG = styled.div`
  display: flex;
  width: 210px;
  height: 126px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 15px;

  img {
    width: 210px;
    height: 131.5px;
    flex-shrink: 0;
  }
`
export const Term = styled.div`
  padding: 1px 14.78px 17px 0px;
  align-items: flex-start;
  width: 210px;
  gap: 2.39px;
  border-bottom: 1px solid #E3E3E3;

  p {
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 22.4px;
  }
`
export const Details = styled.div`
  display: inline-flex;
  height: 67.17px;
  margin-top: 15px;
  padding: 1px 3.05px 100px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  p {
    color: #000;
    font-size: 1.4rem;
    font-family: Noto Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 22.4px;
  }

  &.money {
    margin-top: 50px;
  }
`
export const TopNewBtn = styled.div`
  text-align: center;
  font-size: 1.6rem;

  button {
    border-radius: 4px;
    border: 1px solid #000;
    font-size: 1.2rem;
    background: #FFF;
    width: 320px;
    height: 60px;
    transition: background-color 0.5s ease, color 0.5s ease;

		&:hover {
			color: white;
			background-color: black;
  	}
  }
`