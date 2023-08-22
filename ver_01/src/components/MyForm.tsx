import { useTranslation } from "react-i18next";
import styled from "styled-components";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DISPLAY_CT, DISPLAY_LG } from "../GlobalStyle";
import { listOption, getSpecialDay } from "../global/globalfuntion";
import ReInfoModal from "../components/Modal/ReInfoModal";
// import React, { useState } from "react";
import React, { ReactNode } from "react";

export const FormBox = styled.div`
  border-radius: 0px;
  background: #ffffff;
  padding: 60px 70px 30px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    border: 2px solid rgb(255, 255, 255);
    padding: 20px;
  }
`;
export const Validation = styled.div`
  position: absolute;
  color: red;
  font-size: 1.1rem !important;
  top: 60%;
  left: 340px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    left: 0;
    top: 95px !important;
  }
`;
export const MyForm = styled.div`
  margin: 0 0 45px 0;
  .mypFormDtTag {
    font-weight: bold;
    width: auto;
  }
  .inputText150px {
    width: 150px;
    @media screen and (max-width: ${DISPLAY_CT}) {
      width: 100%;
      margin: 0;
    }
  }
  .inputText {
    width: 100%;
  }
  .inputText210px {
    width: 210px;
    transition: opacity 0.8s ease-out, all 0.4s ease-out;
    @media screen and (max-width: ${DISPLAY_CT}) {
      width: 100%;
      margin: 0;
    }
  }
  .inputText340px {
    width: 340px;
    transition: opacity 0.4s ease-out, all 0.4s ease-out;
    @media screen and (max-width: ${DISPLAY_CT}) {
      width: 100%;
    }
  }
  .inputText130px {
    width: 130px;
  }
  .inputText410px {
    width: 410px;
    transition: opacity 0.8s ease-out, all 0.4s ease-out;
    @media screen and (max-width: ${DISPLAY_CT}) {
      background-color: #ffffff;
      width: 100%;
      border: 2px solid rgb(225, 230, 234);
    }
  }
  .validation {
    position: absolute;
    color: red;
    font-size: 1rem !important;
    bottom: -10%;
    left: 33px;
  }
  .space {
    font-size: 12px;
    margin: 17px 15px;
    font-weight: 600;
  }
`;
export const Tr = styled.dl`
  display: flex;
  align-items: center;
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
  .img {
    width: 50%;
    height: 50%;
  }
`;
export const Label = styled.label`
  display: block;
  width: 280px;
  font-weight: bold;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    width: 100%;
  }
`;
const Important = styled.span`
  font-size: 10px;
  padding: 5px 10px;
  color: #fff;
  background: #ff0000;
  width: 51px;
  height: 27px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    float: right;
  }
`;
export const Th = styled.dt`
  padding: 13px;
  font-size: 1.4rem;
  display: flex;
  width: 300px;
  align-items: center;
  /* margin: auto 0; */
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    /* margin-bottom: 10px; */
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 0 5px;
  }
`;
export const Td = styled.dd`
  width: 100%;
  font-size: 1.3rem;
  padding: 10px 30px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    padding: 0;
  }
`;
const Input = styled.input`
  height: 50px;
  background: #fff;
  font-size: 13px;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #e1e6ea;
  box-shadow: none;
  box-sizing: border-box;
  width: 100%;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    border: 2px solid rgb(225, 230, 234);
    width: 100% !important;
  }
`;
const TextArea = styled.textarea`
  display: block;
  background: #ffffff;
  font-size: 13px;
  padding: 20px;
  border: 1px solid #e1e6ea;
  height: 160px;
  width: 100%;
`;
const Selection = styled.div`
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
    @media screen and (max-width: ${DISPLAY_CT}) {
      width: 15%;
    }
  }
  .space {
    font-size: 12px;
    margin: 17px 15px;
    font-weight: 600;
  }
`;
const Spance = styled.span`
  font-size: 12px;
  margin: 17px 15px;
  font-weight: 600;
  transition: opacity 0.8s ease-out 0s, all 0.4s ease-out 0s;
  @media screen and (max-width: ${DISPLAY_CT}) {
    display: none !important;
  }
`;
const NameRight = styled.div`
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  strong {
    margin: auto 7px;
  }
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    width: 100%;
  }
`;
const Text = styled.div`
  display: inline-block;
  height: 200px;
  overflow-y: scroll;
  border: 1px solid #e1e6ea;
  margin: 0 0 10px 0;
  padding: 20px;
`;
const LabelCheck = styled.label`
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  .checkBox {
    display: book;
    width: 30px;
    height: 15px;
  }
`;
const ImportantDesign = styled.div`
  font-size: 1.4rem;
  display: flex;
  width: 100%;
  align-items: center;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_CT}) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;
const BoxTop = styled.div`
  font-size: 1.3rem;
  display: flex;
  strong {
    margin: auto 7px;
  }
