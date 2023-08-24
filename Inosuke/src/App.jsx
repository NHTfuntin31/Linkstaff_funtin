import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ul {
    display: flex;
    list-style-type: none;
    }
  li {
    list-style-type: none;
    display: inline-block;
    margin-right: 10px;
  }
`
const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1240px;
`
const HeaderLeft = styled.div`
  display: flex;
`
const IMG = styled.img`
  width: 110px;
  height: 50px;
`
const SearchBox = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: 34px;
  }
`
const HeaderRight = styled.div`

`
const Nav = styled.div`
  width: 100%;
  max-width: 1024px;
`

function App() {
  return (
    <>
      <Container>
        <Header>
          <HeaderLeft>
            <IMG src='https://upload.wikimedia.org/wikipedia/commons/9/93/Mercari_logo.svg'></IMG>
            <SearchBox><input type="text" /></SearchBox>
          </HeaderLeft>
          <HeaderRight>
            <ul>
              <li>ログイン</li>
              <li>登録</li>
              <li>出品</li>
            </ul>
          </HeaderRight>
        </Header>
        <Nav>
          <ul>
            <li>おすすめ</li>
            <li>マイリスト</li>
            <li>ピックアップ</li>
          </ul>
        </Nav>
      </Container>
    </>
  )
}

export default App
