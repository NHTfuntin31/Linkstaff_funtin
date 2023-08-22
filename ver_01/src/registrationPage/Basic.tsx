import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { schema } from "../components/MyForm";
import { FooterContainer } from "../GlobalStyle";
import styled from "styled-components";
import axios from "axios";
import React, { useState, ChangeEvent, useEffect } from "react";
import { MyForm } from "../components/MyForm";
import { Tr } from "../components/MyForm";
import { Th } from "../components/MyForm";
import { Label } from "../components/MyForm";
import { Validation } from "../components/MyForm";
import { DISPLAY_CT } from "../GlobalStyle";
import {
  InputComponents,
  NameKanaComponents,
  DateComponents,
  SelectComponents,
  CreatedDateComponents,
  ModalComponents,
  ModalChild,
  ModalChildProps,
} from "../components/MyForm";
import {
  MediumButton,
  ButtonSignup,
  ButtonNormal,
} from "../components/ButtonStyled";
import ReInfoModal from "../components/Modal/ReInfoModal";
import { Link } from "react-router-dom";
// import Resume from "./Resume";
// import { baseAPI } from "../global/global";

const BasicContent = styled.div`
  padding-bottom: 50px;
  background: #f4f6f7;
`;
const Wrapper = styled.div`
  display: flex;
  padding-bottom: 0px !important;
  position: relative;
`;
const Note = styled.span`
  width: 150px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 30px 0;
  transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
  @media screen and (max-width: 896px) {
    top: 90px !important;
    left: 0 !important;
    margin: 40px;
    /* position: absolute; */
  }
`;
export const FormBox = styled.div`
  border-radius: 0px;
  background: #ffffff;
  padding: 60px 70px 30px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    border: 2px solid rgb(255, 255, 255);
    padding: 20px;
  }
`;
const DdTag = styled.dd`
  width: 100%;
  padding-left: 0;
  text-align: left;
  box-sizing: border-box;
  padding: 10px 30px 20px;
  position: relative;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    padding: 0;
    margin: 0;
  }
`;
const Top = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 550;
  margin-bottom: 50px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    font-size: 1.6rem;
    padding: 25px;
    margin: 0;
    text-align: center;
  }
`;
export const Selection = styled.div`
  display: flex;
  width: 100%;
  select {
    border: 1px solid #e1e6ea;
    background: #fff;
    background-size: 8px auto;
    border-radius: 4px;
    height: 50px;
    width: 25%;
    box-sizing: border-box;
    padding: 0 20px;
    appearance: none;
    color: #75787e;
    box-shadow: none;
    transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
    @media screen and (max-width: 896px) {
      width: 15%;
    }
  }
  span {
    font-size: 1rem;
    margin: 17px 15px;
    transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
    @media screen and (max-width: 896px) {
      font-size: 1rem;
      margin: 15px 10px;
    }
  }
`;
const OtherInformation = styled.div`
  margin-right: 200px;
  text-align: left;
  width: 220px;
  margin: 0 0 40px 0;
  :hover {
    border-radius: 5px;
    background: #dee2e4;
    transition: opacity 0.8s ease-out 0s, all 0.6s ease-out 0s;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #d7d7d7;
    border-radius: 8px;
    font-weight: 500;
    height: 40px;
    width: 190px;
  }
`;
const ITag = styled.i`
  display: flex;
  justify-content: center;
`;
const OtherContact = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 1.2rem;
  color: #1a1919;
  text-decoration: none;
  font-weight: 550;
`;
interface MyPOtrInProps {
  show: boolean;
}
const ExtraContent = styled.div<MyPOtrInProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  background: #f4f6f7;
  margin: 0 0 40px;
  padding: 0 10px 20px;
  border-radius: 0;
`;
const ExtraEmail = styled.div<MyPOtrInProps>`
  display: ${(props) => (props.show ? "block" : "none")};
  background: #f4f6f7;
  margin: 0 0 40px;
  padding: 0 40px 30px;
  border-radius: 0;
