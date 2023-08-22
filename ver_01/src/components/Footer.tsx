import { Link } from "react-router-dom";
import styled from "styled-components";
import { DISPLAY_MD } from "../GlobalStyle";
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  height: 80px;
  background: #f4f6f7;
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  @media (max-width: ${DISPLAY_MD}) {
	padding: 8px 20px;
	margin: 10px 0;
}
  ul {
    display: flex;
    padding: 34px;
    height: 100%;
    align-items: center;
    color: white;
	-webkit-justify-content: center;
	justify-content: center;
	@media (max-width: ${DISPLAY_MD}) {
		flex-wrap: wrap;
		margin: 10px 0;
	}
  }
`;

const ListItem = styled.li`
  display: inline-block;
  line-height: 1;
  border-right: 1px solid #000;
  padding: 0 10px;
  &:last-child {
    border: none;
  }
  a {
    color: black;
    font-size: 14px;
    font-weight: 400;
    display: block;
    line-height: 1;
    transition: opacity 0.4s ease-out, all 0.4s ease-out;
    &:hover {
      color: #26a24c;
      text-decoration: underline;
    }
    @media (max-width: ${DISPLAY_MD}) {
      margin: 5px 0;
      padding: 0 8px px;
      font-size: 12px;
    }
  }
`;

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ul>
        <ListItem>
          <Link to="/information">
            {t("common.kojin_johono_toriatsukaini_tsuite")}
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/privacy">{t("common.kojin_joho_hogohoshin")}</Link>
        </ListItem>
        <ListItem>
          <Link to="/agree">{t("common.riyokiyaku")}</Link>
        </ListItem>
        <ListItem>
          <Link to="/accessibility">{t("common.suisho_kankyo")}</Link>
        </ListItem>
        <ListItem>
          <Link to="/jobSeekers">{t("top.otoiawase")}</Link>
        </ListItem>
        <ListItem>
          <Link to="/">{t("top.unei_gaisha")}</Link>
        </ListItem>
        <ListItem>
          <Link to="/prf">Test</Link>
        </ListItem>
      </ul>
    </Wrapper>
  );
};

export default Footer;
