import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import BusinessPage from "./pages/BusinessPage/BusinessPage";
import MyPage from "./pages/MyPage/MyPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinPage from "./pages/LoginPage/JoinPage";
import Auth from "./hoc/Auth";

function App() {
  // 누구나 접근 가능
  const AuthenticLandingPage = Auth(LandingPage, null);
  const AuthenticCompanyPage = Auth(CompanyPage, null);
  const AuthenticArtistPage = Auth(ArtistPage, null);
  const AuthenticBusinessPage = Auth(BusinessPage, null);

  // 로그인한 사람만 접근 가능
  const AuthenticMyPage = Auth(MyPage, true);

  // 로그인한 사람은 접근 불가능
  const AuthenticLogin = Auth(LoginPage, false);
  const AuthenticJoin = Auth(JoinPage, false);

  return (
    <Routes>
      <Route path="/" element={<AuthenticLandingPage />} />
      <Route path="/company" element={<AuthenticCompanyPage />} />
      <Route path="/artist" element={<AuthenticArtistPage />} />
      <Route path="/business" element={<AuthenticBusinessPage />} />
      <Route path="/mypage" element={<AuthenticMyPage />} />
      <Route path="/login" element={<AuthenticLogin />} />
      <Route path="/join" element={<AuthenticJoin />} />
    </Routes>
  );

  // return (
  //   <Routes>
  //     <Route path="/" element={<LandingPage />} />
  //     <Route path="/company" element={<CompanyPage />} />
  //     <Route path="/artist" element={<ArtistPage />} />
  //     <Route path="/business" element={<BusinessPage />} />
  //     <Route path="/mypage" element={<MyPage />} />
  //     <Route path="/login" element={<LoginPage />} />
  //     <Route path="/join" element={<JoinPage />} />
  //   </Routes>
  // );
}

export default App;
