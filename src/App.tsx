import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from './pages/HomePage'
import SekbidPage from './pages/SekbidPage'
import FooterComponent from "./components/FooterComponent";
import LogoPage from "./pages/LogoPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/bidang" Component={SekbidPage}/>
        <Route path="/proker"/>
        <Route path="/logo" Component={LogoPage}/>
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
