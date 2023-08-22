import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Breadcrumbs from "../components/Breadcrumbs";
import { Container, Header, Main } from "./FavouriteJobsPage";
import { listOption, getSpecialDay } from "../global/globalfuntion";
import { useState } from "react";
import Select from "../components/Apply/Select";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../redux/store/Store";
import { ButtonSignup, ButtonLogin, SmallButton } from "../components/ButtonStyled";

const Body = styled.div`
    width: 100%;
`;

const ApplyBox = styled.section`
    background-color: white;
    padding: 60px 50px;
`;

const ApplyForm = styled.div`
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    #fieldBlock {
        height: 120px;
    }
`;

const InputFeild = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    margin: 0 0 40px;
    #block {
        display: block !important;
        div {
        margin-top: 10px;
        }
    }
    @media (max-width: 900px) {
        display: block;
    }
`;

const InputTitle = styled.div`
    display: flex;
    width: 35%;
    
`;
const InputBox = styled.div`
    display: flex;
    width: 65%;
    gap: 20px;
    font-size: 13px;
    font-weight: bold;
    div {
        display: flex;
        align-items: center;
        margin-left: 20px;
        input[type="radio"] {
            display: none;
        }
        input[type="file"] {
            display: none;
        }
        .form-check_hsk-tl {
            font-weight: bold;
        }
        .inputbox {
            height: 50px;
            background: #fff;
            padding: 0 20px;
            border-radius: 4px;
            border: 1px solid #e1e6ea;
            box-shadow: none;
            padding: 0 20px;
            outline: none;
        }
        span {
            margin: 10px;
        }
        .contactLabel {
            display: block;
            padding: 15px 36px;
            border: 1px solid;
            border-radius: 4px;
            background: #fff;
            color: #000;
            margin-right: 20px;
            cursor: pointer;
        }
        .selectedRadio {
            background: #000;
            color: #fff;
        }
        
    .select {
        width: 150px;
    }
    .longInput {
        width: 340px !important;
    }
    .longSelect {
        width: 170px !important;
    }
    .contactTime {
        color: #75787e;
    }
    .maxLong {
        width: 100% !important;
    }
    }
    .required {
        background-color: #fff7f8 !important;
    }
`;

const Tag = styled.span`
    font-weight: normal;
    background: #f40b0b;
    padding: 3px 10px;
    color: #fff;
    float: right;
`;
const FirstTitle = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;
const SecondTitle = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #tag {
        background: #9299a5 !important;
    }
`;

const LinkModal = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
        color: #000;
        text-decoration: underline;
        font-size: 12px;
        transition: color 0.4s ease-out;
        &:hover {
            color: #26a24c;
        }
    }
`;

const ApplyButton = styled.div`
    max-width: 320px;
    height: 60px;
    margin: 0 auto;
