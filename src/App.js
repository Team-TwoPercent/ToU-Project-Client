/*eslint-disable*/
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/public/GlobalStyle";
import Onboarding from "./components/page/Onboarding";
import Main from "./components/page/Main"; //온보딩 페이지
import SelectUser from "./components/page/SelectUser";
import Writing from "./components/page/Writing";
import SelectGanji from "./components/page/Select-ganji";
import Introduce from "./components/page/Introduce";
import Signin from "./components/page/Signin";
import Signup from "./components/page/Signup";
import ChangePassWord from "./components/page/ChangePassword";
import WatchingLetter from "./components/page/WatchingLetter";
import MyPage from "./components/page/MyPage";
import SendLetter from "./components/page/SendLetter";

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
        <Route path="/WatchingLetter/:id" element={<WatchingLetter />} />
        <Route path="/SendLetter/:id" element={<SendLetter />} />
      </Routes>
    </div>
  );
}

export default App;
