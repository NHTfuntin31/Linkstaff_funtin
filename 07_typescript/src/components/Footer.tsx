import { Hoge } from '../styles/aaa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 100%;
	background: green;
	ul {
		display: flex;
		height: 100%;
		background: pink;
		align-items: center;
		gap: 20px;
	}
`

const Footer = () => {
  return (
	<Hoge>
		<Wrapper>
			<ul>
				<li><Link to="/information">個人情報の取扱いについて</Link></li>
				<li><Link to="/privacy">個人情報保護方針</Link></li>
				<li><Link to="/agree">利用規約</Link></li>
				<li><Link to="/accessibility">推奨環境</Link></li>
			</ul>

		</Wrapper>

	</Hoge>
  )
}

export default Footer