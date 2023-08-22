import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ModalWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
   z-index: 9999;
`;
const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   background-color: white;
   padding: 20px;
   border-radius: 8px;
   max-width: 75%;
   width: 1024px;
   margin-top: 100px;
   height: 75%;
   position: relative;
   transform: translateY(-50px);

   h3 {
      font-size: 1.6rem;
      font-weight: bold;
   }
`;
const ChildrenContainer = styled.div`
   display: flex;
   font-size: 1.4rem;
   width: 90%;
   height: 95%;
`;
const ModalButtons = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 10px;
   gap: 30px;
`;
const ModalButton = styled.button`
   width: 100px;
   padding: 8px 16px;
   margin-left: 8px;
   border: none;
   border-radius: 4px;
   cursor: pointer;
   outline: none;
`;
const ConfirmButton = styled(ModalButton)`
   background-color: #007bff;
   color: #fff;
`;
const CancelButton = styled(ModalButton)`
   background-color: #ccc;
`;
interface ConfirmProps {
   status: boolean;
   showModal: any;
   onFunction: (event?: any) => void;

   title?: React.ReactNode;
   children?: React.ReactNode;
   leftBtn?: string;
   rightBtn?: string;
}

const ReInfoModal: React.FC<ConfirmProps> = ({
   status,
   showModal,
   children,
   onFunction,
   title,
   leftBtn,
   rightBtn
}) => {
   const { t } = useTranslation();
   const finalTitle = title || `${t("modal.reInfo.kakunin_onegai")}`;
   const finalLeftBtn = leftBtn || `${t("modal.reInfo.modoru")}`;
   const finalRightBtn = rightBtn || `${t("modal.reInfo.soshin_suru")}`;
   return (
      <>
         {status && (
            <ModalWrapper>
               <ModalContent>
                  <h3>{finalTitle}</h3>
                  <ChildrenContainer>
                     {children}
                  </ChildrenContainer>
                  <ModalButtons>
                     <CancelButton onClick={() => { showModal(false);}}>
                        {finalLeftBtn}
                     </CancelButton>
                     <ConfirmButton onClick={onFunction}>{finalRightBtn}</ConfirmButton>
                  </ModalButtons>
               </ModalContent>
            </ModalWrapper>
         )}
      </>
   );
};

export default ReInfoModal;