`;
const NameKanaRight = styled.div`
  font-size: 16px;
  width: 100%;
  padding: 10px 30px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    display: grid;
    justify-items: stretch;
    /* grid-template-columns: repeat(2, 1fr); */
    padding: 0;
  }
`;
const Box = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 10px;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    padding-right: 10px;
    margin: 13px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding-bottom: 0px !important;
  position: relative;
`;
const InputText = styled.input`
  width: 100%;
  height: 50px;
  background: #ffffff;
  font-size: 1.3rem;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #e1e6ea;
  box-shadow: none;
  box-sizing: border-box;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: 896px) {
    margin: 0;
    width: 100%;
  }
`;
const UIModal = styled.div`
  font-size: 1.2rem;
  border-radius: 10px 0px;
  border: 0.5px solid #b7b7b7;
  background-color: #f7ede2;
  margin: 15px;
  padding: 10px;
  color: #000000;
  transition: opacity 0.4s ease-out, all 0.4s ease-out;
  @media screen and (max-width: ${DISPLAY_LG}) {
    font-size: 1.3rem !important;
  }
  &:hover {
    background-color: #b7b7b7;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.8);
    transform: translateX(-15px) translateY(-3px); /* Di chuyển thẻ div lên trên */
    scale: 1; /* Tăng kích thước thẻ div */
    color: #f7ede2;
  }
`;
const A = styled.a`
  font-size: 1.5rem;
  color: black;
  &:hover {
    color: white;
  }
`;
export const schema = yup.object({
  title: yup.string().required("お問い合わせ項目をご選択ください。"),
  last_name: yup.string().required("お名前をご入力ください。"),
  lastName: yup.string().required("お名前をご入力ください。"),
  lastNameKana: yup
    .string()
    .required("お名前をご入力ください。")
    .matches(/^[ァ-ヶー　\s]+$/u, "カタカナで入力してください。！"),
  first_name: yup.string().required("お名前をご入力ください。"),
  firstName: yup.string().required("お名前をご入力ください。"),
  firstNameKana: yup
    .string()
    .required("お名前をご入力ください。")
    .matches(/^[ァ-ヶー　\s]+$/u, "カタカナで入力してください。！"),
  email: yup
    .string()
    .required("メールアドレスをご入力ください。")
    .matches(
      /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,5})$/,
      "正しいメールをご入力ください。"
    ),
  content: yup.string().required("内容をご入力ください。"),
  company_name: yup.string().required("会社名をご入力ください。"),
  company_hp: yup.string().required("貴社HP（URL）を入力してください"),
  position_name: yup
    .string()
    .required("採用予定の求人職種名・ポジション名を入力してください"),
  posting_page: yup
    .string()
    .required("採用予定の求人職種名・ポジション名を入力してください"),
  job_location: yup
    .string()
    .required("採用予定の求人の勤務地を入力してください"),
  checkBox: yup
    .boolean()
    .oneOf([true], "ご利用規約への同意をお願いいたします。"),
  phone: yup
    .string()
    .required("電話番号を入力してください")
    .matches(/^\d+(?:-\d+)*$/, "正しい電話番号をご入力ください。"),
  addressHiragana: yup
    .string()
    .nullable()
    .matches(/^[ぁ-んー　\s]*$/, "ひながなでご入力ください。"),
  addressMoreHiragana: yup
    .string()
    .nullable()
    .matches(/^[ぁ-んー　\s]*$/, "ひながなでご入力ください。"),
  about: yup.string(),
  zip: yup.string(),
});
interface MyFormComponentsProps {
  componentsName: string;
  register:
    | "title"
    | "firstNameKana"
    | "email"
    | "content"
    | "company_name"
    | "company_hp"
    | "position_name"
    | "posting_page"
    | "job_location"
    | "checkBox"
    | "phone"
    | "addressHiragana"
    | "addressMoreHiragana"
    | "zip"
    | "content";
  id?: any | null;
  name: string;
  onBlur?: (event: any) => Promise<void>;
  onChange?: (event: any) => void;
  value: any;
  important?: boolean | null;
  placeholder?: string;
  className?: string;
}
//UI components
const InputComponents: React.FC<MyFormComponentsProps> = ({
  componentsName,
  important,
  name,
  // register,
  onBlur,
  onChange,
  ...inputProps
}) => {
  const { t } = useTranslation();
  const { register } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <MyForm>
      <Tr>
        <Th>
          {name === "position_name" ? (
            <ImportantDesign>
              <Label htmlFor={inputProps.id} style={{ width: "725px" }}>
                <div> {t("form.saiyou_yotei_no")}</div>
                <div>{t("form.kyuujin_shokushu")}</div>
              </Label>
              <div style={{ width: "54%" }}>
                <Important style={{ padding: "6px 13px" }}>必須</Important>
              </div>
            </ImportantDesign>
          ) : 
          null}
          {name === "job_location" ? (
            <ImportantDesign>
              <Label htmlFor={inputProps.id} style={{ width: "725px" }}>
                <div>{t("form.saiyou_yotei_no")}</div>
                <div>{t("form.kyuujin_no_kinmu_chi")}</div>
              </Label>
              <div style={{ width: "74%" }}>
                <Important style={{ padding: "6px 13px" }}>必須</Important>
              </div>
            </ImportantDesign>
          ) : null}
          {name === "posting_page" ? (
            <div>
              <Label htmlFor={inputProps.id}>{t("form.saiyou_yotei_no")}</Label>
              <Label htmlFor={inputProps.id}>
                {t("form.kyuujin_keisai_peuji")}
              </Label>
              <Label style={{ fontSize: "1rem" }} htmlFor={inputProps.id}>
                ※WEB上で既に公開されている求人情報がございましたらURLをご記載ください
              </Label>
            </div>
          ) : null}
          <Label htmlFor={inputProps.id}>{componentsName}</Label>
          {important ? <Important>必須</Important> : null}
        </Th>
        <Td>
          {name === "zip" ? <Spance className="spaceZip">〒</Spance> : null}
          <Input
            {...inputProps}
            {...register(inputProps.register, { required: true })}
            onBlur={onBlur}
            onChange={onChange}
            id={inputProps.id}
            name={name}
            placeholder={inputProps.placeholder}
          ></Input>
          {name === "email" ? (
            <p style={{ margin: "4px 0 10px", fontSize: "1.3rem" }}>
              ({t("form.hankaku_eisuuji_nyuuryoku")} )
            </p>
          ) : null}
        </Td>
      </Tr>
    </MyForm>
  );
};

