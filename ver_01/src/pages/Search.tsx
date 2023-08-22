import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { JobTestType } from "../types/JobTestType";
import {
   ButtonNormal,
   ButtonSignup,
   LargeButton,
  ButtonFavourite
} from "../components/ButtonStyled";
import SearchModal from "../components/Modal/searchModal";
import { APITokenInHeader, baseAPI } from "../global/global";

const Main = styled.div`
   display: flex;
   flex-direction: column;
   background: #f4f6f7;
   font-weight: bold;
`;

const Recuit_Box = styled.section`
   display: block;
   background: #fff;
   width: 65%;
   margin-top: 40px;
   margin: 25px auto;
   padding: 30px 30px;
   @media (max-width: 968px) {
      width: 95%;
   }
`;
const Recuit_Top = styled.div`
   @media (max-width: 968px) {
      .media968px {
         font-size: 15px;
      }
   }
   .Recuit_top {
      display: flex;
      flex-direction: column;
      margin-bottom: 7px;
      @media (max-width: 968px) {
         display: block;
         .favourite {
            height: 30px;
         }
      }
      .favourite {
         width: 100%;
         position: relative;
      }
      .company {
         display: flex;
         .status li {
            font-size: 10px;
            line-height: 1;
            margin-right: 5px;
            display: block;
            color: #fff;
            padding: 4px 6px;
            background: #ff1b00;
            border: 1px solid #ff1b00;
         }
      }
   }
`;

const Favourite_Button = styled.div`
   position: absolute;
   right: 0;
   top: -10px;
   width: 100px;
   height: 40px;
   @media (max-width: 968px) {
      width: 100%;
   }
`;

const Recuit_Title = styled.h2`
   font-size: 20px;
   font-weight: bold;
   line-height: 1.4;
   margin-bottom: 10px;
   a {
      color: #000;
      text-decoration: none;
      &:hover {
         text-decoration: underline;
      }
   }
   .recuit_text {
      font-size: 12px;
      font-weight: bold;
      line-height: 1.5;
      margin-bottom: 15px;
   }
`;

const Recuit_Body = styled.div`
   margin-top: 20px;
   padding-top: 20px;
   border-top: 1px solid #e1e6ea;
`;
export const Recuit_Information = styled.div`
   @media (max-width: 968px) {
      .information {
         flex-direction: column;
      }
   }
   .information {
      display: flex;
      flex-wrap: nowrap;
      margin-bottom: 30px;
      li {
         font-size: 13px;
         max-width: 550px;
         display: flex;
         span {
            display: inline-block;
            width: 86px;
            font-weight: bold;
            padding-left: 20px;
            position: relative;
         }
      }
   }
`;
const Box = styled.div`
   display: flex;
   flex-direction: row;
   @media (max-width: 968px) {
      flex-direction: column;
   }
   .box_left {
      width: 100%;
      .box_text {
         font-size: 13px;
         font-weight: 700;
      }
   }
   .box_right {
      margin-left: 20px;
   }
`;

const Box_Top = styled.dl`
   display: flex;
   flex-wrap: nowrap;
   margin-bottom: 30px;
   dt {
      font-size: 13px;
      width: 86px;
   }
   dd {
      font-size: 13px;
   }
`;
const SearchTop = styled.div`
   font-size: 1.2rem;
   margin: 50px auto;
   padding: 30px;
   line-height: 50px;

   display: flex;
   height: 50px;
   justify-content: flex-end;
   align-items: center;
   gap: 250px;
`;
const DropDown = styled.div`
   display: flex;
   justify-content: flex-end;
   button {
      display: flex;
      width: 460px;
      height: 50px;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: 1px solid #000;
      background: #fff;
      transition: background-color 0.5s ease, color 0.5s ease;

      &:hover {
         cursor: pointer;
         color: white;
         background-color: black;
      }
   }
`;
const Image = styled.div`
   img {
      object-fit: cover;
      width: 100%;
   }
`;

const Recuit_Bottom = styled.ul`
   display: flex;
   flex-wrap: nowrap;
   justify-content: center;
   padding-top: 30px;
   gap: 20px;
   .viewBtn {
      font-size: 12px;
   }
   @media (max-width: 1000px) {
      justify-content: space-between;
      .viewBtn {
         width: 150px;
      }
   }
`;

