import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Container from "./Component/Container";
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import SetRemainder from './Component/SetRemainder';
import ViewRemainder from './Component/ViewRemainder';
import Home from "./Component/Home";
import LoginFailed from "./Component/LoginFailed";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/loginfailed" element={<LoginFailed/>} />
        <Route path="/setremainder" element={<SetRemainder/>} />
        <Route path="/viewremainder" element={<ViewRemainder/>} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
