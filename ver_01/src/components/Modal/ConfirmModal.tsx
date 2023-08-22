import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ModalContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 9999;
`;
const ModalOverlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
   background-color: #fff;
   width: 100%;
   max-width: 360px;
   padding: 20px;
   gap: 50px;
   border-radius: 8px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   z-index: 10000;
   display: flex;
   flex-direction: column;
   align-items: center;
   transform: translateY(-200px);

   h3 {
      font-size: 1.6rem;
      font-weight: bold;
   }
`;
const ModalActions = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 16px;
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
const ModalCancelButton = styled(ModalButton)`
   background-color: #ccc;
`;
const ModalConfirmButton = styled(ModalButton)`
   background-color: #007bff;
   color: #fff;
`;
interface ConfirmProps {
   status: boolean;
   showModal: any;
   onFunction: () => void;

   title?: React.ReactNode;
   leftBtn?: string;
   rightBtn?: string;
}

const ConfirmModal: React.FC<ConfirmProps> = ({
   status,
   showModal,
   onFunction,
   title ,
   leftBtn ,
   rightBtn 
}) => {
   const { t } = useTranslation();
   const finalTitle = title || `${t("modal.confirm.sakujo_shitemo_yoroshīdeshou_ka")}`;
   const finalLeftBtn = leftBtn || `${t("modal.confirm.kyanseru")}`;
   const finalRightBtn = rightBtn || `${t("modal.confirm.akusesu")}`;
   return (
      <>
         {status && (
            <ModalContainer>
               <ModalOverlay onClick={() => { showModal(false);}}/>
               <ModalContent>
                  <h3>{finalTitle}</h3>
                  <ModalActions>
                     <ModalCancelButton onClick={() => { showModal(false);}}>
                        {finalLeftBtn}
                     </ModalCancelButton>
                     <ModalConfirmButton onClick={onFunction}>
                        {finalRightBtn}
                     </ModalConfirmButton>
                  </ModalActions>
               </ModalContent>
            </ModalContainer>
         )}
      </>
   );
};

export default ConfirmModal;