// UI component cho trường TextArea (ví dụ)
interface MyFormTextArea {
  register: "content";
  onBlur: (event: any) => Promise<void>;
  onChange: (event: any) => void;
  value: any | null;
  title: string;
  name: string;
  id?: string;
}
const TextAreaComponents: React.FC<MyFormTextArea> = (props) => {
  const { register } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <MyForm>
      <Tr style={{ alignItems: "flex-start" }}>
        <Th>
          <Label htmlFor={props.title}>{props.title}</Label>
          <Important>必須</Important>
        </Th>
        <Td>
          <TextArea
            {...register(props.register, { required: true })}
            onBlur={props.onBlur}
            onChange={props.onChange}
            id="content"
            name={props.name}
            autoComplete="off"
            className="textarea"
            value={props.value}
          ></TextArea>
        </Td>
      </Tr>
    </MyForm>
  );
};

//UI select components
interface MyFormSelectProps {
  componentsName: string;
  register: "title";
  options: { value: string; label: string }[];
  onBlur?: (event: any) => Promise<void>;
  onChange?: (event: any) => void;
  value: any | null;
  important?: boolean | null;
  className?: string;
  name?: string;
  id?: string;
}
const SelectComponents: React.FC<MyFormSelectProps> = ({
  componentsName,
  important,
  options,
  ...inputProps
}) => {
  const {
    register: registerForm, // Đổi tên register thành registerForm để tránh xung đột
  } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <MyForm>
      <Tr>
        <Th>
          <Label htmlFor={componentsName}>{componentsName}</Label>
          {important ? <Important>必須</Important> : null}
        </Th>
        <Td>
          <Selection>
            <select
              {...registerForm(inputProps.register, { required: true })}
              {...inputProps}
              name={inputProps.name}
              id={inputProps.id}
            >
              {/* Tạo các option từ mảng options */}
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Selection>
        </Td>
      </Tr>
    </MyForm>
  );
};
//UI Name components
interface NameComponentsProps {
  componentsName: string;
  firstRegister: "first_name" | "firstName";
  lastRegister: "last_name" | "lastName";
  nameFirst: string;
  nameLast: string;
  valueFirst: string;
  valueLast: string;
  nameId: any | null;
  onBlur: (event: any) => Promise<void>;
  onChange: (event: any) => void;
  important: boolean | null;
  firstId?: string;
  lastId?: string;
}
const InputNameComponents: React.FC<NameComponentsProps> = ({
  componentsName,
  firstRegister,
  lastRegister,
  important,
  ...inputProps
}) => {
  const { t } = useTranslation();
  const { register } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <MyForm>
      <Tr>
        <Th>
          <Label htmlFor={inputProps.nameId}>{componentsName}</Label>
          {important ? <Important>必須</Important> : null}
        </Th>
        <NameRight>
          <strong>{t("form.sei")}</strong>
          <Input
            {...inputProps}
            {...register(firstRegister, { required: true })}
            onBlur={inputProps.onBlur}
            onChange={inputProps.onChange}
            name={inputProps.nameFirst}
            value={inputProps.valueFirst}
            id={inputProps.firstId}
          ></Input>
          <strong>{t("form.mei")}</strong>
          <Input
            {...register(lastRegister, { required: true })}
            {...inputProps}
            onBlur={inputProps.onBlur}
            onChange={inputProps.onChange}
            name={inputProps.nameLast}
            value={inputProps.valueLast}
            id={inputProps.lastId}
          ></Input>
        </NameRight>
      </Tr>
    </MyForm>
  );
};

