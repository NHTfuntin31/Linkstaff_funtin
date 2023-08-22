import styled from "styled-components";
import { DISPLAY_LG } from "../../GlobalStyle";

export const ShainSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  margin: 25px auto;
  padding: 25px;
  gap: 50px;
`;

export const ShainHeading = styled.h2`
  display: flex;
  flex-wrap: wrap;
  width: ${DISPLAY_LG};
  height: 26px;
  padding: 0px 70.78px 0px 70.98px;
  justify-content: center;
  align-items: center;

  @media(max-width: ${DISPLAY_LG}){
    width: 450px;
  }
`;

export const ShainList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 450px;
  gap: 20px;

  @media (max-width: ${DISPLAY_LG}) {
    flex-wrap: wrap;
    padding-top: 0px;
    gap: 0px;
  }
`;

export const ShainItem = styled.div`
  width: 150px;
  height: 150px;
  align-items: center;

  @media (max-width: ${DISPLAY_LG}) {
    width: 115px;
    height: 100px;
    align-items: center;
    margin-bottom: 10px;
  img{
    width: 90%;
  }
  }
`;

export const TopShaintxt = styled.div`
  display: flex;
  width: ${DISPLAY_LG};
  height: 170px;
  align-items: center;
  flex-shrink: 0;
  p {
    color: #000;
    font-family: Noto Sans;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }
  @media(max-width: ${DISPLAY_LG}){
    width: 450px;
  }
`