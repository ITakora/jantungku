import LandingPage from "./pages/LandingPage.jsx";
import {Routes, Route} from "react-router";
import SignIn from "./pages/SIgnIN.jsx";
import SignUp from "./pages/SignUp.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";



function App() {


  return (
      <>

        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/user/Diagnosis' element={<UserDashboard />}/>



        </Routes>

      </>

  )
}

export default App
