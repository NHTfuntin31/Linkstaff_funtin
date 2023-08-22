import styled, { keyframes } from "styled-components";
import { useLocation } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import { DISPLAY_LG, DISPLAY_MD } from "../GlobalStyle";
import rehypeRaw from 'rehype-raw';
import { baseAPI, baseURL, APITokenInHeader } from "../global/global";

const fadeInX = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInY = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MemberContainer = styled.div`
   display: inline-flex;
   width: 100%;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media (max-width: ${DISPLAY_LG}) {
		padding: 0 20px;
	}
`

const Member = styled.div`
   width: 100%;
   max-width: ${DISPLAY_LG};
`

const MemberHeader = styled.div`
   width: 100%;
   display: grid;
   grid-template-rows: 2fr auto;
   grid-template-columns: 30% 70%;
   max-width: ${DISPLAY_LG};
   padding: 110px 200px 45px 0;
   margin-right: 100px;

   @media (max-width: 950px) {
		display: flex;
      flex-direction: column;
      padding: 50px 20px 0 0;
      gap: 20px;
	}
`

const Interview = styled.div`
   display: flex;
   width: 290%;
   padding: 50px 0px 0px 0px;
   flex-direction: column;
   align-items: flex-start;
   z-index: 100;

   h1 {
      color: #212F44;
      font-size: 4.5rem;
      font-weight: 900;
      line-height: 63px;
      white-space: pre-line;
   }

   @media (max-width: ${DISPLAY_LG}) {
      padding: 0;
	}
   @media (max-width: 950px) {
		width: 100%;
      padding: 50px 0px 0px 0px;

	}
   @media (max-width: ${DISPLAY_MD}) {
		h1 {
         line-height: 40px;
      }
	}
   opacity: 0;
   transform: translateY(20px);
   animation: ${fadeInY} 1s ease forwards;
`

const IMG = styled.div`
  width: 130%;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 950px) {
   width: 100%;
   max-width: 700px;
   }
  opacity: 0;
  transform: translateX(-20px);
  animation: ${fadeInX} 1s ease forwards;
`;

const InterviewAbout = styled.div`
margin-top: -150px;
padding-bottom: 15px;
display: flex;
flex-direction: column;
justify-content: space-between;
max-width: 300px;

span {
   display: inline-block;
   padding: 7px 44px 9px 30px;
   align-items: flex-start;
   background: #35A4B1;
   color: #FFF;
   font-size: 1.3rem;
   font-weight: 900;
   line-height: 15px;
   width: fit-content;
}
p {
   font-size: 1.4rem;
}

@media (max-width: 950px) {
   margin-top: 0px;
   min-height: 150px;
}
@media (max-width: ${DISPLAY_MD}) {
   max-width: 300px;
   margin-top: 15px;
}
opacity: 0;
transform: translateY(20px);
animation: ${fadeInY} 1s ease forwards;
`

const MemberContent = styled.div`
   width: 95%;
   max-width: ${DISPLAY_LG};

   h2 {
      margin-top: 125px;
      margin-bottom: 50px;
      font-size: 2.5rem;
      position: relative;
   
      &::before {
         content: "";
         position: absolute;
         top: 0.75em;
         transform: translateY(-50%);
         left: -1020px;
         right: auto;
         width: 1000px;
         height: 1px;
         background: #212f44;
      }
   }
   p {
      margin-top: 25px;
      font-size: 1.7rem;
      line-height: 2.2;
   }
   img {
      width: 100%;
      height: auto;
      object-fit: cover;
   }

   opacity: 0;
   transform: translateY(20px);
   animation: ${fadeInY} 1s ease forwards;
`

const PrfT = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
   const memberId = searchParams.get('index');
   console.log(memberId)
   const { isLoading, error, data } = useQuery({
      queryKey: ["prft"],
      queryFn: () =>
        fetch(`${baseAPI}/members/${memberId}?populate=avatar`,
        APITokenInHeader
        ).then((res) => res.json()),
    });
  
   if (isLoading) {
   return (
      <>
         <p>Loading...</p>
      </>
   );
   }

   if (error) return <p>An error has occurred</p>;

   const urlAvt = `${baseURL}${data.data.attributes.avatar.data.attributes.formats.large.url}`;
   console.log(urlAvt);
   console.log(memberId);

   return(
      <>
         <MemberContainer>
            <Member>
               <MemberHeader>
                  <Interview>
                     <h1><span>{data.data.attributes.introduction}</span></h1>
                  </Interview>
                  <IMG>
                     <img src={urlAvt} alt="" />
                  </IMG>
                  <InterviewAbout>
                     <span>{data.data.attributes.job}</span>
                     <p>{data.data.attributes.name}</p>
                  </InterviewAbout>
               </MemberHeader>
               <MemberContent>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data.data.attributes.profile}</ReactMarkdown><br />
               </MemberContent>
            </Member>
         </MemberContainer>
      </>
   )
}

export default PrfT