import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FirstPage } from "./pages/FirstPage";
import { FourthPage } from "./pages/FourthPage";
import { LandingPage } from "./pages/Landing";
import { SecondPage } from "./pages/SecondPage";
import { ThridPage } from "./pages/ThridPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/secondpage" element={<SecondPage />} />
        <Route path="/thirdpage" element={<ThridPage />} />
        <Route path="/fourthpage" element={<FourthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