//nameKana components
interface NameKanaComponentsInter {
  componentsName: string;
  firstRegister: "first_name";
  firstKanaRegister: "first_name_kana";
  lastRegister: "last_name";
  lastKanaRegister: "last_name_kana";
  nameFirst: string;
  nameKanaFirst: string;
  nameLast: string;
  nameKanaLast: string;
  valueFirst: string;
  valueKanaFirst: string;
  valueLast: string;
  valueKanaLast: string;
  // nameId?: any | null;
  onBlur: (event: any) => Promise<void>;
  onChange: (event: any) => void;
  important?: boolean | null;
  firstNameId?: any;
  lastNameId?: any;
  firstNameKanaId?: any;
  lastNameKanaId?: any;
}
const NameKanaComponents: React.FC<NameKanaComponentsInter> = ({
  componentsName,
  important,
  firstRegister,
  lastRegister,
  ...inputProps
}) => {
  const { t } = useTranslation();
  return (
    <MyForm>
      <Tr>
        <Th style={{ margin: "auto 0" }}>
          <Label htmlFor={inputProps.firstNameId}>{componentsName}</Label>
          {important ? <Important>必須</Important> : null}
        </Th>
        <NameKanaRight>
          <BoxTop>
            <Box>
              <strong>{t("form.sei")}</strong>
              <Input
                // {...register(firstRegister, { required: true })}
                {...inputProps}
                onBlur={inputProps.onBlur}
                onChange={inputProps.onChange}
                name={inputProps.nameFirst}
                value={inputProps.valueFirst}
                id={inputProps.firstNameId}
              ></Input>
            </Box>
            <Box>
              <strong>{t("form.mei")}</strong>
              <Input
                // {...register(lastRegister, { required: true })}
                {...inputProps}
                onBlur={inputProps.onBlur}
                onChange={inputProps.onChange}
                name={inputProps.nameLast}
                value={inputProps.valueLast}
                id={inputProps.lastNameId}
              ></Input>
            </Box>
          </BoxTop>
          <BoxTop>
            <Box>
              <strong>{t("form.sei_kana")}</strong>
              <Input
                // {...register(firstKanaRegister, { required: true })}
                {...inputProps}
                onBlur={inputProps.onBlur}
                onChange={inputProps.onChange}
                name={inputProps.nameKanaFirst}
                value={inputProps.valueKanaFirst}
                id={inputProps.firstNameKanaId}
              ></Input>
            </Box>
            <Box>
              <strong>{t("form.mei_kana")}</strong>
              <Input
                // {...register(lastKanaRegister, { required: true })}
                {...inputProps}
                onBlur={inputProps.onBlur}
                onChange={inputProps.onChange}
                name={inputProps.nameKanaLast}
                value={inputProps.valueKanaLast}
                id={inputProps.lastNameKanaId}
              ></Input>
            </Box>
          </BoxTop>
        </NameKanaRight>
      </Tr>
    </MyForm>
  );
};
//checkboxComponent
interface checkBox {
  componentsName: string;
  register: "checkBox";
  id: any | null;
  name: string;
  checked: any;
  className: string;
  onChange: (event: any) => void;
  onBlur: any;
  value: any;
  content: any;
  // style?: any;
}

