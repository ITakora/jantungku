import LandingPage from "./pages/LandingPage.jsx";
import {Routes, Route} from "react-router";

import SignIn from "./pages/SIgnIN.jsx";

function App() {


  return (
      <>

        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/signin' element={<SignIn/>}/>

        </Routes>

      </>

  )
}

export default App