export const Recuit_Tag = styled.ul`
   display: flex;
   flex-wrap: nowrap;
   li {
      font-size: 10px;
      line-height: 1;
      margin-right: 5px;
      display: block;
      background: #fff;
      border-radius: 0;
      padding: 4px 8px;
      border: 1px solid #000;
   }
`;

export const Recuit_Company = styled.div`
   display: flex;
   font-size: 15px;
   font-weight: bold;
   margin-right: 20px;
`;

const MenuTab = styled.nav`
   height: 50px;
   max-width: 1024px;
   margin: 0 auto;
   padding: 20px;
   ul {
      display: grid;
      grid-template-columns: auto auto auto auto auto;
      height: 100%;
      align-items: center;
   }
   a {
      display: inline-block;
      text-align: center;
      width: 100%;
      position: relative;
      overflow: hidden;
      color: black;
      text-decoration: none;
      font-size: 1.5rem;
      &:hover {
         color: green;
         font-weight: bold;
      }
   }

   a:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: green;
      transform: translate(-100%, 0);
      transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
      content: "";
   }

   a:hover:after {
      transform: translate(0, 0);
   }
   li {
      list-style: none;
      padding: 0 10px;
      border-left: 1px solid lightgray;
      border-right: 1px solid lightgray;
   }
   li + li {
      border-left: 0;
   }
`;

const SearchBox = styled.div`
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   align-items: left;
   width: 50%;
   margin: 25px auto;
   padding: 30px;

   & .BtnCenter {
      align-self: center;
   }
`;
const SearchInfo = styled.div`
   span {
      color: #eb5505;
      font-size: 3.4rem;
      line-height: 1;
      font-weight: bold;
      padding-left: 0.5rem;
   }
   h1 {
      font-size: 3.4rem;
   }
`;
const PaginateBox = styled.div`
   border: none;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   gap: 345.27px;
`;
const Indicates = styled.button`
   select {
      border: none;
      display: flex;
      width: 120px;
      height: 40px;
      padding: 13px 11px 13px 21px;
      color: #75787e;
      font-size: 1.2rem;
   }
`;
const SearchItem = styled.div`
   span {
      font-size: 1.3rem;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      .Kinmuti {
         padding-left: 0rem;
         padding-right: 2rem;
      }
   }
   input {
      width: 730px;
      height: 50px;
      padding: 16.5px 21px 15.5px 21px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #e1e6ea;
      background: #fff;
   }
   button {
      width: 120px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid #000;
      background: #fff;
      cursor: pointer;
      transition: background-color 0.5s ease, color 0.5s ease;

      &:hover {
         cursor: pointer;
         color: white;
         background-color: black;
      }
   }
   margin: 15px 0px;
`;
const SearchButton = styled.div`
   button {
      font-size: 1.3rem;
      width: 300px;
      height: 60px;
      padding: 20px 100.8px 20px 101px;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      border-radius: 4px;
      border: 1px solid #000;
      background: #fff;
      transition: background-color 0.5s ease, color 0.5s ease;

      &:hover {
         color: white;
         background-color: black;
      }
   }
`;
const PaginatePage = styled.div`
   display: inline-flex;
   gap: 6px;
   position: relative;
   button {
      display: flex;
      width: 30px;
      height: 30px;
      padding: 6px 11px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 7px;

      color: #000000;
      font-size: 12px;
      font-family: Inter;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &.top {
         display: flex;
         width: 60px;
         height: 30px;
         padding: 8px 12px;
         justify-content: center;
         align-items: center;
         gap: 7px;

         color: #000;
         font-size: 10px;
         font-family: Inter;
         font-style: normal;
         font-weight: 400;
         line-height: normal;
      }
   }

   button.active {
      color: white;
      border: 1px solid #e1e6ea;
      background: #000;
   }
`;

const Previous = styled.div`
   display: flex;
   gap: 6px;
   position: absolute;
   left: -100px;
`;

const Next = styled.div`
   display: flex;
   gap: 6px;
   position: absolute;
   right: -100px;
`;