`;
const Apply = () => {
    const { search } = useLocation();
    const id = search.slice(4);
    console.log(id);
    const userEmail = useSelector((state: RootState) => state.auth.CurrentUser?.user.email);
    const [year, setYear] = useState<string | number>(0);
    const [month, setMonth] = useState<string | number>(0);
    const [day, setDay] = useState<string | number>(0);
    const [email, setEmail] = useState<string>(userEmail ?? '');
    const [jobNumber, setJobNumber] = useState<string | number>(0);
    const [jobType, setJobType] = useState<number | string>(0);
    const [contact, setContact] = useState<number>(1);
    const [resume, setResume] = useState<File | null>();
    const [workHistory, setWorkHistory] = useState<File | null>();
    const currentYear = new Date().getFullYear();
    const getJobType = (data: number | string) => {
        setJobType(data);
    }
    console.log(jobType);
    return (
        <>
            <Breadcrumbs />
            <Container>
                <Main>
                    <Header>
                        <h1 style={{ fontSize: "30px" }}>
                            転職相談サービスに申し込む（無料）
                        </h1>
                    </Header>
                    <Body>
                        <ApplyBox>
                            <div className="box">
                                <ApplyForm>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>お名前</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span>漢字</span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="inputbox required"
                                                    name="firstname"
                                                    placeholder="姓"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="inputbox required"
                                                    name="lastname"
                                                    placeholder="名"
                                                />
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle />
                                            <SecondTitle>
                                                <span>カナ</span>
                                                <Tag id="tag">任意</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="inputbox"
                                                    name="firstname_kana"
                                                    placeholder="セイ"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="inputbox"
                                                    name="lastname_kana"
                                                    placeholder="メイ"
                                                />
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>生年月日</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <select
                                                    name="year"
                                                    className={`inputbox select ${year == 0 ? "required" : ""
                                                        }`}
                                                    value={year}
                                                    onChange={(e) => setYear(e.target.value)}
                                                >
                                                    <option value="">西暦（年号）</option>
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
                                                <span>年</span>
                                                <select
                                                    name="month"
                                                    className={`inputbox select ${month == 0 ? "required" : ""
                                                        }`}
                                                    value={month}
                                                    onChange={(e) => setMonth(e.target.value)}
                                                >
                                                    <option value=""></option>
                                                    {listOption(1, 12).map((item, index) => {
                                                        return (
                                                            <option key={index} value={item}>
                                                                {item}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                <span>月</span>
                                                <select
                                                    name="day"
                                                    className={`inputbox select ${day == 0 ? "required" : ""
                                                        }`}
                                                    value={day}
                                                    onChange={(e) => setDay(e.target.value)}
                                                >
                                                    <option value=""></option>
                                                    {getSpecialDay(year, month).map((item, index) => {
                                                        return (
                                                            <option key={index} value={item}>
                                                                {item}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                <span>日</span>
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>ご連絡先メールアドレス</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="inputbox required longInput"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>電話番号</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="inputbox required longInput"
                                                    name="phone"
                                                />
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>お住まいの都道府県</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <select
                                                    name=""
                                                    className="inputbox required longSelect"
                                                >
                                                    <option value="">選択してください</option>
                                                </select>
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>希望勤務地</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <select
                                                    name=""
                                                    className="inputbox required longSelect"
                                                >
                                                    <option value="">選択してください</option>
                                                </select>
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>希望職種</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <input
                                                    type="text"
                                                    className="inputbox required longInput"
                                                    name="apply"
                                                />
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild id={jobNumber == 0 ? "" : "fieldBlock"}>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>直近の経験職種</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox id="block">
                                            <div>
                                                <select
                                                    name=""
                                                    value={jobNumber}
                                                    className={`inputbox select ${jobNumber == 0 ? "required longInput" : "longInput"
                                                        }`}
                                                    onChange={(e) => setJobNumber(e.target.value)}>
                                                    <option value="">職種-詳細</option>
                                                    <option value="1">
                                                        ソフト開発・システムエンジニア系
                                                    </option>
                                                    <option value="2">クリエイティブ系</option>
                                                    <option value="3">ゲーム制作関連</option>
                                                    <option value="4">
                                                        通信・インフラエンジニア系
                                                    </option>
                                                    <option value="5">
                                                        コンサルタント・プリセールス系
                                                    </option>
                                                    <option value="6">
                                                        ヘルプデスク・ユーザーサポート
                                                    </option>
                                                    <option value="7">営業系</option>
                                                    <option value="8">経営企画・事業開発</option>
                                                    <option value="9">
                                                        マーケティング・プロモーション系
                                                    </option>
                                                    <option value="10">事務・管理系</option>
                                                    <option value="11">販売・サービス系</option>
                                                    <option value="12">物流・運輸・購買</option>
                                                    <option value="13">
                                                        研究、製品開発/品質・評価系
                                                    </option>
                                                    <option value="14">ものづくり系エンジニア</option>
                                                    <option value="15">製薬・創薬系</option>
                                                    <option value="16">医療系専門職</option>
                                                    <option value="17">金融・保険・証券系</option>
                                                    <option value="18">
                                                        建設・土木・プラント・設備
                                                    </option>
                                                    <option value="19">不動産専門職</option>
                                                    <option value="20">未経験・第二新卒系</option>
                                                    <option value="21">役員</option>
                                                    <option value="22">福祉・保育・介護</option>
                                                    <option value="23">
                                                        教員・公務員・その他専門職
                                                    </option>
                                                </select>
                                            </div>
                                            <Select option={jobNumber} getData={getJobType} />
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>電話連絡</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag>必須</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox id="block">
                                            <div>
                                                <input
                                                    type="radio"
                                                    className="contact"
                                                    name="contact"
                                                    id="yes"
                                                    value={contact}
                                                    checked={contact == 1}
                                                    onClick={() => setContact(1)}
                                                />
                                                <label htmlFor="yes" className={`contactLabel ${contact == 1 ? 'selectedRadio' : ''}`}>可能</label>
                                                <input
                                                    type="radio"
                                                    className="contact"
                                                    name="contact"
                                                    id="no"
                                                    value={contact}
                                                    checked={contact == 0}
                                                    onClick={() => setContact(0)}
                                                />
                                                <label htmlFor="no" className={`contactLabel ${contact == 0 ? 'selectedRadio' : ''}`}>不可</label>
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild style={{ margin: '40px 0 60px 0' }}>
                                        <InputTitle />
                                        <InputBox>
                                            <div className="merit" style={{ display: 'block', fontWeight: '500' }}>
                                                <p className="form-check-km">登録完了後、電話でご連絡させていただく場合がございます。</p>
                                                <p className="form-check_hsk-tl">[ 電話連絡のメリット ]</p>
                                                <ul className="form-check_hsk_ul">
                                                    <li>・面談日程の調整がスピーディに行えます。</li>
                                                    <li>・予約枠により、当日予約が可能な場合があります。</li>
                                                    <li>・ワークポートでの転職活動における要望をお受けできます。</li>
                                                </ul>
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>電話可能時間帯</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag id="tag">任意</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox>
                                            <div>
                                                <select
                                                    name=""
                                                    className="inputbox longInput contactTime"
                                                >
                                                    <option value="99">いつでも可能</option>
                                                    <option value="10">午前中</option>
                                                    <option value="20">12：00～15：00</option>
                                                    <option value="30">15：00～18：00</option>
                                                    <option value="40">18：00～21：00</option>
                                                </select>
                                            </div>
                                        </InputBox>
                                    </InputFeild>
                                    <p className="fileTitle">履歴書/職務経歴書も任意で追加いただけます</p>
                                    <InputFeild style={{ marginTop: '40px' }} id={resume?.name ? "fieldBlock" : ""}>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>履歴書</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag id="tag">任意</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox id="block">
                                            <div>
                                                <input
                                                    type="file"
                                                    className="resume"
                                                    name="resume"
                                                    id="resume"
                                                    onChange={(e) => setResume(e.target.files ? e.target.files[0] : null)}
                                                />
                                                <label htmlFor="resume" className="contactLabel">ファイルを選択</label>
                                            </div>
                                            {resume?.name &&
                                                <div>
                                                    <span>{resume.name}</span>
                                                </div>
                                            }
                                        </InputBox>
                                    </InputFeild>
                                    <InputFeild id={workHistory?.name ? "fieldBlock" : ""}>
                                        <InputTitle>
                                            <FirstTitle>
                                                <span>職務経歴書</span>
                                            </FirstTitle>
                                            <SecondTitle>
                                                <span></span>
                                                <Tag id="tag">任意</Tag>
                                            </SecondTitle>
                                        </InputTitle>
                                        <InputBox id="block">
                                            <div>
                                                <input
                                                    type="file"
                                                    className="work_history"
                                                    name="work_history"
                                                    id="work_history"
                                                    onChange={(e) => setWorkHistory(e.target.files ? e.target.files[0] : null)}
                                                />
                                                <label htmlFor="work_history" className="contactLabel">ファイルを選択</label>
                                            </div>
                                            {workHistory?.name &&
                                                <div>
                                                    <span>{workHistory.name}</span>
                                                </div>
                                            }
                                        </InputBox>
                                    </InputFeild>
                                    <LinkModal>
                                        <a href="">利用規約を見る</a>
                                    </LinkModal>
                                    <ApplyButton>
                                        <ButtonSignup>
                                            <span>利用規約に同意し、登録する</span>
                                        </ButtonSignup>
                                    </ApplyButton>
                                    <SmallButton><ButtonLogin>
                                        <span>利用</span>
                                    </ButtonLogin></SmallButton>
                                </ApplyForm>
                            </div>
                        </ApplyBox>
                    </Body>
                </Main>
            </Container>
        </>
    );
};

export default Apply;