`;
const ExtraTxt = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  text-align: left;
  font-size: 1.2rem;
`;
const LabelGender = styled.label`
  cursor: pointer;
  position: relative;
  float: left;
  margin: 0 65px 0 20px;
  .SpanGender {
    position: absolute;
  }
  .male {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1.3rem;
  }
  .gender {
  }
  transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
  @media screen and (max-width: 896px) {
    border: 1px solid #e1e6ea;
    width: 100%;
    padding: 13px;
    margin: 0 37px 0 0;
  }
`;
const FooterBasic = styled.div`
  max-width: 1000px;
  background-color: #f4f6f7;
  margin: 0px auto;
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    width: 100%;
    padding: 13px;
  }
  .button {
    width: 100%;
    border: 1px solid #000;
    background: #fff;
    color: #3a3a3a;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 4px;
    font-size: 1.5rem;
    font-weight: 550;
    height: 60px;
    &:hover {
      background-color: #000000;
    }
    transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
    @media screen and (max-width: 896px) {
      width: 95%;
      margin: 20px 0;
    }
  }
`;
const ButtonBottom = styled.div`
  background-color: #f4f6f7;
`;
const ButtonSpace = styled.div`
  transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
  @media screen and (max-width: ${DISPLAY_CT}) {
    width: 95%;
  }
`;
const AutoInsert = styled.button`
  width: 20%;
  height: 52px;
  border-radius: 5px;
  border: 0.5px solid #b7b7b7;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  margin: 8px 30px;
  @media screen and (max-width: ${DISPLAY_CT}) {
    margin: 25px auto !important;
  }
  &:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.8);
    transform: translateX(-15px) translateY(-3px);
    scale: 1;
  }
`;
// const heightValue = 50;
function Basic() {
  const [data, setFormData] = useState({
    first_name: "",
    last_name: "",
    first_name_kana: "",
    last_name_kana: "",
    year: "",
    month: "",
    day: "",
    gender: "",
    zip_code: "",
    pref: "",
    city: "",
    town: "",
    address_hiragana: "",
    zip_more: "",
    pref_more: "",
    city_town: "",
    address_line: "",
    address_hiragana_more: "",
    formula: "",
    phone: "",
    email: "",
    phone_more: "",
    email_more: "",
    image: "",
    create_year: "",
    create_month: "",
    create_day: "",
    // img: "",
  });
  const { t } = useTranslation();
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    sessionStorage.setItem(name, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleBlur = async (event: any) => {
    const { name, value } = event.target;
    sessionStorage.setItem(name, value);
    console.log(postAPI);
  };
  const [postAPI, setPostAPI] = useState({
    data: {
      ...data,
    },
  });
  useEffect(() => {
    setPostAPI({
      data: {
        ...data,
      },
    });
  }, [data]);
  const [modal, setModal] = useState<boolean>(false);
  const [notificationModal, setNotification] = useState<boolean>(false);
  //State FormDataをsession storageから取得した値で更新します
  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("first_name");
    const storedLastName = sessionStorage.getItem("last_name");
    const storedFirstNameKana = sessionStorage.getItem("first_name_kana");
    const storedLastNameKana = sessionStorage.getItem("last_name_kana");
    const storedYear = sessionStorage.getItem("year");
    const storedMonth = sessionStorage.getItem("month");
    const storedDay = sessionStorage.getItem("day");
    const storedGender = sessionStorage.getItem("gender");
    const storedZipCode = sessionStorage.getItem("zipCode");
    const storedPref = sessionStorage.getItem("pref");
    const storedCity = sessionStorage.getItem("city");
    const storedTown = sessionStorage.getItem("town");
    const storedZipMore = sessionStorage.getItem("zip_more");
    const storedPrefMore = sessionStorage.getItem("pref_more");
    const storedCityTown = sessionStorage.getItem("city_town");
    const storedAddressHiragana = sessionStorage.getItem("address_hiragana");
    const storedAddressHiraganaMore = sessionStorage.getItem(
      "address_hiragana_more"
    );
    const storedFormula = sessionStorage.getItem("formula");
    const storedAddress_line = sessionStorage.getItem("address_line");
    const storedPhone = sessionStorage.getItem("phone");
    const storedEmail = sessionStorage.getItem("email");
    const storedPhoneMore = sessionStorage.getItem("phone_more");
    const storedEmailMore = sessionStorage.getItem("email_more");
    const storedCreateYear = sessionStorage.getItem("create_year");
    const storedCreateMonth = sessionStorage.getItem("create_month");
    const storedCreateDay = sessionStorage.getItem("create_day");
    const storedImg = sessionStorage.getItem("previewUrl");
    // const storedAbout = sessionStorage.getItem("about");
    setFormData((prevFormData) => ({
      ...prevFormData,
      first_name: storedFirstName || "",
      last_name: storedLastName || "",
      first_name_kana: storedFirstNameKana || "",
      last_name_kana: storedLastNameKana || "",
      year: storedYear || "",
      month: storedMonth || "",
      day: storedDay || "",
      gender: storedGender || "",
      zip_code: storedZipCode || "",
      pref: storedPref || "",
      city: storedCity || "",
      town: storedTown || "",
      address_hiragana: storedAddressHiragana || "",
      zip_more: storedZipMore || "",
      pref_more: storedPrefMore || "",
      city_town: storedCityTown || "",
      address_line: storedAddress_line || "",
      address_hiragana_more: storedAddressHiraganaMore || "",
      formula: storedFormula || "",
      phone: storedPhone || "",
      email: storedEmail || "",
      phone_more: storedPhoneMore || "",
      email_more: storedEmailMore || "",
      image: storedImg || "",
      create_year: storedCreateYear || "",
      create_month: storedCreateMonth || "",
      create_day: storedCreateDay || "",
      // img: storedImg || "",
    }));
  }, []);

  const handleSubmit = async (event: any) => {
    setModal(false);
    setNotification(true);
    event.preventDefault();
    if(!postAPI){
      console.error("Lỗi khi gửi yêu cầu:", error);

    }else{

      console.log("Đã gửi yêu cầu thành công:", data);
      // const apiUrl = `${baseAPI}/contacts`;
      //   axios
      //     .post(apiUrl, postAPI)
      //     .then((response) => {
      //       console.log("Đã gửi yêu cầu thành công:", response.data);
      //     })
      //     .catch((error) => {
      //       console.error("Lỗi khi gửi yêu cầu:", error);
      //     });
    }
  };

  const [showOtherAddress, setShowOtherAddress] = useState(false);
  const [OtherEmail, setOtherEmail] = useState(false);

  const [error, setError] = useState<string | null>(
    sessionStorage.getItem("addressError")
  );
  const [errorMore, setErrorMore] = useState<string | null>(
    sessionStorage.getItem("addressErrorMore")
  );
  // APIを呼び出してStateに保存します
  const [zipCode, setZipCode] = useState<string>(
    String(sessionStorage.getItem("zipCode"))
  );
  const [pref, setPref] = useState<string>(
    String(sessionStorage.getItem("pref"))
  );
  const [city, setCity] = useState<string>(
    String(sessionStorage.getItem("city"))
  );
  const [town, setTown] = useState<string>(
    String(sessionStorage.getItem("town"))
  );
  const [address_hiragana, setAddressHiragana] = useState<string>(
    String(sessionStorage.getItem("address_hiragana"))
  );
  const [zipCodeMore, setZipCodeMore] = useState<string>(
    String(sessionStorage.getItem("zip_more"))
  );
  const [prefMore, setPrefMore] = useState<string>(
    String(sessionStorage.getItem("pref_more"))
  );
  const [cityTown, setCityTown] = useState<string>(
    String(sessionStorage.getItem("city_town"))
  );
  const [addressHiraganaMore, setAddressHiraganaMore] = useState<string>(
    String(sessionStorage.getItem("address_hiragana_more"))
  );
  
  // 性転換Function
  const [gender, setGender] = useState<any | string>(
    String(sessionStorage.getItem("gender"))
  );
  const handleGenderChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const newGender = parseInt(event.target.value);
    const genderValue =
      newGender === 1 ? "male" : newGender === 2 ? "female" : "";
    setGender(genderValue);
    sessionStorage.setItem("gender", genderValue);
  };
  // 詳細ボタンをクリックすると詳細情報が表示されます
  const toggleOtherAddress = () => {
    setShowOtherAddress(!showOtherAddress);
  };
  const toggleOtherEmail = () => {
    setOtherEmail(!OtherEmail);
  };
  // 郵便番号から API を処理する
  const handleZipCodeChange: React.MouseEventHandler<
    HTMLButtonElement
  > = async () =>
    // event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    {
      const newZipCode = sessionStorage.getItem("zip");
      const addressError = "正しい郵便番号を入力してください";
      const error = "この郵便番号が見つかりません";
      try {
        const response = await axios.get(
          `https://apis.postcode-jp.com/api/v3/postcodes/${newZipCode}`
        );
        const { pref, city, town, hiragana, allAddress } = response.data;
        sessionStorage.setItem("pref", pref);
        sessionStorage.setItem("city", city);
        sessionStorage.setItem("town", town);
        sessionStorage.setItem("address_hiragana", hiragana.allAddress);

        if (!allAddress) {
          setError(error);
          sessionStorage.setItem("addressError", error);
        } else {
          setError("");
          sessionStorage.setItem("addressError", "");
          setPref(pref);
          setCity(city);
          setTown(town);
          setAddressHiragana(hiragana.allAddress);
        }
      } catch (error: any) {
        setError(addressError);
        sessionStorage.setItem("addressError", addressError);
        setPref("");
        setCity("");
        setTown("");
      }
    };
  const handleZipCodeChangeMore: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    const newZipCodeMore = sessionStorage.getItem("zip_more");
    const errorMore = "この郵便番号が見つかりません";
    const addressErrorMore = "正しい郵便番号を入力してください";
    try {
      const response = await axios.get(
        `https://apis.postcode-jp.com/api/v3/postcodes/${newZipCodeMore}`
      );
      const { pref, city, town, allAddress, hiragana } = response.data;
      const cityTown = city + town;
      sessionStorage.setItem("pref_more", pref);
      sessionStorage.setItem("city_town", cityTown);
      sessionStorage.setItem("address_hiragana_more", hiragana.allAddress);
      if (!allAddress) {
        setErrorMore(errorMore);
        sessionStorage.setItem("addressErrorMore", errorMore);
      } else {
        setPrefMore(pref);
        setCityTown(cityTown);
        setAddressHiraganaMore(hiragana.allAddress);
        setErrorMore("");
      }
    } catch (error) {
      setErrorMore(addressErrorMore);
      sessionStorage.setItem("addressErrorMore", addressErrorMore);
      setCityTown("");
      setPrefMore("");
    }
  };
  //upload picture
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    sessionStorage.getItem("previewUrl")
  );
  // 1. 新しいプレビューURLが利用可能なときに画像をセッションストレージに保存します
  useEffect(() => {
    if (previewUrl) {
      sessionStorage.setItem("previewUrl", String(previewUrl));
    }
  }, [previewUrl]);
  const handleFileInputChange = (event: React.FocusEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setPreviewUrl(result);
        } else if (result instanceof ArrayBuffer) {
          const textDecoder = new TextDecoder();
          const decodedString = textDecoder.decode(result);
          setPreviewUrl(decodedString);
        } else {
          setPreviewUrl(null);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };
  const handleDeleteButtonClick = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };
  //date
  const currentDate = new Date();
  const [currentDay, setCurrentDay] = useState<string | null>
    (sessionStorage.getItem("create_day")
  );
  const [currentMonth, setCurrentMonth] = useState<string| null>
    (sessionStorage.getItem("create_month")
  );
  const [thisYear, setThisYear] = useState<string| null>
    (sessionStorage.getItem("create_year")
  );

  const handleSetCurrentDate = () => {
    setCurrentDay(currentDate.getDate().toString());
    sessionStorage.setItem("create_day", currentDate.getDate().toString());
    setCurrentMonth((currentDate.getMonth() + 1).toString());
    sessionStorage.setItem(
      "create_month",
      (currentDate.getMonth() + 1).toString()
    );
    setThisYear(currentDate.getFullYear().toString());
    sessionStorage.setItem("create_year", currentDate.getFullYear().toString());
  };
  const options = [
    { value: "東京都", label: "東京都" },
    { value: "神奈川県", label: "神奈川県" },
    { value: "埼玉県", label: "埼玉県" },
    { value: "千葉県", label: "千葉県" },
    { value: "大阪府", label: "大阪府" },
    { value: "京都府", label: "京都府" },
    { value: "兵庫県", label: "兵庫県" },
    { value: "北海道", label: "北海道" },
    { value: "青森県", label: "青森県" },
    { value: "秋田県", label: "秋田県" },
    { value: "岩手県", label: "岩手県" },
    { value: "山形県", label: "山形県" },
    { value: "宮城県", label: "宮城県" },
    { value: "福島県", label: "福島県" },
    { value: "茨城県", label: "茨城県" },
    { value: "栃木県", label: "栃木県" },
    { value: "群馬県", label: "群馬県" },
    { value: "山梨県", label: "山梨県" },
    { value: "長野県", label: "長野県" },
    { value: "新潟県", label: "新潟県" },
    { value: "富山県", label: "富山県" },
    { value: "石川県", label: "石川県" },
    { value: "福井県", label: "福井県" },
    { value: "静岡県", label: "静岡県" },
    { value: "愛知県", label: "愛知県" },
    { value: "岐阜県", label: "岐阜県" },
    { value: "三重県", label: "三重県" },
    { value: "滋賀県", label: "滋賀県" },
    { value: "奈良県", label: "奈良県" },
    { value: "和歌山県", label: "和歌山県" },
    { value: "鳥取県", label: "鳥取県" },
    { value: "島根県", label: "島根県" },
    { value: "岡山県", label: "岡山県" },
    { value: "広島県", label: "広島県" },
    { value: "山口県", label: "山口県" },
    { value: "香川県", label: "香川県" },
    { value: "徳島県", label: "徳島県" },
    { value: "高知県", label: "高知県" },
    { value: "愛媛県", label: "愛媛県" },
    { value: "福岡県", label: "福岡県" },
    { value: "佐賀県", label: "佐賀県" },
    { value: "長崎県", label: "長崎県" },
    { value: "大分県", label: "大分県" },
    { value: "熊本県", label: "熊本県" },
    { value: "宮崎県", label: "宮崎県" },
    { value: "鹿児島県", label: "鹿児島県" },
    { value: "沖縄県", label: "沖縄県" },
    { value: "海外（中国）", label: "海外（中国）" },
    { value: "海外海外（アメリカ）", label: "海外（アメリカ）" },
    { value: "海外（ヨーロッパ）", label: "海外（ヨーロッパ）" },
    { value: "海外（その他）", label: "海外（その他）" },
  ];
  const beforeSubmit = async () => {
    setModal(true);
  };

  const modalChildPropsList: ModalChildProps[] = [
    {
      componentsName: t("form.sei"),
      value: data.first_name,
      id: "firstName",
      setModal: setModal,
    },
    {
      componentsName: t("form.mei"),
      value: data.last_name,
      id: "lastName",
      setModal: setModal,
    },
    {
      componentsName: t("form.sei_kana"),
      value: data.first_name_kana,
      id: "firstNameKana",
      setModal: setModal,
    },
    {
      componentsName: t("form.mei_kana"),
      value: data.last_name_kana,
      id: "lastNameKana",
      setModal: setModal,
    },
    {
      componentsName: t("form.sei_nen_gappi"),
      value: `${data.year} / ${data.month} / ${data.day}`,
      id: "year",
      setModal: setModal,
    },
    {
      componentsName: t("form.sei_betsu"),
      value: data.gender,
      id: "male",
      setModal: setModal,
    },
    {
      componentsName: t("form.yuubin_bangou"),
      value: data.zip_code,
      id: "zip",
      setModal: setModal,
    },
    {
      componentsName: t("form.jyuusho"),
      value: `${data.pref} ${data.city} ${data.town}`,
      id: "pref",
      setModal: setModal,
    },
    {
      componentsName: t("form.juusho_furigana"),
      value: data.address_hiragana,
      id: "address_hiragana",
      setModal: setModal,
    },
    {
      componentsName: t("form.yuubin_bangou"),
      value: data.zip_more,
      id: "zip_more",
      setModal: setModal,
    },
    {
      componentsName: t("form.jyuusho"),
      value: `${data.pref_more} ${data.city_town}`,
      id: "pref_more",
      setModal: setModal,
    },
    {
      componentsName: t("form.manshon_tatemono_mei_tou"),
      value: data.address_line,
      id: "address_line",
      setModal: setModal,
    },
    {
      componentsName: t("form.juusho_furigana"),
      value: data.address_hiragana_more,
      id: "address_hiragana_more",
      setModal: setModal,
    },
    {
      componentsName: t("form.karagaki"),
      value: data.formula,
      id: "formula",
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
      id: "email",
      setModal: setModal,
    },
    {
      componentsName: t("form.shoumei_shashin"),
      value: previewUrl && (
        <img
          style={{ width: "50%" }}
          className="img"
          src={String(previewUrl)}
          alt="Preview"
        />
      ),
      id: "fileInput",
      setModal: setModal,
    },
    {
      componentsName: t("form.sakusei_bi"),
      value: `${data.create_year}/ ${data.create_month}/${data.create_day}`,
      id: "email",
      setModal: setModal,
    },
  ];
  const confirmation = (event: any) => {
    event.preventDefault();
    // console.log("test");
  };
  return (
    <form onSubmit={confirmation}>
      <ModalComponents
        status={modal}
        showModal={setModal}
        onFunction={handleSubmit}
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
          <h2 style={{fontSize: "2.5rem"}}>
            データを保存いたしました
            <br /> 保存リストよりデータを確認することができます。
          </h2>
        </div>
      </ReInfoModal>
      <BasicContent>
        <FooterContainer>
          <FormBox>
            <Top>{t("form.kihon_jouhou")}</Top>
            <NameKanaComponents
              componentsName={t("form.onamae")}
              firstRegister="first_name"
              firstKanaRegister="first_name_kana"
              lastRegister="last_name"
              lastKanaRegister="last_name_kana"
              nameFirst="first_name"
              nameKanaFirst="first_name_kana"
              nameLast="last_name"
              nameKanaLast="last_name_kana"
              valueFirst={data.first_name}
              valueKanaFirst={data.first_name_kana}
              valueLast={data.last_name}
              valueKanaLast={data.last_name_kana}
              firstNameId="firstName"
              lastNameId="lastName"
              firstNameKanaId="firstNameKana"
              lastNameKanaId="firstNameKana"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <MyForm>
              <Tr>
                <Th style={{ margin: "auto 0" }}>
                  <Label htmlFor="" className="">
                    {t("form.sei_nen_gappi")}
                  </Label>
                </Th>
                <DdTag>
                  <DateComponents
                    onChange={handleChange}
                    yearValue={data.year}
                    monthValue={data.month}
                    dayValue={data.day}
                    yearName="year"
                    monthName="month"
                    dayName="day"
                    id="year"
                  />
                </DdTag>
              </Tr>
            </MyForm>
            <MyForm className="gender">
              <Tr>
                <Th>
                  <Label className="mypFormDt"> {t("form.sei_betsu")}</Label>
                </Th>
                <DdTag>
                  <div style={{ display: "flex" }}>
                    <LabelGender>
                      <input
                        type="radio"
                        name="male"
                        value="1"
                        id="male"
                        className="gender"
                        checked={gender == "male"}
                        onChange={handleGenderChanged}
                      />{" "}
                      <label className="LabelGender" htmlFor="male">
                        {t("form.dansei")}
                      </label>
                    </LabelGender>
                    <LabelGender>
                      <input
                        type="radio"
                        name="female"
                        value="2"
                        id="female"
                        className="gender"
                        checked={gender == "female"}
                        onChange={handleGenderChanged}
                      />{" "}
                      <label className="LabelGender" htmlFor="female">
                        {t("form.jousei")}
                      </label>
                    </LabelGender>
                  </div>
                </DdTag>
              </Tr>
            </MyForm>
            <Wrapper>
              <InputComponents
                onChange={(event) => setZipCode(event.target.value)}
                onBlur={handleBlur}
                componentsName={t("form.yuubin_bangou")}
                register="zip"
                name="zip"
                id="zip"
                value={zipCode == "null" ? "" : zipCode}
                className="inputText150px"
                placeholder="1234567"
              />
              <Validation style={{ bottom: "25px" }}>
                <span>{error && <span>{error}</span>}</span>
              </Validation>
              <AutoInsert onClick={handleZipCodeChange}>
                <ButtonNormal>
                  <span>{t("form.jidou_nyuuryoku")}</span>
                </ButtonNormal>
              </AutoInsert>
            </Wrapper>
            <SelectComponents
              componentsName={t("form.todou_fuken")}
              id="pref"
              register="title"
              options={options}
              onChange={(e) => setPref(e.target.value)}
              value={pref ?? ""}
              className="inputText150px"
            />
            <InputComponents
              onBlur={handleBlur}
              onChange={(e) => setCity(e.target.value)}
              componentsName={t("form.shiku_chouson_machi_iki")}
              register="title"
              name="city"
              id="city"
              value={city == "null" ? "" : city}
              className="inputText340px"
              placeholder="〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇"
            />
            <InputComponents
              onBlur={handleBlur}
              onChange={(e) => setTown(e.target.value)}
              componentsName={t("form.banchi_tatemono_mei")}
              register="title"
              name="town"
              id="town"
              value={town == "null" ? "" : town}
              className="inputText340px"
              placeholder="〇〇〇〇〇〇〇〇〇〇〇〇〇〇〇"
            />
            <InputComponents
              onBlur={handleBlur}
              onChange={(e) => setAddressHiragana(e.target.value)}
              componentsName={t("form.juusho_furigana")}
              register="title"
              name="address_hiragana"
              id="address_hiragana"
              value={address_hiragana == "null" ? "" : address_hiragana}
              className="inputText410px"
            />
            <MyForm>
              <OtherInformation
                className={`luonluon ${showOtherAddress ? "true-them" : ""}`}
              >
                <OtherContact className="" onClick={toggleOtherAddress}>
                  <ITag className="">
                    <span style={{ margin: "-1px" }}>
                      <Icon icon="ic:outline-add" width="20" height="20" />
                    </span>
                    <span>{t("form.joukiigai_ni_renrakusen_ga_aru_baai")}</span>
                  </ITag>
                </OtherContact>
              </OtherInformation>
              <ExtraContent className="" show={showOtherAddress} id="popup">
                <ExtraTxt>
                  {t("form.sho_jijou_de_joukiigai_ni_renraku_o_kibou_suru")}
                </ExtraTxt>
                <Wrapper>
                  <InputComponents
                    onChange={(e) => setZipCodeMore(e.target.value)}
                    onBlur={handleBlur}
                    componentsName={t("form.yuubin_bangou")}
                    register="zip"
                    name="zip_more"
                    id="zip_more"
                    value={zipCodeMore == "null" ? "" : zipCodeMore}
                    className="inputText210px"
                    placeholder="1234567"
                  />
                  <Note className="">{t("form.haifun_fuyou")}</Note>
                  <Validation style={{ top: "65px" }}>
                    <span>{errorMore && <span>{errorMore}</span>}</span>
                  </Validation>
                  <AutoInsert
                    onClick={handleZipCodeChangeMore}
                    style={{ marginTop: "11px", width: "15%", height: "50px" }}
                  >
                    <ButtonNormal>
                      <span>{t("form.jidou_nyuuryoku")}</span>
                    </ButtonNormal>
                  </AutoInsert>
                </Wrapper>
                <SelectComponents
                  onBlur={handleBlur}
                  componentsName={t("form.todou_fuken")}
                  name="pref_more"
                  id="pref_more"
                  register="title"
                  options={options}
                  onChange={(e) => setPrefMore(e.target.value)}
                  value={prefMore ?? ""}
                  className="inputText210px"
                />
                <InputComponents
                  onBlur={handleBlur}
                  onChange={(event) => setCityTown(event.target.value)}
                  componentsName={t("form.shiku_chouson_banchi")}
                  register="title"
                  name="city_town"
                  id="city"
                  value={cityTown ?? ""}
                  className="inputText340px"
                />
                <InputComponents
                  onBlur={handleBlur}
                  onChange={handleChange}
                  componentsName={t("form.manshon_tatemono_mei_tou")}
                  register="title"
                  name="address_line"
                  id="address_line"
                  value={data.address_line}
                  className="inputText340px"
                />
                <InputComponents
                  onBlur={handleBlur}
                  onChange={(e) => setAddressHiraganaMore(e.target.value)}
                  componentsName={t("form.juusho_furigana")}
                  register="title"
                  name="address_hiragana_more"
                  id="address_hiragana_more"
                  value={
                    addressHiraganaMore == "null" ? "" : addressHiraganaMore
                  }
                  className="inputText410px"
                />
                <div style={{ position: "relative" }}>
                  <InputComponents
                    onBlur={handleBlur}
                    onChange={handleChange}
                    componentsName={t("form.karagaki")}
                    register="title"
                    name="formula"
                    id="formula"
                    value={data.formula}
                    className="inputText340px"
                  />
                  <Note
                    className=""
                    style={{
                      position: "absolute",
                      width: "auto",
                      top: "70px",
                      margin: "0px",
                      right: "100px",
                    }}
                  >
                    （{" "}
                    {t(
                      "form.rirekisho_ni_kinyu_shita_myouji_to_juusho_no_hyousatsu_no_myouji_ga_kotonaru_baai_nomi_kinyuu"
                    )}
                    ）
                  </Note>
                </div>
              </ExtraContent>
            </MyForm>
            <InputComponents
              onBlur={handleBlur}
              onChange={handleChange}
              componentsName={t("form.denwa_bangou")}
              className="inputText210px"
              register="phone"
              name="phone"
              id="phone"
              value={data.phone}
              placeholder="xxx-xxxx-xxxx"
            />
            <InputComponents
              onChange={handleChange}
              onBlur={handleBlur}
              componentsName={t("form.meru_adoresu")}
              register="email"
              name="email"
              id="email"
              value={data.email}
              className="inputText410px"
            />
            {/* <MyForm> */}
            <OtherInformation>
              <OtherContact className="" onClick={toggleOtherEmail}>
                <ITag className="Icon">
                  {t("form.joukiigai_ni_renrakusen_ga_aru_baai")}
                </ITag>
              </OtherContact>
            </OtherInformation>
            <ExtraEmail show={OtherEmail}>
              <ExtraTxt>
                {t("form.sho_jijou_de_joukiigai_ni_renraku_o_kibou_suru")}
              </ExtraTxt>
              <div className="">
                <InputComponents
                  onBlur={handleBlur}
                  onChange={handleChange}
                  componentsName={t("form.denwa_bangou")}
                  register="phone"
                  name="phone_more"
                  id="phone_more"
                  value={data.phone_more}
                />
                <InputComponents
                  onChange={handleChange}
                  onBlur={handleBlur}
                  componentsName={t("form.meru_adoresu")}
                  register="email"
                  name="email_more"
                  id="email_more"
                  value={data.email_more}
                  placeholder="aaaa@aaaa.aa.aa"
                />
              </div>
            </ExtraEmail>
            <Tr>
              <Th>
                <Label>{t("form.shoumei_shashin")}</Label>
              </Th>
              <DdTag>
                <OtherInformation>
                  <OtherContact htmlFor="fileInput" className="">
                    <Icon icon="ep:upload" width="20" height="20" />
                    {t("form.shashin_oappuroudo_suru")}
                  </OtherContact>
                </OtherInformation>
                {previewUrl && (
                  <img className="img" src={String(previewUrl)} alt="Preview" />
                )}
                <input
                  name="image"
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
                {selectedFile && (
                  <OtherInformation
                    onClick={handleDeleteButtonClick}
                    style={{ width: "189px", marginTop: "30px" }}
                  >
                    <p
                      style={{
                        textAlign: "left",
                      }}
                    >
                      <a style={{ marginLeft: 0, fontSize: "1.2rem" }}>
                        <i>{t("form.shashin_o_sakujo_suru")}</i>
                      </a>
                    </p>
                  </OtherInformation>
                )}
              </DdTag>
            </Tr>
            <CreatedDateComponents
              onBlur={handleBlur}
              componentsName={t("form.sakusei_bi")}
              onChangeYear={(e) => setThisYear(e.target.value)}
              onChangeMonth={(e) => setCurrentMonth(e.target.value)}
              onChangeDay={(e) => setCurrentDay(e.target.value)}
              yearValue={thisYear?? ""}
              monthValue={currentMonth?? ""}
              dayValue={currentDay?? ""}
              yearName="create_year"
              monthName="create_month"
              dayName="create_day"
            ></CreatedDateComponents>
            <OtherInformation
              onClick={handleSetCurrentDate}
              style={{ borderRadius: "4px", margin: "auto" }}
            >
              <OtherContact style={{ borderRadius: "4px" }}>
                <div>{t("form.kyou_no_hidzuke_o_hanei_suru")}</div>
              </OtherContact>
            </OtherInformation>
          </FormBox>
        </FooterContainer>
      </BasicContent>
      <ButtonBottom>
        <FooterBasic className="" style={{ opacity: 1 }}>
          <ButtonSpace>
            <MediumButton onClick={beforeSubmit}>
              <ButtonNormal>
                {/* <button type="submit"> */}
                <span>{t("form.hozon_suru")}</span>
                {/* </button> */}
              </ButtonNormal>
            </MediumButton>
          </ButtonSpace>
          <ButtonSpace>
            <MediumButton>
              <ButtonNormal>
                <Link to= "/resume">
                <span>{t("form.burebyuu")}</span>
                </Link>

              </ButtonNormal>
            </MediumButton>
          </ButtonSpace>
          <ButtonSpace>
            <MediumButton style={{}}>
              <ButtonSignup>
                <button type="submit">
                  <span>{t("form.PDF_de_daunroudo")}</span>
                </button>
              </ButtonSignup>
            </MediumButton>
          </ButtonSpace>
        </FooterBasic>
      </ButtonBottom>
    </form>
  );
}

export default Basic;
