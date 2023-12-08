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
import WatchingLetter from './components/page/watchingLetter';
import { Letter } from "./components/page/writing";
import MyPage from "./components/page/MyPage";
import SendLetter from './components/page/sendLetter';

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
        <Route path="/WatchingLetter" element={<WatchingLetter/>}/>
        <Route path='/SendLetter' element={<SendLetter/>} />
      </Routes>
    </div>
  );
}

export default App;
