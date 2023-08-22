import styled from "styled-components";
import { DISPLAY_LG } from "../../GlobalStyle";

export const VoiceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 786.94px;
    h2 {
      color: #000;
      text-align: center;
      font-family: Noto Sans;
      font-size: 2.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
    }
`
export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;

  @media(max-width: ${DISPLAY_LG}){
    flex-wrap: wrap;
  }
`
export const TopVoice = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  max-width: ${DISPLAY_LG};
`
export const TopVoiceList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 393.94px;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;

  p.title,
  p.txt {
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  p.title {
    color: #000;
    font-family: Noto Sans;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  p.txt {
    color: #000;
    font-family: Noto Sans;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 25.2px;
  }
`
export const Member = styled.div`
  width: 220px;
  height: 353.94px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px;
  &:hover {
    cursor: pointer;
    p.title {
      color: #4df078;
    }
    p.txt {
      color: #4df078;
    }
  }

  img {
    margin: 10px auto;
  }

  @media(max-width: ${DISPLAY_LG}){
    flex: 0 0 220px;
  }
`
export const MemberInfo = styled.div`
  display: inline-flex;
  padding: 14px 67.88px 4px 0px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 8px;
`