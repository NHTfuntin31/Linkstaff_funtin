import { useTranslation } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Container } from "../registrationPage/News";
import styled from "styled-components";
import { FormBox } from "../registrationPage/Basic";
import { MyForm } from "../components/MyForm";
import { Selection } from "../registrationPage/Basic";
// import { DdTag } from "../pages/Information";
import Breadcrumbs from '../components/Breadcrumbs';

const Content = styled.div`
  justify-content: center;
  margin: 0;
  padding: 40px 0 100px;
  background: #f4f6f7;
  .MyInput {
    height: 50px;
    background: #fff;
    font-size: 13px;
    padding: 0 20px;
    border-radius: 4px;
    border: 1px solid #e1e6ea;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;
    @media screen and (max-width: 896px) {
      border: 2px solid rgb(225, 230, 234);
      width: 100% !important;
    }
  }
  .validationInquiry {
    position: absolute !important;
    color: red;
    font-size: 1.1rem !important;
    left: 5px;
    bottom: -30px;
  }
  .area {
    display: block;
    background: #ffffff;
    font-size: 13px;
    padding: 20px;
    border: 1px solid #e1e6ea;
    height: 160px;
    width: 100%;
  }
  @media screen and (max-width: 896px) {
    width: 100%;
  }
`;
const TitleTop = styled.div`
  margin: 0 auto;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  .headerText {
    margin: 35px auto;
    font-weight: bold;
    font-size: 3rem !important;
  }
`;
const HeaderBottom = styled.div`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.9;
  text-align: left;
  margin-bottom: 40px;
`;
const BoxTop = styled.div`
  font-size: 1.3rem;
  width: 100%;
  display: flex;
  strong {
    margin: auto 7px;
  }
  @media screen and (max-width: 896px) {
    width: 100%;
  }
`;

