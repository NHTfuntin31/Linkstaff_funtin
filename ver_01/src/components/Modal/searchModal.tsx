import React, { useState, useEffect } from 'react';
import styled, { css } from "styled-components";
import { Icon } from '@iconify/react';
import { Aria, JobType } from './searchModalSection/typeTab';
import { ButtonSearchModal, MediumButton, ButtonNormal} from '../ButtonStyled';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
interface ModalProps {
  status:any;
  showModal:any;
  modalButton?: true | false | null;

  messages?: string[];
  onMessagesChange?: (data: string[]) => void;
}

export const ModelOverLay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  z-index: 9999;
`;
const ModalForm = styled.div`
  background-color: white;
  border-radius: 4px;
  width: 950px;
  margin: 80px auto;
`;
const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.5);
  button {
    background: none;
    border: none;
    &:hover{
      cursor: pointer;
    }
  }
  ul {
    display: flex;
  }
`

const StyleLi = styled.li<{active: number}>`
  display: inline;
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 1px solid #eef3f6;
  position: relative;

  a {
    width: 210px;
    display: block;
    background: #fff;
    height: 70px;
    line-height: 70px;
    color: #75787e;
    font-size: 1.6rem;
    text-align: center;
    border: 1px solid #e1e6ea;
    box-sizing: border-box;
  }

  ${({ active }) =>
    active === 1 &&
    css`
      a {
        color: #000;
        position: relative;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 4px;
        background: #26a24c;
        opacity: 1;
      }
    `}
`;

const SectionModal = styled.div`
  display: flex;
  gap: 10px;
`
const Typetab = styled.div`
  ul {
    height: 430px;
    line-height: 1.94;
    text-align: left;
    box-sizing: border-box;
    border-bottom: 1px solid #eef3f6;
  }
`
const TabLi = styled.li<{jobStyle: number}>`
    padding: 9px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eef3f6;
    text-align: left;
    position: relative;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.6rem;

  &:first-child {
    border-top: 1px solid #eef3f6;
  }

  ${({jobStyle}) => 
  jobStyle === 1 &&
  css`
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #26a24c;
      opacity: 1;
    }
  `
  }
`
const FooterModal = styled.div`
  height: 120px;
  display: flex;
  .sentakunaiyo {
    display: block;
    width: 276px;

    p {
      font-size: 1.2rem;
      padding: 5px;
      span {
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
`
const SearchModal: React.FC<ModalProps> = (props) => {
  const { t } = useTranslation();
  const [tab, settab] = useState(0);
  const [messagesArray, setMessagesArray] = React.useState<string[]>([]);
  const [clear, setClear] = useState(false);

  //配列とfunctionを定義
  let { messages, onMessagesChange } = props;
  //検索モダールを開くため
  const closeModal = () => {
    props.showModal(false);
  };
  //Callback function || 検索ページにデータを送信するため
  const addMessage = () => {
    messages = messagesArray;
    onMessagesChange && onMessagesChange(messages);
  };
  //messagesArrayの状態によってaddMessage()を実行する
   useEffect(() => {
    addMessage();
  }, [messagesArray]);
  //typeTabから値を受け取るCallBack function
  const handleMessagesChange = (data: string[]) => {
    setMessagesArray(data);
  };
  //選択した値を削除するため
  const onClearItem = () => {
    setClear(true);
  };
  
  //tabの値によって、子供Componentを開く
  const SectionMd = () => {
    if(tab === 0){
      return(
        <Aria onMessagesChange={handleMessagesChange} clearOff={setClear} clearOn={clear}/>
      )
    }else if(tab === 1){
      return(
        <JobType />
      )
    }else if(tab === 2){
      return(
        <p>TAB 2</p>
      )
    }else if(tab === 3){
      return(
        <p>TAB 3</p>
      )
    }else if(tab === 4){
      return(
        <p>TAB 4</p>
      )
    }else if(tab === 5){
      return(
        <p>TAB 5</p>
      )
    }
    
  }
  return (
    <>
      {props.status && (
        <ModelOverLay>
          <ModalForm>
            <HeaderModal>
              <ul>
                <StyleLi active={tab === 1 ? 1 : 0} onClick={() => settab(1)}><a>{t("top.button.shokushu_kara_sagasu")}</a></StyleLi>
                <StyleLi active={tab === 0 ? 1 : 0} onClick={() => settab(0)}><a>{t("top.button.kinmuchi_kara_sagasu")}</a></StyleLi>
                <StyleLi active={tab !== 1 && tab !== 0 ? 1 : 0} onClick={() => settab(tab === 1 || tab === 0 ? 2 : tab )}><a>{t("top.button.shosai_joken_kara_sagasu")}</a></StyleLi>
                <MediumButton style={{width: '200px', height: '48px'}} onClick={onClearItem}><ButtonNormal><a>{t("top.button.sentaku_shita_joken_o_kuria")}</a></ButtonNormal></MediumButton>
              </ul>
              <button onClick={closeModal}><Icon icon="octicon:x-12" width="20" height="20" /></button>
            </HeaderModal>
            <SectionModal>
              <Typetab>
                <ul>
                  <TabLi jobStyle={tab === 1 ? 1 : 0} onClick={() => settab(1)}>職種</TabLi>
                  <TabLi jobStyle={tab === 0 ? 1 : 0} onClick={() => settab(0)}>勤務地</TabLi>
                  <TabLi jobStyle={tab === 2 ? 1 : 0} onClick={() => settab(2)}>業種</TabLi>
                  <TabLi jobStyle={tab === 3 ? 1 : 0} onClick={() => settab(3)}>年収</TabLi>
                  <TabLi jobStyle={tab === 4 ? 1 : 0} onClick={() => settab(4)}>年齢</TabLi>
                  <TabLi jobStyle={tab === 5 ? 1 : 0} onClick={() => settab(5)}>キーワード</TabLi>
                </ul>
              </Typetab>
              {SectionMd()}
            </SectionModal>
            <FooterModal>
              <div className='sentakunaiyo'>
                {messagesArray.length > 0 ? (
                  <p>
                    <span>勤務地:</span>
                    {messagesArray.join(', ')}
                  </p>
                ) : null}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                {props.modalButton !== false && (
                  <MediumButton>
                    <ButtonSearchModal>
                      <Link to="/search"><span>{t("top.button.kono_naiyo_de_kensaku")}</span></Link>
                    </ButtonSearchModal>
                  </MediumButton>
                )} 
              </div>
            </FooterModal>
          </ModalForm>
        </ModelOverLay>
      )}
    </>
  );
};

export default SearchModal;