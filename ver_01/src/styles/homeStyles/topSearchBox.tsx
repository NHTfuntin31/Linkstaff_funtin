import styled from "styled-components";
import { DISPLAY_LG, DISPLAY_MD } from "../../GlobalStyle";

export const SearchBox = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   max-width: ${DISPLAY_LG};
   margin: 25px auto;
   padding: 30px;
`;
export const TextSearch = styled.div`
   display: flex;
   align-items: center;
   margin: 30px 0px;
   width: 100%;

   @media (max-width: ${DISPLAY_LG}) {
      flex-direction: column;
      gap: 20px;
   }
`;
export const Input = styled.input`
   width: 900px;
   height: 60px;
   padding: 16.5px 21px 15.5px 21px;
   font-size: 1.6rem;
   border-radius: 4px;
   border: 1px solid #e1e6ea;
   background: #fff;

   @media (max-width: ${DISPLAY_LG}) {
      width: 100%;
      height: 45px;
   }
`;
export const Button = styled.button`
  width= 60px;
  height= 60px;
  margin-left: -15px;
  color: white;
  background: #1da341;
  border: none;
  transition: background-color 0.5s ease, color 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: #6ded8f;
  }

  &.txt{
    display: none;
  }

  @media(max-width : ${DISPLAY_LG}){
    &.ic{
      display: none;
    }
    &.txt{
      display: block;
      width: 100%;
      height: 45px;
      margin-left: 5px;
      border: solid 1px #1da341;
      boder-radius: 4px;
    }
  }
`;
export const ButtonList = styled.div`
   width: 945px;
   display: flex;
   margin-right: 20px;
   justify-content: space-between;

   @media (max-width: ${DISPLAY_LG}) {
      margin-right: 0px;
      width: 100%;
      gap: 20px;
   }
`;
export const SearchAria = styled.section`
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   align-items: center;
   width: 100%;
   max-width: ${DISPLAY_LG};
   margin: 25px auto;
   padding: 30px;
`;
export const H2 = styled.h2`
   color: #000;
   text-align: center;
   font-size: 2.6rem;
   font-weight: 500;
   line-height: 26px;
   margin-bottom: 18px;
   padding-bottom: 20px;
`;
export const P = styled.p`
   color: #000;
   font-size: 1.4rem;
   font-weight: 400;
   line-height: 25.2px;
   margin: 18px 0;
`;
export const ListButton = styled.div`
   display: grid;
   grid-template-columns: repeat(8, 84px);
   gap: 25px;

   @media (max-width: ${DISPLAY_LG}) {
      grid-template-columns: repeat(6, 84px);
   }
   @media (max-width: ${DISPLAY_MD}) {
      grid-template-columns: repeat(4, 84px);
   }
`;

export const SearchIndustry = styled.section`
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   width: 100%;
   max-width: ${DISPLAY_LG};
   margin: 25px auto;
   padding: 30px;
`;
export const TopType = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: ${DISPLAY_LG}){
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const TopLink = styled.div`
    display: block;
    width: 450px;
    height: 87px;
    padding: 10px;
    &:nth-child(1),
    &:nth-child(2) {
      border-top: 1px solid #e1e6ea;
    }
    p {
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    border-bottom: 1px solid #e1e6ea;
    span {
      display: inline-flex;
      padding: 4px 10px;
      align-items: flex-start;
      border-radius: 2px;
      background: #000;

      color: #FFF;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 14px;
    }
    p:nth-child(2) {
    padding-top: 10px;
    color: #000;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 21px;
    }

    &:hover {
      cursor: pointer;
      p {
        color: #4df078;
      }
    }
    @media(max-width: ${DISPLAY_LG}){
      &:nth-child(2) {
        border-top: none;
      }
    }
    @media(max-width: ${DISPLAY_MD}){
      width: 400px;
  }
`;
export const SpecialLink = styled.div`
    display: flex;
    width: 470px;
    height: 90px;
    padding: 30px 168.584px 30px 16px;
    margin-bottom: 20px;
    align-items: center;
    gap: 15px;
    flex-shrink: 0;
    border: 1px solid #E1E6EA;
    transition: box-shadow 0.5s;
    background: #fff url("https://www.workport.co.jp/cmn4/img/top_img9.jpg") no-repeat right center;
    a {
      color: #000;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 21px;
      transition: color 0.5s ease;
    } 

		&:hover {
      cursor: pointer;
      a {
        color: #4df078;
      }
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  	}

    @media(max-width: ${DISPLAY_MD}){
      width: 400px;
    }
}
`;
