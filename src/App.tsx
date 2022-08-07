import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import BusinessPage from "./pages/BusinessPage/BusinessPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/company" element={<CompanyPage />} />
      <Route path="/artist" element={<ArtistPage />} />
      <Route path="/business" element={<BusinessPage />} />
    </Routes>
  );
}

export default App;
