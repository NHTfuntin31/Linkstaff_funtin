import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Col, Typography, Input} from 'antd';
// import { searchFilterChange } from '../redux/slice/Filter';
// import { fetchData } from '../redux/slice/jobDataSlice';
import { RootState } from '../redux/store/Store';
import { setSearchText } from '../redux/slice/filterSlice';
//style componet
const Main = styled.div`
display:flex;
flex-direction:column;
background: #f4f6f7;
font-weight: bold;
`

const Recuit_Box = styled.section`
display: block;
background: #fff;
width: 65%;
margin-top: 40px;
margin :25px auto;
padding: 30px 30px;
`;
const Recuit_Top = styled.div`
.Recuit_top {
	display: flex;
	flex-direction: row;
	position: relative;
	margin-bottom: 7px;
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

`;
const Recuit_Company = styled.div`
display:flex;
font-size: 15px;
font-weight: bold;
margin-right: 20px
`;
const Favourite_Button = styled.div`
position: absolute;
right: 30px;
div {
	display:block;
	position: relative;
	width: 100px;
	padding: 7px 10px;
	border: 1px solid black;
	border-radius: 4px;
	color: black;
	span {
		position: absolute;
		top: 30%;
		margin-left: 5px
	}
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
		text-decoration: underline
	}
}
.recuit_text {
	font-size: 12px;
	font-weight: bold;
	line-height: 1.5;
	margin-bottom: 15px;
}
`;

const Recuit_Tag = styled.ul`
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

const Recuit_Body = styled.div`
margin-top: 20px;
padding-top: 20px;
border-top: 1px solid #e1e6ea;
`
const Recuit_Information = styled.div`
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
`
const Box = styled.div`
display:flex;
flex-direction :row;
.box_left {
	width:100%;
	.box_text {
		font-size: 13px;
		font-weight : 700
	}
}
.box_right {
	margin-left: 20px;
}
`

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
const Image = styled.div`
`

const Recuit_Bottom = styled.ul`
display: flex;
flex-wrap: nowrap;
justify-content: center;
padding-top: 30px;
`;

const Button_View = styled.div`
a {
display:block;
font-size: 12px;
text-align: center;
border: 1px solid black;
border-radius: 4px;
position: relative;
width: 300px;
padding : 17px 50px;
margin: 0 15px;
color: black;
&:hover {
	background: black;
	color: white;
}
}
`;

const Button_Recuit = styled.div`
a {
	display:block;
	font-size: 12px;
	text-align: center;
	background : #f86608;
	border-radius: 4px;
	position: relative;
	width: 300px;
	padding : 18px 50px;
	margin: 0 15px;
	color : #fff;
	&:hover {
		opacity: 0.7;
	}
}

`;

const Search = () => {
	//state
	const [search1Text, setSearch1Text] = useState('');
	const [i, setI] = useState<number>(0);
  const dispatch = useDispatch();

  // const data = useSelector((state: RootState) => {
	// 	return state.jobData.data;
	// });
  const data = useSelector((state: RootState) => {
    const textFilter = state.jobData.data.filter((item) => {
        return item.attributes.description.includes(state.filter.searchText);
    });
    return textFilter;
	});
	console.log(data.data[0].attributes.description)
	const filter = useSelector((state: RootState) => state.filter.searchText);
	
	
  const loading = useSelector((state: RootState) => state.jobData.loading);
  const error = useSelector((state: RootState) => state.jobData.error);
	

	if (loading) return 'Loading...'
	if (error) return 'An error has occurred: '

	const handleSearchTextChange = (e: any) =>{
		setSearch1Text(e.target.value);
		dispatch(setSearchText(e.target.value));
	}
	
	const handleCheck = (index: number) => {
		setI(index);
	}
	const { Search } = Input;
	return (
		<Main>
			<Col span={24}>
				<Typography.Paragraph
					style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
				>
					Search
				</Typography.Paragraph>
				<Search
					placeholder='input search text'
					value={search1Text}
					onChange={handleSearchTextChange}
				/>
			</Col>
		<text> {filter} </text>
		<text> {} </text>
			{data?.data && data.data.map((item: any, index: number) => {
				return (
					<Recuit_Box key={index}>
						<Recuit_Top>
							<div className='Recuit_top'>
								<Favourite_Button>
									<div onClick={()=>handleCheck(index)}>
										{ i == index ? 
										<Icon icon="mdi:checkbox-outline" rotate={2} hFlip={true} vFlip={true} width={20} height={20}/> :
										<Icon icon="mdi:checkbox-blank-outline" hFlip={true} vFlip={true} width={20} height={20}/>}
										<span>お気に入り</span></div>
								</Favourite_Button>
								<Recuit_Company>
									<p>{item.attributes.company}</p>
								</Recuit_Company>
								<ul className='status'>
									<li className='new'>NEW</li>
								</ul>
							</div>
							<Recuit_Title>
								<a href="">{item.attributes.requirement}</a>
							</Recuit_Title>
							<Recuit_Title>
								<p className="recuit_text">【東証プライム上場】ランプ分野で世界トップレベルのシェアを誇る優良企業です！</p>
							</Recuit_Title>
							<Recuit_Tag>
								<li>正社員</li>
								<li>完全週休2日制</li>
							</Recuit_Tag>
						</Recuit_Top>
						<Recuit_Body>
							<Recuit_Information>
								<ul className='information'>
									<li className='area'><span><Icon icon="icon-park-solid:local-two" width={16} height={15}/> 勤務地</span><p>{item.attributes.address}</p></li>
									<li className='money'><span><Icon icon="majesticons:yen-circle" width={16} height={15}/> 給与</span>{item.attributes.salary_from}万円～{item.attributes.salary_to}万円</li>
								</ul>
							</Recuit_Information>
							<Box>
								<div className='box_left'>
									<Box_Top>
										<dt>
											必要な経験
											<br />
											スキル
										</dt>
										<dd>
											{item.attributes.skill}
										</dd>
									</Box_Top>
									<p className='box_text'>
										{item.attributes.description}
									</p>
								</div>
								<div className='box_right'>
									<Image>
										<img src="https://www.workport.co.jp/img_rec/252/rec118.jpg?date=20230406" alt="労務(入退社・雇用管理)" width="320" />
									</Image>
								</div>
							</Box>
						</Recuit_Body>
						<Recuit_Bottom>
							<li><Button_View><a href="/details/750115272/403397512/"><span>詳細を見る</span></a></Button_View></li>
							<li><Button_Recuit><a href="/apply/?riid=403397512"><span>この求人に応募する</span></a></Button_Recuit></li>
						</Recuit_Bottom>
					</Recuit_Box>
				)
			})}
		</Main>
	)
}

export default Search