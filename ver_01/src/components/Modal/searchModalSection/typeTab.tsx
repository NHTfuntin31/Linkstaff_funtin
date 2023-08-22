import styled, { css } from "styled-components";
import { useState, useEffect } from 'react';
interface SearchProps {
  messages?: string[];
  clearOn?: any;
  clearOff?: any;
  onMessagesChange: (data: string[]) => void;
}
const AriaList = styled.div`
ul {
    height: 430px;
    line-height: 1.94;
    text-align: left;
    box-sizing: border-box;
    border-bottom: 1px solid #eef3f6;
  }
`
const AriaLi = styled.li<{ariaLi: number}>`
  padding: 9px 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #eef3f6;
  text-align: left;
  position: relative;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.6rem;

  ${({ariaLi}) => 
  ariaLi === 1 &&
  css`
  background: #f4f6f7;
    `}
`

const Todofuken = styled.li`
  font-size: 1.6rem;
`
const Land = styled.div`
    text-align: left;
    box-sizing: border-box;
    padding: 0 40px 20px;
    text-align: left;
    background: #fff;
    border-left: 1px solid #eef3f6;
`
const Job = styled.div`
`
const Field = styled.div`
`

export const Aria: React.FC<SearchProps> = ({ messages, onMessagesChange, clearOn, clearOff }) =>{
  //Defaultの値はsessionStorageから呼び出します
  const storedArray = sessionStorage.getItem('myArray');
  const [selectedItems, setSelectedItems] = useState<string[]>(() => {
    return storedArray ? JSON.parse(decodeURIComponent(storedArray)) : [];
  });

  //(CallBack function) searchModalにpropsを送るため
  const addMessage = () => {
    messages = [...selectedItems];
    for(let i = 0; i < Object.values(ariaArray).length ; i++){
      if(messages.includes(Object.values(ariaArray)[i][0])){
        messages.splice(messages.indexOf(Object.values(ariaArray)[i][0]), 1);
      }
    }
    onMessagesChange(messages);
  };
  
  //Trueの時に削除する。削除した後にfalseになる
  useEffect(() => {
    if (clearOn) {
      setSelectedItems([]);
      clearOff(false);
    }
  }, [clearOn, clearOff]);
  //selectedItemsの値が変わる時、addMessage()自動的に実行する
  useEffect(() => {
    addMessage();
  }, [selectedItems]);

  //選択した値はsessionStorageに保存
  const dataArrayStr = encodeURIComponent(JSON.stringify(selectedItems));
  sessionStorage.setItem('myArray', dataArrayStr);

  const [aria, setAria] = useState<number>(0);
  //都道府県を定義
  const ariaArray: Record<string, string[]> = {
    "北海道・東北" : ["北海道・東北 すべて","北海道","青森県","秋田県","岩手県","山形県","宮城県"],
    "関東" : ["関東 すべて","東京都","神奈川県","埼玉県","千葉県","茨城県","栃木県","群馬県"],
    "甲信越・北陸" : ["甲信越・北陸 すべて","山梨県","長野県","新潟県","富山県","石川県","福井県"],
    "東海" : ["東海 すべて","静岡県","愛知県","岐阜県","三重県"],
    "関西": ["関西 すべて","大阪府","京都府","兵庫県","滋賀県","奈良県","和歌山県"],
    "中国・四国": ["中国・四国 すべて","鳥取県","島根県","岡山県","広島県","山口県","香川県","徳島県","高知県","愛媛県"],
    "九州・沖縄": ["九州・沖縄 すべて","福岡県","佐賀県","長崎県","大分県","熊本県","宮崎県","鹿児島県","沖縄県"],
    "海外": ["海外 すべて","海外（中国）","海外（東南アジア）","海外（アメリカ","海外（ヨーロッパ）","海外（その他）"],
  };

  const handleCheckboxChange = (value: string) => {
    // 配列の長さ
    let count: number = Object.values(ariaArray)[aria].length
    //チェックボックス設定
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value && item !== Object.values(ariaArray)[aria][0]));
      count+2;
    } else {
      setSelectedItems([...selectedItems, value]);
      count--;
    }

    //選択した値の長さをチェック
    Object.values(ariaArray)[aria].forEach(item => {
      if (selectedItems.includes(item)) {
        count--;
      }
    });
    //全部選択した時、全てのボタンを押したら、全て消します
    if(Object.values(ariaArray)[aria][0] === value && count === 0) {
        setSelectedItems(selectedItems.filter(item => !Object.values(ariaArray)[aria].includes(item)));
        count = Object.values(ariaArray)[aria].length
    } 
    //全て値を選択しないと、すべてのボタンがチェックになってない
    if(count === 1 && !selectedItems.includes(Object.values(ariaArray)[aria][0])){
      setSelectedItems([...selectedItems, Object.values(ariaArray)[aria][0]]);
      count--;
    }
  };

  //全てボタンをクリックすると　ariaArray全部の値を選択するため
  if (selectedItems.includes(Object.values(ariaArray)[aria][0])) {
    Object.values(ariaArray)[aria].forEach(item => {
      if (!selectedItems.includes(item)) {
        selectedItems.push(item);
      }
    });
  }

  const ariaArrayList = Object.entries(ariaArray).map(([key], index) => (
    <AriaLi
      key={key}
      ariaLi={aria === index ? 1 : 0}
      onClick={() => setAria(index)}
    >{key}</AriaLi>
  ));

  const todofuken = ariaArray[Object.keys(ariaArray)[aria]].map((key: string, index: number) => {
    return(
    <Todofuken key={index}>
      <input
      type="checkbox"
      checked={selectedItems.includes(key)}
      onChange={() => handleCheckboxChange(key)}
      />
      <span>{key}</span>
      </Todofuken>
    )});

  return(
    <>
    <AriaList>
      <ul>
        {ariaArrayList}
      </ul>
    </AriaList>
    <Land>
      <ul>
        {todofuken}
      </ul>
    </Land>
    </>
  )
}

export const JobType = () =>{
  return(
    <>
    <Job>
      <ul>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
        <li>P</li>
      </ul>
    </Job>
    <Field>
      <ul>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
        <li>Q</li>
      </ul>
    </Field>
    </>
  )
}