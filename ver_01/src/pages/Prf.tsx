import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DISPLAY_LG } from "../GlobalStyle";
import { baseAPI, baseURL, APITokenInHeader } from "../global/global";

const StaffMember = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
background:lightgray;
`

const MainHeader = styled.div`
   width: 100%;
  height: 164px;
  background:white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 40px;

  h1 {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    font-size: 4.5rem;
    font-weight: bold;
    padding-left: 20px;
  }
`

const StaffContent = styled.div`
  margin: 50px 0;
  gap: 30px;
  max-width: ${DISPLAY_LG};
	display: grid;
	grid-template-columns: repeat(3,1fr);

	@media (max-width: 800px) {
		grid-template-columns: repeat(2,1fr);
	}
`
const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 286px;
  height: 433px;
  border-radius: 3px;
  background: #fff;

  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(0.99);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
		width: 230px;
    height: 370px;
	}
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    gap: 10px;
    font-size: 16px;
    @media (max-width: 800px) {
      font-size:12px;
	}

    span {
    display: inline-flex;
    color: #212f44;
    font-weight: bold;
    font-family:sans-serif;
    padding-left: 15px;
    }
    p {
      padding: 0px 15px 10px 15px;
    }
`
const IMG = styled.div`
  width: 100%;
  height: 263px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;

   @media (max-width: 800px) {
    width: 100%;
    height: 230px;
	}

  span {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 15px;
  background-color: rgba(48, 78, 245, 0.3);
  color: white;
  padding: 12px;
  box-sizing: border-box;
  text-align: center;
  }

  img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
`
const Prf = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["prf"],
    queryFn: () =>
      fetch(`${baseAPI}/members?populate=avatar,portrait`,
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

  console.log(data.data);
  type DataType = {
    id: number,
    attributes: {
      createdAt : string
      introduction: string
      job: string
      name: string
      profile: string
      publishedAt: string
      updatedAt: string,
      avatar: any,
      portrait: any,
    }
  }
  const Tin: JSX.Element[] = data.data.map((item: DataType, index: number) => {
    const memberId = data.data[index].id
    const urlPor = `${baseURL}${item.attributes.portrait.data.attributes.formats.large.url}`
    console.log(urlPor)
    console.log(memberId)
    return (
      <Member key={index}>
      <Link to={`/prft?index=${memberId}`}>
        <IMG>
          <img src={urlPor} alt="" />
          <span>{item.attributes.job}</span>
        </IMG>
        <Info>
          <span>{item.attributes.name}</span>
          <p>{item.attributes.introduction}</p>
        </Info>
      </Link>
      </Member>
    );
  });

  return <>
    <StaffMember>
      <MainHeader>
      <h1>社員インタビュー</h1>
      </MainHeader>
      <StaffContent>
        {Tin}
      </StaffContent>
    </StaffMember>
  </>;
};

export default Prf;
