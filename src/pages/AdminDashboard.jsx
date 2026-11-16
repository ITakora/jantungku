import DashboardNavbar from "../components/DashboardNavbar.jsx";
import SymptomsPages from "./SymptomsPages.jsx";

const AdminDashboard = () => {
    return (
        <>
            <DashboardNavbar nameNav1="Symptoms" to1="/admin/symptoms" nameNav2="Data" to2="/admin/data" />
            <SymptomsPages/>
        </>
    )
}


export default AdminDashboard