export const DlTag = styled.dl`
  display: flex;
  @media screen and (max-width: 896px) {
    display: block;
    p {
      width: auto;
      margin-right: 10px;
    }
    .inputTitle {
      margin-bottom: 10px;
      @media screen and (max-width: 896px) {
        display: flex;
        width: 100%;
        justify-content: space-between;
      }
    }
  }
`;
export const DtTag = styled.dt`
  font-weight: bold;
  margin: 0 0 10px;
  font-size: 1.4rem;
  padding: 10px;
  width: 33%;
`;
const SpanTag = styled.span`
  display: block;
  width: 280px;
  font-weight: bold;
`;
const Important = styled.span`
  font-size: 10px;
  padding: 5px 10px;
  color: #fff;
  background: #ff0000;
  @media screen and (max-width: 896px) {
    float: right;
  }
`;
const InputTitle = styled.div`
  font-size: 1.4rem;
  div {
    display: flex;
    width: 350px;
  }
`;
const InputTitleInquiry = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 1.4rem;
  div {
    display: flex;
    width: 350px;
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
  .checkbox {
    display: book;
    width: 30px;
    height: 15px;
  }
`;
const RegisterButton = styled.button`
  display:block;
  width: 286px;
  margin: 0 auto;
  padding: 1.3rem 0.5rem;
  background: #f86608;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size:16px;
  font-weight:700;
  margin-top: 50px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media screen and(max-width: 896px) {
    margin: 0 20px 60px 20px;
    width: auto;
    border-radius: 2px;
  }
`;
const Strong = styled.strong`
  /* position: relative; */
`;
const Validator = styled.div`
  position: relative;
  width: 100%;
`;
function Inquiry() {
  const { t } = useTranslation();
  interface FormValues {
    Content: string;
  }
  const validationSchema: Yup.Schema<FormValues> = Yup.object({
    lastName: Yup.string().required("お名前をご入力ください。"),
    firstName: Yup.string().required("お名前をご入力ください。"),
    email: Yup.string()
      .required("メールアドレスをご入力ください。")
      .matches(/^[a-zA-Z0-9._%+-]+@.*$/, "正しいメールをご入力ください。"),
    Content: Yup.string().required("内容をご入力ください。"),
  });
  return (
    <>
      <Formik
        initialValues={{ Content: "" }}
        validationSchema={validationSchema}
        onSubmit={(values: FormValues, ) => {
          // Xử lý submit form tại đây
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <Container>
              <Breadcrumbs></Breadcrumbs>
              <Content>
                <TitleTop>
                  <h1 className="headerText">{t('common.otoiawase')}</h1>
                </TitleTop>
                <HeaderBottom>
                  必要事項をご記入の上、「入力内容を確認する」を押して次の画面に進んでください。
                </HeaderBottom>
                <FormBox>
                  <MyForm>
                    <DlTag>
                      <InputTitle>
                        <div className="inputTitle">
                          <SpanTag>お問い合わせ項目</SpanTag>
                          <Important>必須</Important>
                        </div>
                      </InputTitle>
                      <dd>
                        <Selection>
                          <select
                            className="inputText410px"
                            name="title"
                            title="お問い合わせ項目を選択してください"
                          >
                            <option value="">選択して下さい。</option>
                            <option value="転職相談サービスに関するお問い合わせ">
                              転職相談サービスに関するお問い合わせ
                            </option>
                            <option value="転職コンシェルジュの変更について">
                              転職コンシェルジュの変更について
                            </option>
                            <option value="その他">その他</option>
                          </select>
                        </Selection>
                      </dd>
                    </DlTag>
                  </MyForm>
                  <MyForm>
                    <DlTag>
                      <InputTitle>
                        <div className="inputTitle">
                          <SpanTag>お名前</SpanTag>
                          <Important>必須</Important>
                        </div>
                      </InputTitle>
                      <BoxTop>
                        <Strong>姓</Strong>
                        <Validator className="">
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            autoComplete="off"
                            className="MyInput"
                          ></Field>
                          <span className="validationInquiry">
                            <ErrorMessage name="lastName" component="div" />
                          </span>
                        </Validator>
                        <Strong>名</Strong>
                        <Validator>
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            autoComplete="off"
                            className="MyInput"
                          ></Field>
                          <span className="validationInquiry">
                            <ErrorMessage name="firstName" component="div" />
                          </span>
                        </Validator>
                      </BoxTop>
                    </DlTag>
                  </MyForm>
                  <MyForm>
                    <DlTag>
                      <InputTitle>
                        <div className="inputTitle">
                          <SpanTag>メールアドレス</SpanTag>
                          <Important>必須</Important>
                        </div>
                      </InputTitle>
                      {/* <DdTag> */}
                        <Validator>
                          {/* <InputText style={{ width: "100%" }}></InputText> */}
                          <Field
                            type="text"
                            id="email"
                            name="email"
                            autoComplete="off"
                            className="MyInput"
                          ></Field>
                          （半角英数字入力）
                          <span className="validationInquiry">
                            <ErrorMessage name="email" component="div" />
                          </span>
                        </Validator>
                      {/* </DdTag> */}
                    </DlTag>
                  </MyForm>
                  <MyForm>
                    <DlTag>
                      <InputTitleInquiry>
                        <div className="inputTitle">
                          <SpanTag>お問い合わせ内容</SpanTag>
                          <Important>必須</Important>
                        </div>
                      </InputTitleInquiry>
                      {/* <DdTag> */}
                        <Field
                          type="text"
                          id="content"
                          name="Content"
                          autoComplete="off"
                          className="area"
                          as="textarea"
                        />
                        <span className="validationInquiry">
                          <ErrorMessage name="Content" component="div" />
                        </span>
                      {/* </DdTag> */}
                      <span className="validationInquiry">
                        <ErrorMessage name="content" component="div" />
                      </span>
                    </DlTag>
                  </MyForm>
                  <MyForm>
                    <DlTag>
                      <InputTitleInquiry>
                        <div className="inputTitle">
                          <SpanTag>個人情報の取扱いについて</SpanTag>
                          <Important>必須</Important>
                        </div>
                      </InputTitleInquiry>
                      {/* <DdTag> */}
                        <Text>
                          <p>
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
                            株式会社ワークポート経営管理グループ
                            個人情報保護管理者 中野晶
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
                          </p>
                        </Text>
                        <LabelCheck className="">
                          <input
                            name="checkBox"
                            id="checkBox"
                            type="checkbox"
                            value="yes"
                            className="checkbox"
                          ></input>
                          <span className="">個人情報取扱いに同意する</span>
                        </LabelCheck>
                      {/* </DdTag> */}
                    </DlTag>
                  </MyForm>
                </FormBox>
                <RegisterButton>
                      <span>入力内容を確認する</span>
                </RegisterButton>    
              </Content>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Inquiry;
