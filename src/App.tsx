import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from './pages/HomePage'
import SekbidPage from './pages/SekbidPage'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/bidang" Component={SekbidPage}/>
        <Route path="/proker"/>
      </Routes>
    </>
  );
}

export default App;
