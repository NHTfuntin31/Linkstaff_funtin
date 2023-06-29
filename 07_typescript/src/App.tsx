import './i18n'
import GlobalStyle from "./GlobalStyle"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from "./components/NotFound"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Login from "./pages/Login"
import Information from './pages/Information'
import Privacy from "./pages/Privacy"
import Agree from "./pages/Agree"
import Accessibility from "./pages/Accessibility"
import { Mypage } from "./pages/Mypage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

const Container = styled.div`
  width: 100%;
  height: 100vh;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Container>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/information" element={<Information />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/agree" element={<Agree />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/agree" element={<Agree />} />
              <Route path="/member" element={<Mypage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />

          </Container>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
