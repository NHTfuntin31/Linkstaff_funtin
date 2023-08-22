import styled,{ keyframes } from 'styled-components'

const marquee = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;
export const AchiBox = styled.section`
  display: flex;
  width: 100%;
  padding: 70px 0px 90px 0px;
  justify-content: center;
  align-items: center;
`
export const TopAchi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 166px;
  h2 {
    color: #000;
    text-align: center;
    font-size: 2.6rem;
    font-weight: 500;
    line-height: 26px;
  }
`
export const Swiper = styled.div`
  display: flex;
  width: 100%;
  padding-top: 60px;
  justify-content: center;
  align-items: center;
`
export const SwiperMini = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  ul {
    display: flex;
    align-items: center;
    animation: ${marquee} 30s linear infinite; /* Tăng thời gian animation thành 30s */
    list-style: none;
    gap: 30px;
  }
`
export const Image = styled.img`
  width: 110px;
  height: auto;
`