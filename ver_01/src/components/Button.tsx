import styled from 'styled-components'
import { ButtonType } from '../types/ButtonType'
// 表示するテキスト
// テキストサイズ
// 背景色（選択）
// padding？

// propsを受け取るstyled-component
const ButtonX = styled.div<ButtonType>`
	display: flex;
	align-items: center;
	justify-content: center;
    border-radius: 4px;
    position: relative;
    max-width: ${({ styledButton }) => styledButton?.maxWidth ? styledButton.maxWidth : '100%'};
    margin: ${({ styledButton }) => styledButton?.margin ? styledButton.margin : '0 auto'};
    font-weight: ${({ styledButton }) => styledButton?.fontWeight ? styledButton.fontWeight : 'bold'};
	background: ${({ styledButton }) => styledButton?.background ? styledButton.background : 'white'} ;
	color:  ${({ styledButton }) => styledButton?.color ? styledButton.color : 'black'};
	border: ${({ styledButton }) => styledButton?.border ? styledButton.border : '1px solid'};
	height: ${({ styledButton }) => styledButton?.height ? styledButton.height : '100%'};
	padding : ${({ styledButton }) => styledButton?.padding};
	transition: opacity 0.4s ease-out, background-color 0.4s ease, color 0.4s ease;
	cursor: pointer;
	a {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${({ styledButton }) => styledButton?.width ? styledButton.width : '100%'};
		color:  ${({ styledButton }) => styledButton?.color ? styledButton.color : 'black'};
		span {
			display: block;
		}
	}
	button {
		cursor: pointer;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		outline: none;
		background: ${({ styledButton }) => styledButton?.background ? styledButton.background : 'white'} ;
		border: ${({ styledButton }) => styledButton?.border ? styledButton.border : '1px solid'};
		width: ${({ styledButton }) => styledButton?.width ? styledButton.width : '100%'};
		color:  ${({ styledButton }) => styledButton?.color ? styledButton.color : 'black'};
		span {
			display: block;
		}
	}
	span {
		display: block;
	}
	&:hover {
		background: ${({ styledButton }) => styledButton?.hoverBackground ? styledButton.hoverBackground : 'black'};
		color: ${({ styledButton }) => styledButton?.hoverColor ? styledButton.hoverColor : 'white'};
		opacity: ${({ styledButton }) => styledButton?.hoverOpactity};
		a {
			color: ${({ styledButton }) => styledButton?.hoverColor ? styledButton.hoverColor : 'white'};
		}
	}
	`

const Button = (props: any) => {
	return (
		<ButtonX styledButton={props.styled?.styledButton ? props.styled?.styledButton : props.styled} onClick={props.click}>{props.children}</ButtonX>
	)

}

export default Button

