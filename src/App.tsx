import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import BusinessPage from "./pages/BusinessPage/BusinessPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import JoinPage from "./pages/LoginPage/JoinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/artist" element={<ArtistPage />} />
      <Route path="/business" element={<BusinessPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
}

export default App;
