import styled from "styled-components";
import { DISPLAY_LG } from "../../GlobalStyle";

export const ServiceBox = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${DISPLAY_LG};
  margin: 25px auto;
  padding: 25px;
  gap: 50px;
`
export const ServiceList = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media(max-width: ${DISPLAY_LG}){
    flex-direction: column;
    gap: 25px;
  }
`
export const Step = styled.div`
  .text_step {
    gap: 10px;
    padding: 5px;
  }
  @media(max-width: ${DISPLAY_LG}){
    display: flex;
  }
`
export const Img = styled.div`
width: 35%;
@media(max-width: ${DISPLAY_LG}){
  img {
    width: 90%;
  }
}
`
export const P = styled.p`
display: block;
  color: #000;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: -0.9px;

&.top {
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 18px;
  padding-top: 30px;
  padding-bottom: 30px;
}
@media(max-width: ${DISPLAY_LG}){
  line-height: 0px;
  &.top {
    line-height: 0px;
  }
}
`