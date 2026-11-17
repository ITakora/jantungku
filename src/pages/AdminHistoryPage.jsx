import { useEffect, useState } from "react";
import { db } from "../db/db.jsx";
import DashboardNavbar from "../components/DashboardNavbar.jsx";

const formatDate = (value) =>
    new Date(value).toLocaleString("id-ID", {
        dateStyle: "medium",
        timeStyle: "short",
    });

const AdminHistoryPage = () => {
    const [diagnoses, setDiagnoses] = useState([]);

    useEffect(() => {
        let cancelled = false;
        db.diagnoses
            .orderBy("createdAt")
            .reverse()
            .toArray()
            .then((data) => {
                if (!cancelled) setDiagnoses(data);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <>
            <DashboardNavbar nameNav1="Symptoms" to1="/admin/symptoms" nameNav2="History" to2="/admin/history" />
        <div className="min-h-screen bg-[#E4EBE8] px-4 pt-24 pb-10">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Riwayat Diagnosis User
                    </h2>

                    <table className="w-full text-sm text-left">
                        <thead className="text-gray-600 border-b">
                        <tr>
                            <th className="py-2 pr-4">No</th>
                            <th className="py-2 pr-4">User ID</th>
                            <th className="py-2">Created At</th>
                        </tr>
                        </thead>
                        <tbody>
                        {diagnoses.map((d, index) => (
                            <tr key={d.id} className="border-b last:border-0">
                                <td className="py-2 pr-4">{index + 1}</td>
                                <td className="py-2 pr-4 font-medium">{d.userId}</td>
                                <td className="py-2">{formatDate(d.createdAt)}</td>
                            </tr>
                        ))}
                        {diagnoses.length === 0 && (
                            <tr>
                                <td colSpan={3} className="py-4 text-center text-gray-500">
                                    Belum ada data diagnosis
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
};

export default AdminHistoryPage;