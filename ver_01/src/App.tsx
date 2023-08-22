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
import News from "./registrationPage/News"
import { Mypage } from "./pages/Mypage";
import JobSeekers from "./pages/inquiry/InquiryJobSeekers"
import Experienced from "./pages/inquiry/inquiryExperienced"
import InquiryOthers from "./pages/inquiry/inquiryOthers"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Register from "./pages/Register";
import FavouriteJobsPage from "./pages/FavouriteJobsPage";
import EmailSended from './pages/EmailSended';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Success from './pages/Success';
import Details from './pages/Details';
import TestButton from './pages/TestButton';
import Apply from './pages/Apply';
import Prf from './pages/Prf';
import PrfT from './pages/PrfT';
import Resume from './registrationPage/Resume';

const queryClient = new QueryClient()

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Container>
            <Navbar />
            <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />}/>
              <Route path="/information" element={<Information />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/agree" element={<Agree />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/agree" element={<Agree />} />
              <Route path="/member" element={<Mypage />} />
              <Route path="/favourite-job" element={<FavouriteJobsPage/>} />
              <Route path="/jobSeekers" element={<JobSeekers />} />
              <Route path="/experienced" element={<Experienced />} />
              <Route path="/inquiryOthers" element={<InquiryOthers />} />
              <Route path="/shinkitoroku/*" element={<News />} />
              <Route path="/email-sended" element={<EmailSended />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/reset-password-confirm" element={<ResetPasswordConfirm />} />
              <Route path="/success" element={<Success />} />
              <Route path="/details" element={<Details />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/test" element={<TestButton />} />
              <Route path="/prf" element={<Prf />} />
              <Route path="/prft" element={<PrfT />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            </Content>
            <Footer />

          </Container>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
