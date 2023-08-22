import styled from "styled-components";
import {
   ButtonLogin,
   LargeButton,
} from "../ButtonStyled";
import { useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { UserLogin } from "../../api/UserApi";

const Modal = styled.div`
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   z-index: 8999;
   background: #000;
   opacity: 0.6;
`;

const ModalSection = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   padding: 30px;
   z-index: 9999;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   width: 800px;
   background: #fff;
`;

const ModalMain = styled.div`
   display: block;
   padding: 5px;
   p {
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      padding-bottom: 30px;
   }
   #modal-btn {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 20px;
   }
`;
export const Box = styled.div`
   width: 520px;
   background: #ffffff;
   padding: 30px;
`;
export const BoxHeader = styled.div`
   h2 {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.4;
      padding: 0 0 0 13px;
      border-left: 4px solid #26a24c;
      box-sizing: border-box;
   }
`;

const BoxBody = styled.div`
   margin-top: 30px;
   .registerHeader {
      font-size: 14px;
      span {
         display: block;
         margin-bottom: 10px;
      }
   }
   .registerBody {
      font-size: 12px;
      margin-bottom: 20px;
      span {
         display: block;
      }
   }
   .registerBottom {
      font-size: 12px;
      font-weight: 1000;
      div {
         margin-bottom: 20px;
      }
   }
`;
export const InputField = styled.div`
   display: flex;
   font-size: 14px;
   margin-top: 40px;
   strong {
      margin: auto 0;
      width: 200px;
   }
   input {
      width: 300px;
      height: 50px;
      background: #fff;
      font-size: 13px;
      padding: 0 20px;
      border-radius: 4px;
      border: 1px solid #e1e6ea;
      box-shadow: none;
   }
`;
const Remember = styled.div`
   margin-top: 60px;
   font-weight: 700;
   font-size: 11px;
   .remember {
      position: relative;
      .checked {
         position: absolute;
         color: white;
         background: black;
         left: 30%;
      }
      .nonCheck {
         position: absolute;
         left: 30%;
      }
      label {
         position: absolute;
         left: 36%;
         top: 2px;
      }
   }
`;
const Information = styled.div`
   width: 90%;
   font-size: 11px;
   font-weight: 700;
   margin: 100px auto 0;
`;
export const BoxBottom = styled.div`
   margin-top: 35px;
   .forgot {
      margin: 35px 0 10px 0;
      text-align: center;
   }
`;
export const LinkButton = styled.span`
   font-size: 11px;
   font-weight: 700;
   color: #26a24c;
   a {
      color: #26a24c;
   }
   &:hover {
      cursor: pointer;
      text-decoration: underline;
   }
`;
type LoginModalProps = {
   title: string;
   status: boolean;
   showModal: any;
   handleCheckLoginSuccess: any
   onFunction?: () => void;
};
const LoginModal: React.FC<LoginModalProps> = ({
   status,
   showModal,
   title,
   handleCheckLoginSuccess
}) => {
   const { t } = useTranslation();
   const [identifier, setIdentifier] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [rememberLogin, setRememberLogin] = useState<boolean>(false);
   const [modalCheck] = useState<boolean>(true);
   const handleLogin = () => {
      UserLogin(identifier, password, rememberLogin, navigate, dispatch, modalCheck, showModal,handleCheckLoginSuccess);
   };
   const handleOpenWindow = (e: any) => {
      const baseUrl = window.location.origin;
      if (e.target.id == "service") {
         window.open(`${baseUrl}/agree`, "_blank");
      } else {
         window.open(`${baseUrl}/information`, "_blank");
      }
   };

   return (
      <>
         {status && (
            <>
               <Modal onClick={() => showModal(false)} />
               <ModalSection>
                  <ModalMain>
                     <p>
                        {title}
                        <br />
                        ログインが必要です。
                     </p>
                     <Box>
                        <BoxBody>
                           <InputField>
                              <strong>{t("login.email")}</strong>
                              <input
                                 type="text"
                                 value={identifier}
                                 onChange={(e) => setIdentifier(e.target.value)}
                              />
                           </InputField>
                           <InputField>
                              <strong>{t("login.password")}</strong>
                              <input
                                 type="password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                              />
                           </InputField>
                           <Remember>
                              <div className="remember">
                                 <Icon
                                    icon={
                                       rememberLogin
                                          ? "mdi:checkbox-outline"
                                          : "mdi:checkbox-blank-outline"
                                    }
                                    rotate={2}
                                    hFlip={true}
                                    vFlip={true}
                                    width={20}
                                    height={20}
                                    className={
                                       rememberLogin ? "checked" : "nonCheck"
                                    }
                                    onClick={() =>
                                       setRememberLogin(!rememberLogin)
                                    }
                                    id="rememberLogin"
                                 />
                                 <label
                                    onClick={() =>
                                       setRememberLogin(!rememberLogin)
                                    }>
                                    {t("login.remember_login")}
                                 </label>
                              </div>
                           </Remember>
                           <Information>
                              <div className="information">
                                 「
                                 <LinkButton
                                    id="service"
                                    onClick={(e) => handleOpenWindow(e)}>
                                    {t("login.service")}
                                 </LinkButton>
                                 ・
                                 <LinkButton
                                    id="information"
                                    onClick={(e) => handleOpenWindow(e)}>
                                    {t("login.information")}
                                 </LinkButton>
                                 」{t("login.agree")}
                              </div>
                           </Information>
                        </BoxBody>
                        <BoxBottom>
                           <LargeButton
                              onClick={() => handleLogin()}
                              style={{ margin: "0 auto" }}>
                              <ButtonLogin>
                                 <span>{t("login.login_button")}</span>
                              </ButtonLogin>
                           </LargeButton>
                           <div className="forgot">
                              <Link to="/reset-password">
                                 <LinkButton>
                                    {t("login.forgot_password")}
                                 </LinkButton>
                              </Link>
                           </div>
                        </BoxBottom>
                     </Box>
                  </ModalMain>
               </ModalSection>
            </>
         )}
      </>
   );
};

export default LoginModal;
