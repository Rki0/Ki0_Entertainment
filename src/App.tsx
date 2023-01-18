import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hoc/auth-hook";
import LoadingSpinner from "./shared/LoadingSpinner";

const LandingPage = React.lazy(() => import("./pages/LandingPage/LandingPage"));
const CompanyPage = React.lazy(() => import("./pages/CompanyPage/CompanyPage"));
const ArtistPage = React.lazy(() => import("./pages/ArtistPage/ArtistPage"));
const BusinessPage = React.lazy(
  () => import("./pages/BusinessPage/BusinessPage")
);
const MyPage = React.lazy(() => import("./pages/MyPage/MyPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const JoinPage = React.lazy(() => import("./pages/LoginPage/JoinPage"));

function App() {
  const { token, login, logout, userId } = useAuth();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AuthContext.Provider
        value={{ isLoggedIn: !!token, token, userId, login, logout }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/artist" element={<ArtistPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/mypage/:userId" element={<MyPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Routes>
        </Suspense>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
