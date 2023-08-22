import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FormBox } from "../../registrationPage/Basic";
import { FooterContainer } from "../../GlobalStyle";
import Breadcrumbs from "../../components/Breadcrumbs";
import { schema } from "../../components/MyForm";
import axios from "axios";
import { MediumButton, ButtonSignup } from "../../components/ButtonStyled";
import {
  InputComponents,
  TextAreaComponents,
  SelectComponents,
  InputNameComponents,
  CheckBoxComponents,
  ModalComponents,
  ModalChild,
  ModalChildProps,
} from "../../components/MyForm";
import { DISPLAY_CT } from "../../GlobalStyle";
import ReInfoModal from "../../components/Modal/ReInfoModal";

export const ValidationInquiry = styled.div`
  position: absolute;
  color: #e00808;
  font-size: 1.4rem !important;
  font-weight: bold;
  left: 300px;
  bottom: -23px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    left: 0%;
    bottom: -24px !important;
  }
`;
export const InquiryContent = styled.div`
  background: #f4f6f7;
  padding-bottom: 50px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    width: 100%;
  }
`;
export const TitleTop = styled.div`
  margin: 0 auto;
  width: 100%;
  margin: 0 auto;
  .headerText {
    font-weight: bold;
    font-size: 3rem !important;
  }
`;
export const TitleBottom = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 40px;
`;
export const DlTag = styled.dl`
  display: flex;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    display: block;
    p {
      width: auto;
      margin-right: 10px;
    }
    .inputTitle {
      margin-bottom: 10px;
      transition: opacity 0.4s ease-out, all 0.4s ease-out;
      @media screen and (max-width: ${DISPLAY_CT}) {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
`;
export const SpanTag = styled.span`
  display: block;
  width: 280px;
  font-weight: bold;
`;
export const InputTitle = styled.div`
  padding: 13px;
  font-size: 1.4rem;
  display: flex;
  width: 300px;
  align-items: center;
  margin-bottom: 10px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
export const RegisterButtonYellow = styled.button`
  display: block;
  width: 286px;
  margin: 0 auto;
  padding: 1.3rem 0.5rem;
  background: #f86608;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and(max-width: ${DISPLAY_CT}) {
    margin: 0 20px 60px 20px;
    width: auto;
    border-radius: 2px;
  }
`;
export const Validator = styled.div`
  position: relative;
  width: 100%;
`;
export const Designed = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f4f6f7;
`;
export const ModalStyle = styled.div`
  display: flex;
  background-color: rgb(255 250 250);
  font-size: 1.6rem;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  position: relative;
`;
//modal
function JobSeekers() {
  const { t } = useTranslation();
  const [data, setFormData] = useState({
    title: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    content: "",
  });
  const [postAPI, setPostAPI] = useState({
    data: {
      ...data,
    },
  });
  useEffect(() => {
    setPostAPI({
      data: {
        ...data, // formdata のスタンドアロン コピーを作成する
      },
    });
  }, [data]);
  const [checkBoxValue, setCheckBoxValue] = useState<boolean>(
    sessionStorage.getItem("checkBox") === "true" || false
  );
  //Validateをチェックした、エラーメッセージ
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [ContentError, setContentError] = useState<string | null>(null);
  const [CheckBoxError, setCheckBoxError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<String | null>(null);
  const [titleError, setTitleError] = useState<String | null>(null);

  const [modal, setModal] = useState<boolean>(false);
  const [notificationModal, setNotification] = useState<boolean>(false);
  //State FormDataをsession storageから取得した値で更新します
  useEffect(() => {
    const storedTitle = sessionStorage.getItem("title");
    const storedFirstName = sessionStorage.getItem("first_name");
    const storedLastName = sessionStorage.getItem("last_name");
    const storedEmail = sessionStorage.getItem("email");
    const storedPhone = sessionStorage.getItem("phone");
    const storedContent = sessionStorage.getItem("content");
    setFormData((prevFormData) => ({
      ...prevFormData,
      first_name: storedFirstName || "",
      last_name: storedLastName || "",
      email: storedEmail || "",
      phone: storedPhone || "",
      content: storedContent || "",
      title: storedTitle || "",
    }));
  }, []);
  //"handleValidati"Validateをチェック
  const handleValidation = async (inputName: any, inputValue: any) => {
    try {
      await schema.validateAt(inputName, { [inputName]: inputValue });
      if (inputName === "first_name") {
        setFirstNameError("");
      } else if (inputName === "title") {
        setTitleError("");
      } else if (inputName === "last_name") {
        setLastNameError("");
      } else if (inputName === "email") {
        setEmailError("");
      } else if (inputName === "phone") {
        setPhoneError("");
      } else if (inputName === "content") {
        setContentError("");
      } else if (inputName === "checkBox") {
        setCheckBoxError("");
      }
    } catch (error: any) {
      if (inputName === "first_name") {
        setFirstNameError(error.message);
      } else if (inputName === "title") {
        setTitleError(error.message);
      } else if (inputName === "last_name") {
        setLastNameError(error.message);
      } else if (inputName === "email") {
        setEmailError(error.message);
      } else if (inputName === "phone") {
        setPhoneError(error.message);
      } else if (inputName === "content") {
        setContentError(error.message);
      } else if (inputName === "checkBox") {
        setCheckBoxError(error.message);
      }
    }
  };
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setCheckBoxValue(checked);
    sessionStorage.setItem("checkBox", checked ? "true" : "false");
    console.log(postAPI);
  };
  const handleBlur = async (event: any) => {
    console.log(modal);
    const { name, value } = event.target;
    sessionStorage.setItem(name, value);
    await handleValidation(name, value);
  };
  const handleSubmit = async (event: any) => {
    setModal(false);
    setNotification(true);
    event.preventDefault();
    const apiUrl = "https://lusty.asia:1443/api/contacts";
    axios
      .post(apiUrl, postAPI)
      .then((response) => {
        console.log("送信できました", response.data);
      })
      .catch((error) => {
        console.error("送信できませんでした", error);
      });
  };
  const options = [
    { value: "", label: "選択して下さい。" },
    {
      value: "転職相談サービスに関するお問い合わせ",
      label: "転職相談サービスに関するお問い合わせ",
    },
    {
      value: "転職コンシェルジュの変更について",
      label: "転職コンシェルジュの変更について",
    },
    { value: "その他", label: "その他" },
  ];
  const confirmation = (event: any) => {
    event.preventDefault();
    console.log("test");
  };
  const beforeSubmit = async (event: any) => {
    event.preventDefault();
    await handleValidation("title", data.title);
    await handleValidation("first_name", data.first_name);
    await handleValidation("last_name", data.last_name);
    await handleValidation("phone", data.phone);
    await handleValidation("email", data.email);
    await handleValidation("content", data.content);
    await handleValidation("checkBox", checkBoxValue);
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      ContentError ||
      phoneError ||
      titleError ||
      CheckBoxError ||
      !data.title ||
      !data.phone ||
      !data.email ||
      !data.content ||
      !checkBoxValue ||
      !data.phone
    ) {
    } else {
      setModal(true);
    }
  };
  const modalChildPropsList: ModalChildProps[] = [
    {
      componentsName: t("form.o_toiawase_koumoku"),
      value: data.title,
      id: "title",
      setModal: setModal,
    },
    {
      componentsName: t("form.sei"),
      value: data.first_name,
      id: "firstName",
      setModal: setModal,
    },
    {
      componentsName: t("form.mei"),
      value: data.last_name,
      id: "LastName",
      setModal: setModal,
    },
    {
      componentsName: t("form.denwa_bangou"),
      value: data.phone,
      id: "phone",
      setModal: setModal,
    },
    {
      componentsName: t("form.meru_adoresu"),
      value: data.email,
      id: "lastNameKana",
      setModal: setModal,
    },
    {
      componentsName: t("form.o_toiawase_naiyou"),
      value: data.content,
      id: "content",
      setModal: setModal,
    },
  ];
  return (
    <form onSubmit={confirmation}>
      {/* Modal */}
      <ModalComponents
        status={modal}
        showModal={setModal}
        onFunction={handleSubmit}
        heights="60"
      >
        {modalChildPropsList.map((modalChildProps, index) => (
          <ModalChild key={index} {...modalChildProps} />
        ))}
      </ModalComponents>
      <ReInfoModal
        status={notificationModal}
        showModal={setNotification}
        onFunction={() => setNotification(false)}
      >
        <div style={{ margin: "auto 0", lineHeight: "2" }}>
          <h1>
            受付ました。確認メールをお送りしています。
            <br /> ３営業日でご返事いたします
          </h1>
        </div>
      </ReInfoModal>
      {/*  */}
      <Breadcrumbs></Breadcrumbs>
      <Designed></Designed>
      <InquiryContent>
        <FooterContainer>
          <TitleTop>
            <h1 className="headerText">{t("common.otoiawase")}</h1>
          </TitleTop>
          <TitleBottom>{t("common.chyouto_saiyo")}</TitleBottom>
          <FormBox>
            <Wrapper>
              <SelectComponents
                componentsName={t("form.o_toiawase_koumoku")}
                important
                register="title"
                options={options}
                onBlur={handleBlur}
                onChange={handleChange}
                value={data.title}
                className="inputText410px"
                name="title"
                id="title"
              />
              <ValidationInquiry>
                <div>{titleError && <p>{titleError}</p>}</div>
              </ValidationInquiry>
            </Wrapper>
            <Wrapper>
              <InputNameComponents
                important
                componentsName={t("form.onamae")}
                firstRegister="first_name"
                lastRegister="last_name"
                nameFirst="first_name"
                nameLast="last_name"
                valueFirst={data.first_name}
                valueLast={data.last_name}
                nameId="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                firstId="firstName"
                lastId="lastName"
              />
              <ValidationInquiry>
                <div>{firstNameError && <p>{firstNameError}</p>}</div>
              </ValidationInquiry>
              <ValidationInquiry style={{ left: "71%" }}>
                <div>{lastNameError && <p>{lastNameError}</p>}</div>
              </ValidationInquiry>
            </Wrapper>
            <Wrapper>
              <InputComponents
                important
                onBlur={handleBlur}
                onChange={handleChange}
                componentsName={t("form.denwa_bangou")}
                register="phone"
                name="phone"
                id="phone"
                value={data.phone}
              />
              <ValidationInquiry>
                <div>{phoneError && <p>{phoneError}</p>}</div>
              </ValidationInquiry>
            </Wrapper>
            <Wrapper>
              <InputComponents
                important
                onChange={handleChange}
                onBlur={handleBlur}
                componentsName={t("form.meru_adoresu")}
                register="email"
                name="email"
                id="email"
                value={data.email}
              />
              <ValidationInquiry>
                <div>{emailError && <p>{emailError}</p>}</div>
              </ValidationInquiry>
            </Wrapper>
            <Wrapper>
              <TextAreaComponents
                title={t("form.o_toiawase_naiyou")}
                register="content"
                onBlur={handleBlur}
                onChange={handleChange}
                value={data.content}
                name="content"
              />
              <ValidationInquiry>
                <div>{ContentError && <p>{ContentError}</p>}</div>
              </ValidationInquiry>
            </Wrapper>
            <Wrapper>
              <CheckBoxComponents
                componentsName={t("form.kojin_jouhou_no_toriatsukai_ni_tsuite")}
                register="checkBox"
                id="checkBox"
                name="checkBox"
                checked={checkBoxValue}
                className="checkBox"
                onChange={handleCheckBoxChange}
                onBlur={handleBlur}
                value={checkBoxValue}
                content={
                  <>
                    お問い合わせの入力内容確認の前に、「個人情報の取扱いについて」をご一読の上、
                    <br />
                    同意いただけますようお願いいたします。
                    <br />
                    <br />
                    2023年4月7日改定
                    <br />
                    2004年4月5日制定
                    <br />
                    <br />
                    ご提供いただく個人情報のお取り扱いの方針について、以下の通り通知いたします。
                    <br />
                    <br />
                    ＜事業者の氏名または名称＞
                    <br />
                    株式会社ワークポート
                    <br />
                    <br />
                    ＜個人情報管理責任者＞
                    <br />
                    株式会社ワークポート　経営管理グループ
                    個人情報保護管理者　中野晶
                    <br />
                    <br />
                    ＜個人情報の利用目的＞
                    <br />
                    お問い合わせに関するご返答を差し上げるため。
                    <br />
                    <br />
                    ＜個人情報保護方針＞
                    <br />
                    本ホームページの個人情報保護方針をご覧ください。
                    <br />
                    <br />
                    ＜個人情報を入力するにあたっての注意事項＞
                    <br />
                    当社に個人情報を提供されるかどうかは任意によるものです。
                    <br />
                    ただし、必要な項目をいただけない場合、適切な対応ができない場合があります。
                    <br />
                    <br />
                    ＜開示対象個人情報の開示等および問い合わせ窓口について＞
                    <br />
                    ご本人からの求めにより、当社が保有する開示対象個人情報の利用目的の通知、
                    <br />
                    開示、内容の訂正・追加または削除、利用の停止・消去および第三者への提供の
                    <br />
                    停止（「開示等」といいます。）を受け付けております。
                    <br />
                    開示等を受け付ける窓口は、以下の「個人情報苦情及び相談窓口」をご覧下さい。
                    <br />
                    <br />
                    ＜ワークポートグループの個人情報苦情及び相談窓口＞
                    <br />
                    株式会社ワークポート経営管理グループ 個人情報保護管理者
                    中野晶
                    <br />
                    〒141-0032 東京都品川区大崎1-2-2
                    アートヴィレッジ大崎セントラルタワー6F・9F
                    <br />
                    お電話によるお問い合わせ：0120-77-1049
                    <br />
                    受付時間：月～金 10:00～17:00（祝祭日を除く）
                    <br />
                    e-mailによるお問い合わせ：privacy@workport.jp
                    <br />
                    <br />
                    株式会社ワークポート
                    <br />
                    代表取締役社長　林 徹郎
                  </>
                }
              />
              <ValidationInquiry>
                <div>{CheckBoxError && <p>{CheckBoxError}</p>}</div>
              </ValidationInquiry>
            </Wrapper>
          </FormBox>
          <MediumButton
            style={{ margin: "0 auto", marginTop: "30px" }}
            onClick={beforeSubmit}
          >
            <ButtonSignup>
              <span>{t("form.nyuuryoku_naiyou_o_kakunin_suru")}</span>
            </ButtonSignup>
          </MediumButton>
        </FooterContainer>
      </InquiryContent>
    </form>
  );
}
export default JobSeekers;
