import LandingPage from "./pages/LandingPage.jsx";
import {Routes, Route} from "react-router";
import SignIn from "./pages/SIgnIN.jsx";
import SignUp from "./pages/SignUp.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import UserHistoryPage from "./pages/UserHistoryPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";



function App() {


  return (
      <>

        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/user/diagnosis' element={<UserDashboard />}/>
            <Route path='/user/history' element={<UserHistoryPage />}/>
            <Route path='/admin/symptoms' element={<AdminDashboard />}/>
        </Routes>

      </>

  )
}

export default App