const Search = () => {
   const { t } = useTranslation();
   const [page, setPage] = useState<string | number | null>(
      sessionStorage.getItem("page")
   );
   const [getpram, setGetParam] = useState<string | null>(
      sessionStorage.getItem("param")
   );
   const [param, setParam] = useState<string | null>(
      sessionStorage.getItem("param")
   );
   const [pagesize, setPagesize] = useState<string | number | null>(
      sessionStorage.getItem("pageSize")
   );
   const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
   const [showSearchModal, setshowSearchModal] = useState(false); //検査モダールの状態
   const [selectedAria, setselectedAria] = useState<string[]>([]); //モダールから選択した値を保存
   const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
   
   //session StorageからmyArrayの値を受け取る
   const storedArray: any = sessionStorage.getItem("myArray");
   const [dataArray, setDataArray] = useState<string[]>(() => {
      return storedArray ? JSON.parse(decodeURIComponent(storedArray)) : [];
   });
   //お気に入りStoreアップデートするため
//    useEffect(() => {
//       GetFavouriteJob(userId ?? 0,jwt ?? "",dispatch)
//   },[jwt,userId,dispatch])
   //session Storageの変換する時に、新しい値をsetDataArrayに代入する
   useEffect(() => {
      setDataArray(JSON.parse(decodeURIComponent(storedArray)));
   }, [storedArray]);
   useEffect(() => {
      setshowSearchModal(true);
      const timeoutId = setTimeout(() => {
          setshowSearchModal(false);
      }, 50);
      return () => clearTimeout(timeoutId);
  }, []);
   //ログインする前のお気に入りボタンを押した値を保存
   // useEffect(() => {
   //    const idString = sessionStorage.getItem('gomi_id');
   //    const id: any = idString ? parseInt(idString) : null;
   //    if (jwt && idString && !jobArr.includes(id) && jobArr.length > 0) {
   //       const newArr: any[] = [...jobArr, id];
   //       if (userId) {
   //             UpadateJob(userId, jwt, newArr, dispatch);
   //       }
   //       sessionStorage.removeItem('gomi_id');
   //    }
   //    if(jobArr.includes(id)){
   //       sessionStorage.removeItem('gomi_id');
   //    }
   //  },[jwt, jobArr, dispatch]);
   //dataArrayに選択した値を 'or'検索を設定
   let ariaArray: any[] = [];
   if (dataArray) {
      ariaArray = dataArray.map((item, index) => {
         if (dataArray.length > 0) {
            return `filters[$or][${index}][location][$contains]=${item}`;
         }
      });
   }
   const queryParams = ariaArray.join("&");
   //検索モダールを開くため
   const openModal = () => {
      setshowSearchModal(true);
   };
   //Callback function || モダールの値を検索ページに表示する
   const handleMessagesChange = (data: string[]) => {
      setselectedAria(data);
   };

   const toggleSearchBox = () => {
      setIsSearchBoxVisible(!isSearchBoxVisible);
   };

   useEffect(() => {
      if (param !== "" && param !== null) {
         document.title = `${param}の転職・求人情報なら転職エージェント 【ワークポート】`;
      } else {
         document.title = "転職・求人情報なら転職エージェント 【ワークポート】";
      }
      return () => {
         document.title = "LinkStaff求人サイト";
      };
   }, [param]);
   //state
   const { isLoading, error, data } = useQuery({
      queryKey: ["job", page, param, pagesize, queryParams],
      queryFn: () =>
         fetch(
            `${baseAPI}/job-tests?filters[description][$contains]=${param ? param : ""
            }&${queryParams}&populate=company&pagination[page]=${page ? page : 1
            }&pagination[pageSize]=${pagesize ? pagesize : 20}`,
            APITokenInHeader
         ).then((res) => res.json()),
      keepPreviousData: true,
   });
   if (isLoading) {
      return (
         <>
            <p>
               Loading...
               <Icon icon="line-md:loading-twotone-loop" />
            </p>
         </>
      );
   }

   if (error) return "An error has occurred: ";
  
   const handleSearchPress = (e: any) => {
      if (e.key === "Enter") {
         handleSearch();
      }
   };
   const handleSearch = () => {
      setParam(getpram);
      handleChangePage(1);
   };
   const handleChangeParam = (e: any) => {
      const value = e.target.value;
      setGetParam(value);
      sessionStorage.setItem("param", String(value));
   };
   const handleChangePage = (newPage: number) => {
      setPage(newPage);
      sessionStorage.setItem("page", String(newPage));
   };
   const handleChangePageSize = (e: any) => {
      setPagesize(e.target.value);
      handleChangePage(1);
      sessionStorage.setItem("pageSize", e.target.value);
   };
   const pageCount = data.meta.pagination.pageCount;
   const arrPage = Array.from({ length: pageCount }, (_, index) => index + 1);
   const currentPage = data.meta.pagination.page;
   const total = data.meta.pagination.total;
   const pageSize = data.meta.pagination.pageSize;
   const toShowPage = 5;
   const lastResult = () => {
      let result = 0;
      if (currentPage - pageCount === 0) {
         result = total;
      } else {
         result = currentPage * pageSize;
      }
      return result;
   };

   const changeArrPage = () => {
      if (arrPage.length > toShowPage) {
         let arrPageFormated: Array<number> = [];
         if (
            currentPage > toShowPage - Math.floor(toShowPage / 2) &&
            currentPage - pageCount < -1
         ) {
            arrPageFormated = arrPage.slice(
               currentPage - (Math.floor(toShowPage / 2) + 1),
               currentPage + (toShowPage - (Math.floor(toShowPage / 2) + 1))
            );
         } else if (currentPage - pageCount >= -1) {
            if (currentPage - pageCount == -1) {
               arrPageFormated = arrPage.slice(
                  currentPage - (toShowPage - 1),
                  currentPage + 1
               );
            } else {
               arrPageFormated = arrPage.slice(
                  currentPage - toShowPage,
                  currentPage
               );
            }
         } else {
            arrPageFormated = arrPage.slice(0, toShowPage);
         }
         return arrPageFormated;
      } else {
         return arrPage;
      }
   };

   return (
      <>
         <SearchModal
            status={showSearchModal}
            showModal={setshowSearchModal}
            modalButton={false}
            onMessagesChange={handleMessagesChange}
         />
         <Main>
            <MenuTab>
               <ul>
                  <li>
                     <a href="/search">{t("top.kyujin_wo_sagasu")}</a>
                  </li>
                  <li>
                     <a href="#">{t("top.tenshoku_sodan_service")}</a>
                  </li>
                  <li>
                     <a href="#">{t("top.tenshoku_oyakudachi_joho")}</a>
                  </li>
                  <li>
                     <a href="#">{t("top.kaisha_joho")}</a>
                  </li>
                  <li>
                     <a href="#">{t("top.otoiawase")}</a>
                  </li>
               </ul>
            </MenuTab>
            <SearchTop>
               <SearchInfo>
                  <h1>{param ? `${param}の` : ""}求人検索一覧</h1>
                  <p>
                     検索結果 <span>{total}</span>件 (
                     {(currentPage - 1) * pageSize + 1}件 ~ {lastResult()}件)
                  </p>
               </SearchInfo>
               <DropDown>
                  <button onClick={toggleSearchBox}>
                     求人を絞り込む・検索条件の変更
                  </button>
               </DropDown>
            </SearchTop>
            {isSearchBoxVisible && (
               <SearchBox>
                  <SearchItem>
                     <span className="Kinmuti">出勤勤務地</span>
                     <button onClick={openModal}>選択する</button>
                     {selectedAria.length > 0 ? (
                        <span>{selectedAria.join(", ")}</span>
                     ) : null}
                  </SearchItem>
                  <SearchItem>
                     <span>キーワード</span>
                     <input
                        type="text"
                        placeholder="社名、職種、業種などキーワードから探す"
                        name="search"
                        value={getpram ? getpram : ""}
                        onChange={handleChangeParam}
                        onKeyPress={handleSearchPress}
                     />
                  </SearchItem>
                  <SearchButton className="BtnCenter">
                     <button onClick={handleSearch}>検索条件の変更</button>
                  </SearchButton>
               </SearchBox>
            )}
            <PaginateBox>
               <Indicates>
                  <select
                     value={pagesize ? pageSize : 20}
                     onChange={handleChangePageSize}>
                     <option value="20">20件</option>
                     <option value="50">50件</option>
                     <option value="100">100件</option>
                  </select>
               </Indicates>
               <PaginatePage>
                  {currentPage - 1 !== 0 && (
                     <Previous>
                        <button
                           className="top"
                           onClick={() => handleChangePage(1)}>
                           最初へ
                        </button>
                        <button
                           onClick={() => handleChangePage(currentPage - 1)}>
                           {" "}
                           ＜{" "}
                        </button>
                     </Previous>
                  )}
                  {pageCount > 1 &&
                     changeArrPage()?.map((item, index) => {
                        return (
                           <button
                              key={index}
                              onClick={() => handleChangePage(item)}
                              className={currentPage == item ? "active" : ""}>
                              {" "}
                              {item}
                           </button>
                        );
                     })}
                  {currentPage - pageCount !== 0 && pageCount !== 0 && (
                     <Next>
                        <button
                           onClick={() => handleChangePage(currentPage + 1)}>
                           {" "}
                           ＞{" "}
                        </button>
                        <button
                           className="top"
                           onClick={() => handleChangePage(arrPage.length)}>
                           最後へ
                        </button>
                     </Next>
                  )}
               </PaginatePage>
            </PaginateBox>
            {data?.data &&
               data.data.map((item: JobTestType, index: number) => {
                  return (
                     <Recuit_Box key={index}>
                        <Recuit_Top>
                           <div className="Recuit_top">
                              <div className="favourite">
                                 <Favourite_Button>
                                    <ButtonFavourite id={item.id} withIcon={true}>
                                       <span>お気に入り</span>
                                    </ButtonFavourite>
                                 </Favourite_Button>
                              </div>
                              <div className="company">
                                 <Recuit_Company>
                                    <p className="media968px">
                                       {
                                          item.attributes.company.data
                                             .attributes.name
                                       }
                                    </p>
                                 </Recuit_Company>
                                 <ul className="status">
                                    <li className="new">NEW</li>
                                 </ul>
                              </div>
                           </div>
                           <Recuit_Title>
                              <Link
                                 to={`/details?id=${item.id}`}
                                 className="media968px">
                                 {item.attributes.introduction}
                              </Link>
                           </Recuit_Title>
                           <Recuit_Title>
                              <p className="recuit_text">
                                 {item.attributes.occupation}
                              </p>
                           </Recuit_Title>
                           <Recuit_Tag>
                              <li>正社員</li>
                              <li>完全週休2日制</li>
                           </Recuit_Tag>
                        </Recuit_Top>
                        <Recuit_Body>
                           <Recuit_Information>
                              <ul className="information">
                                 <li className="area">
                                    <span>
                                       <Icon
                                          icon="icon-park-solid:local-two"
                                          width={16}
                                          height={15}
                                       />{" "}
                                       勤務地
                                    </span>
                                    <p>{item.attributes.location}</p>
                                 </li>
                                 <li className="money">
                                    <span>
                                       <Icon
                                          icon="majesticons:yen-circle"
                                          width={16}
                                          height={15}
                                       />{" "}
                                       給与
                                    </span>
                                    {item.attributes.salary_min}
                                    万円～
                                    {item.attributes.salary_max}万円
                                 </li>
                              </ul>
                           </Recuit_Information>
                           <Box>
                              <div className="box_left">
                                 <Box_Top>
                                    <dt>
                                       必要な経験
                                       <br />
                                       スキル
                                    </dt>
                                    <dd>{item.attributes.must}</dd>
                                 </Box_Top>
                                 <p className="box_text">
                                    {item.attributes.description}
                                 </p>
                              </div>
                              <div className="box_right">
                                 <Image>
                                    <img
                                       src="https://www.workport.co.jp/img_rec/252/rec118.jpg?date=20230406"
                                       alt="労務(入退社・雇用管理)"
                                       width="320"
                                    />
                                 </Image>
                              </div>
                           </Box>
                        </Recuit_Body>
                        <Recuit_Bottom>
                           <li>
                              <LargeButton className="viewBtn">
                                 <ButtonNormal>
                                    <Link to={`/details?id=${item.id}`}>
                                       <span>詳細を見る</span>
                                    </Link>
                                 </ButtonNormal>
                              </LargeButton>
                           </li>
                           <li>
                              <LargeButton className="viewBtn">
                                 <ButtonSignup>
                                    <Link to={`/apply?id=${item.id}`}>
                                       <span>この求人に応募する</span>
                                    </Link>
                                 </ButtonSignup>
                              </LargeButton>
                           </li>
                        </Recuit_Bottom>
                     </Recuit_Box>
                  );
               })}
            {total == 0 && (
               <div style={{ textAlign: "center", padding: "120px 0" }}>
                  <h2>該当する案件がありませんでした。</h2>
               </div>
            )}
         </Main>
      </>
   );
};

export default Search;
