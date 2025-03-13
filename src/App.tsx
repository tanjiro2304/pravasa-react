
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./modules/homePage/HomePage.tsx";
import TransportUndertakingPage from "./modules/tranportundetakingspage/TransportUndertakingPage.tsx";
import Header from "./components/headerComponent/Header.tsx";
import RoutePage from "./modules/routePage/RoutePage.tsx";
function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/transport-undertaking" element={<TransportUndertakingPage />} />
            <Route path="/route-page" element={<RoutePage />} />
          {/*<Route path="/signUp" element={<SignUp />} />*/}
          {/*<Route path="/bus" element={<Bus />} />*/}
          {/*<Route path="/route" element={<RoutePage />} />*/}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
