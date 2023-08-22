import styled from "styled-components"

const EmailContainer = styled.div`
    height: 79vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Message = styled.h1`
    
`;
const EmailSended = () => {
    return (
        <EmailContainer>
            <Message>メールを送りました。確認をお願い致します。</Message>
        </EmailContainer>
    )
}

export default EmailSended