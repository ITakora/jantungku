import {getUser} from "../utils/SaveSession.js";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../db/db.jsx";
import DashboardNavbar from "../components/DashboardNavbar.jsx";
import {Link} from "react-router";
import HistoryChart from "../components/HistoryChart.jsx";
import {CF_LEVELS, toPercent} from "../utils/CalculateCF.js";

const UserHistoryPage = () => {
    const user = getUser();

    const formatDate = (timestamp) =>
        new Date(timestamp).toLocaleString("id-ID", {
            dateStyle: "medium",
            timeStyle: "short",
        });

    const verdict = (result) =>
        result > 0 ? "Terdiagnosis" : result < 0 ? "Tidak terdiagnosis" : "Tidak ada indikasi";

    const levelLabel = (value) =>
        CF_LEVELS.find((level) => Number(level.value) === value)?.label ?? value;


    const history = useLiveQuery(async () => {
        if (!user) return [];
        const rows = await db.diagnoses.where("userId").equals(user.id).toArray();
        return rows.sort((a, b) => b.createdAt - a.createdAt);
    }, [user?.id]);

    const handleDelete = async (id) => {
        if (window.confirm("Hapus riwayat diagnosis ini?")) {
            await db.diagnoses.delete(id);
        }
    };

    return (
        <>
            <DashboardNavbar nameNav1="Diagnosis" to1="/user/diagnosis" nameNav2="History" to2="/user/history"/>

            <div className="min-h-screen bg-[#E4EBE8] pt-10 pb-16">
                <h1 className="font-bold ml-20 mt-10 text-2xl">Riwayat Diagnosis</h1>

                {!history && <p className="ml-20 mt-7 text-gray-500">Memuat riwayat...</p>}

                {history?.length === 0 && (
                    <div className="rounded-lg bg-white p-7 shadow-md mx-10 mt-7 text-center">
                        <p className="text-gray-600">Kamu belum pernah melakukan diagnosis.</p>
                        <Link
                            to="/user/diagnosis"
                            className="inline-block mt-3 text-white  p-4 bg-[#1F6B5C] hover:bg-[#195A4D]  rounded-3xl "
                        >
                            Mulai diagnosis pertama
                        </Link>
                    </div>
                )}

                {history?.length > 0 && (
                    <>

                        <div className="rounded-lg bg-white p-7 shadow-md mx-10 mt-7">
                            <h2 className="font-medium ml-5 mb-5">Grafik hasil diagnosis</h2>

                            <HistoryChart history={history} />
                        </div>


                        {history.map((item) => (
                            <details
                                key={item.id}
                                className="rounded-lg bg-white shadow-md mx-10 mt-7 group"
                            >
                                <summary className="p-7 flex items-center justify-between cursor-pointer list-none">
                                    <div className="ml-5">
                                        <p className="text-sm text-gray-500">
                                            {formatDate(item.createdAt)}
                                        </p>
                                        <p className="text-xl font-bold text-[#1F6B5C]">
                                            {toPercent(Math.abs(item.result))}%{" "}
                                            <span className="text-base font-medium text-gray-700">
                                                {verdict(item.result)}
                                            </span>
                                        </p>
                                    </div>
                                    <span className="mr-5 text-sm text-gray-400 group-open:hidden">
                                        Lihat jawaban
                                    </span>
                                    <span className="mr-5 text-sm text-gray-400 hidden group-open:inline">
                                        Tutup
                                    </span>
                                </summary>

                                <div className="px-7 pb-7 border-t border-gray-100">
                                    <table className="w-full text-sm mt-4">
                                        <thead>
                                        <tr className="text-left text-gray-500">
                                            <th className="py-1 font-medium">Gejala</th>
                                            <th className="py-1 font-medium">Jawabanmu</th>
                                            <th className="py-1 font-medium text-right">
                                                Bobot pakar
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {item.inputs.map((input) => (
                                            <tr
                                                key={input.code}
                                                className="border-t border-gray-100"
                                            >
                                                <td className="py-2 text-gray-800">
                                                        <span className="text-gray-400 mr-2">
                                                            {input.code}
                                                        </span>
                                                    {input.name}
                                                </td>
                                                <td className="py-2 text-gray-700">
                                                    {levelLabel(input.cfUser)} ({input.cfUser})
                                                </td>
                                                <td className="py-2 text-gray-700 text-right">
                                                    {input.cfExpert}
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>

                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="mt-4 text-sm text-white p-3 bg-[#1F6B5C] hover:bg-[#195A4D] rounded-xl font-medium"
                                    >
                                        Hapus riwayat ini
                                    </button>
                                </div>
                            </details>
                        ))}
                    </>
                )}
            </div>

        </>)

}


export default UserHistoryPage