import DashboardNavbar from "../components/DashboardNavbar.jsx";
import DiagnosisInput from "../input/DiagnosisInput.jsx";

const UserDashboard = () => {
    return (
        <>
            <DashboardNavbar nameNav1="Diagnosis" to1="/user/diagnosis" nameNav2="History" to2="/user/history"/>
            <DiagnosisInput/>

        </>


    )
}


export default UserDashboard;