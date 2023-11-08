import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/public/GlobalStyle";
import Onboarding from "./components/page/onboarding";
import Main from "./components/page/main"; //온보딩 페이지
import SelectUser from "./components/page/selectUser";
import Writing from "./components/page/writing";
import SelectGanji from "./components/page/select-ganji";
import Introduce from "./components/page/introduce";
import Signin from "./components/page/signin";
import Signup from "./components/page/signup";
import ChangePassWord from "./components/page/changePassword";
import { Letter } from "./components/page/writing";
import MyPage from "./components/page/MyPage";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/" element={<Main />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/SelectUser" element={<SelectUser />} />
        <Route path="/SelectGanji" element={<SelectGanji />} />
        <Route path="/Writing" element={<Writing />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ChangePassword" element={<ChangePassWord />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
