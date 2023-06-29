import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/Store'
import { useTranslation } from 'react-i18next';


const Container = styled.header`
  display: flex;
  max-width: 1024px;
  height: 60px;
  margin: 0 auto;
  background: white;
  padding: 0 20px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 19px;
    vertical-align: bottom;
  }
`
const NavContainer = styled.nav`
  margin-left: auto;
  ul {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 10px;
  }
  a {
    display: flex;
    align-items: center;
    color: black;
    font-size: 13px;
    &:hover {
      opacity: 0.5;
    }
  }
  .btn_apply {
    font-size: 1.2rem;
    background: #F86609;
    color: white;
    border-radius: 4px;
    height: 40px;
    padding: 0 15px;
    &:hover {
      opacity: 0.8;
    }
  }
  Icon {
    height: 30px;
  }
`

const LanguageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 5px;

  button{
    height: 20px;
  }
`

const Navbar = () => {
  const user = useSelector((state:RootState) => state.auth.user.email);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <LogoContainer>
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </LogoContainer>
      <LanguageContainer>
        <button onClick={() => changeLanguage('ja')}>日本語</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </LanguageContainer>
      <NavContainer>
        <ul>
          <li><a href=""><Icon icon="la:building" height="20" /><span>{t('nav.chutosaiyo_wo_okangaenokigyousama')}</span></a></li>
          <li>{!user ? <Link to="/login"><Icon icon="octicon:person-16" height="20" /><span>{t('nav.login')}</span></Link>
          :<Link to="/member"><Icon icon="octicon:person-16" height="20" /><span>{t('nav.my_page')}</span></Link>}</li>
          <li><a href="" className="btn_apply">{t('nav.tenshokusodanservice_omoshikomi')}</a></li>
        </ul>
      </NavContainer>
    </Container>
  )
}

export default Navbar
