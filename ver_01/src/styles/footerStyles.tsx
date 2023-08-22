import styled from 'styled-components'
import { DISPLAY_LG } from '../GlobalStyle'

export const FooterHeader = styled.div`
	font-size: 3rem;

`

export const FooterMain = styled.main`
	max-width: ${DISPLAY_LG};
	padding: 0px 15px;
	margin: 0 auto;
	background: white;
`


export const SectionContainer = styled.div`
  display: flex;
	flex-direction: column;
	padding:0 0 60px 10px;
h2 {
	font-size: 1.4rem;
	padding: 30px 0;
  font-weight:400;
}
h3 {
  font-size:1.3rem;
  padding: 30px 0;
  font-weight:400;
}
p {
	font-size: 1.2rem;
  font-weight:400;

}
`
export const HeaderContainer = styled.div`
  width: 100%;
  height: 164px;
  background: #f4f6f7;
  display: flex;
  align-items: center;
  h1 {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    font-size: 3rem;
    font-weight: bold;
    padding-left: 20px;
  }
`