const CheckBoxComponents: React.FC<checkBox> = ({
  id,
  componentsName,
  content,
  ...inputProps
}) => {
  const { t } = useTranslation();
  const { register } = useForm({
    resolver: yupResolver(schema),
  });
  return (
    <MyForm>
      <Tr style={{ alignItems: "flex-start" }}>
        <Th>
          <Label htmlFor={id}>{componentsName}</Label>
          <Important>必須</Important>
        </Th>
        <Td>
          <Text>
            <p>{content}</p>
          </Text>
          <LabelCheck>
            <input
              {...register(inputProps.register, { required: true })}
              {...inputProps}
              id={id}
              type="checkbox"
              onChange={inputProps.onChange}
              onBlur={inputProps.onBlur}
            ></input>
            <span className="">
              {t("form.kojin_jouhou_toriatsukai_ni_doui_suru")}
            </span>
          </LabelCheck>
        </Td>
      </Tr>
    </MyForm>
  );
};
// UI component cho trường birthday
interface MyFormDate {
  onChange: (event: any) => void;
  yearValue: any | null;
  monthValue: any | null;
  dayValue: any | null;
  yearName: string;
  monthName: string;
  dayName: string;
  id?: string;
}
const DateComponents: React.FC<MyFormDate> = ({
  onChange,
  yearValue,
  monthValue,
  dayValue,
  yearName,
  monthName,
  dayName,
  id,
}) => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <Selection>
      <select id={id} name={yearName} value={yearValue} onChange={onChange}>
        {listOption(currentYear - 72, currentYear - 10)
          .sort((a, b) => b - a)
          .map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
      </select>
      <span className="space">{t("form.toshi")}</span>
      <select
        name={monthName}
        className="birthdayMonth"
        value={monthValue}
        onChange={onChange}
      >
        {listOption(1, 12).map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <span className="space">{t("form.tsuki")}</span>
      <select name={dayName} onChange={onChange} value={dayValue}>
        {getSpecialDay(yearValue, monthValue).map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <span className="space">{t("form.hi")}</span>
    </Selection>
  );
};
//UI select components
interface CreatedDate {
  componentsName: string;
  // register: "title";
  onBlur: any;
  onChangeYear: (event: any) => void;
  onChangeMonth: (event: any) => void;
  onChangeDay: (event: any) => void;
  yearValue: any | null;
  monthValue: any | null;
  dayValue: any | null;
  important?: boolean | null;
  className?: string;
  yearName?: string;
  monthName?: string;
  dayName?: string;
  type?: string;
}
const CreatedDateComponents: React.FC<CreatedDate> = ({
  componentsName,
  important,
  type,
  yearValue,
  monthValue,
  dayValue,
  onBlur,
  ...inputProps
}) => {
  const { t } = useTranslation();
  return (
    <MyForm>
      <Tr>
        <Th>
          <Label htmlFor={componentsName}>{componentsName}</Label>
          {important ? <Important>必須</Important> : null}
        </Th>
        <Td>
          <Wrapper>
            <div>
              <InputText
                onBlur={onBlur}
                onChange={inputProps.onChangeYear}
                type={type}
                value={yearValue}
                maxLength={4}
                name={inputProps.yearName}
              ></InputText>
            </div>
            <span className="space">{t("form.toshi")}</span>
            <div>
              <InputText
                onBlur={onBlur}
                type={type}
                value={monthValue}
                onChange={inputProps.onChangeMonth}
                maxLength={2}
                name={inputProps.monthName}
              ></InputText>
            </div>
            <span className="space">{t("form.tsuki")}</span>
            <div>
              <InputText
                onBlur={onBlur}
                type={type}
                value={dayValue}
                onChange={inputProps.onChangeDay}
                maxLength={2}
                name={inputProps.dayName}
              ></InputText>
            </div>
            <span className="space">{t("form.hi")}</span>
          </Wrapper>
        </Td>
      </Tr>
    </MyForm>
  );
};
//modal Components
interface ModalContentsProps {
  heights?: any;
  onFunction: (event?: any) => void;
  status: any;
  children: ReactNode; //Thêm thuộc tính children
  showModal: any;
}
const ModalComponents: React.FC<ModalContentsProps> = ({
  onFunction,
  heights,
  status,
  children, //Nhập children vào props
  showModal,
}) => {
  // const { t } = useTranslation();
  const height = heights ? heights : "50";
  // Chuyển children thành mảng các phần tử con
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <ReInfoModal
        status={status}
        showModal={showModal}
        onFunction={onFunction}
        title="入力したデータをご確認ください。"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="Wrapper"
            style={{
              minHeight: "530px",
              height: `${height * childrenArray.length}px`,
              overflowY: "auto",
            }} // Tính toán chiều cao dựa trên số lượng phần tử con
          >
            {childrenArray.map((child, index) => (
              <UIModal
                key={index}
                className="value"
                style={{ height: `${height}px` }}
              >
                {child} {/* Render các phần tử con */}
              </UIModal>
            ))}
          </div>
          <div style={{ fontSize: "2rem", margin: "20px auto 0" }}>
            よろしければ、、"アクセス" ボタンを押してください{" "}
          </div>
        </div>
      </ReInfoModal>
    </>
  );
};
export interface ModalChildProps {
  value: any;
  id: any;
  componentsName: any;
  setModal: (value: boolean) => void; // Khai báo setModal như một prop
}

const ModalChild: React.FC<ModalChildProps> = ({
  componentsName,
  value,
  id,
  setModal, // Sử dụng setModal như một prop bình thường
}) => {
  return (
    <>
      <div>{componentsName}</div>
      <A
        href="#"
        onClick={(e) => {
          setModal(false); // Sử dụng setModal trong component ModalChild
          e.preventDefault();
          document.getElementById(id)?.focus();
        }}
      >
        {value}
      </A>
    </>
  );
};
export {
  InputComponents,
  TextAreaComponents,
  SelectComponents,
  InputNameComponents,
  CheckBoxComponents,
  NameKanaComponents,
  DateComponents,
  CreatedDateComponents,
  ModalComponents,
  ModalChild,
};
