import { useEffect, useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar.jsx";
import { db } from "../db/db.jsx";

const emptyForm = { code: "", name: "", cfExpert: "" };
const CF_OPTIONS = [0.4, 0.6, 0.8, 1.0];

const SymptomsPages = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [form, setForm] = useState(emptyForm);
    const [editingCode, setEditingCode] = useState(null);
    const [error, setError] = useState("");

    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        let cancelled = false;
        db.symptoms
            .orderBy("code")
            .toArray()
            .then((data) => {
                if (!cancelled) setSymptoms(data);
            });
        return () => {
            cancelled = true;
        };
    }, [refreshKey]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setForm(emptyForm);
        setEditingCode(null);
        setError("");
    };

    const handleEdit = (symptom) => {
        setEditingCode(symptom.code);
        setForm({
            code: symptom.code,
            name: symptom.name,
            cfExpert: String(symptom.cfExpert),
        });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const code = form.code.trim().toUpperCase();
        const name = form.name.trim();
        const cfExpert = parseFloat(form.cfExpert);

        if (!code || !name) {
            setError("Code dan nama wajib diisi");
            return;
        }
        if (!CF_OPTIONS.includes(cfExpert)) {
            setError("Pilih value diantara (0.4, 0.6, 0.8 or 1.0)");
            return;
        }

        if (editingCode) {
            await db.symptoms.update(editingCode, { name, cfExpert });
        } else {
            const exists = await db.symptoms.get(code);
            if (exists) {
                setError(`Code ${code} already exists`);
                return;
            }
            await db.symptoms.add({ code, name, cfExpert });
        }

        resetForm();
        setRefreshKey((k) => k + 1);
    };

    return (
        <>


            <div className="min-h-screen bg-[#E4EBE8] px-4 pt-24 pb-10">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="bg-white shadow-md rounded-xl p-6">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            {editingCode ? `Edit Gejala (${editingCode})` : "Tambah Gejala"}
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className="grid gap-4 sm:grid-cols-[1fr_2fr_1fr]"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Code
                                </label>
                                <input
                                    type="text"
                                    name="code"
                                    value={form.code}
                                    onChange={handleChange}
                                    disabled={!!editingCode}
                                    placeholder="D09"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F6B5C] disabled:bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Symptom name"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F6B5C]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    CF Expert
                                </label>
                                <select
                                    name="cfExpert"
                                    value={form.cfExpert}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1F6B5C]"
                                >
                                    <option value="">Select value</option>
                                    {CF_OPTIONS.map((v) => (
                                        <option key={v} value={v}>
                                            {v.toFixed(1)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {error && (
                                <p className="text-sm text-red-600 sm:col-span-3">{error}</p>
                            )}

                            <div className="flex gap-3 sm:col-span-3">
                                <button
                                    type="submit"
                                    className="bg-[#1F6B5C] hover:bg-[#195A4D] text-white font-medium px-5 py-2 rounded-md transition"
                                >
                                    {editingCode ? "Simpan Gejala" : "Tambah Gejala"}
                                </button>
                                {editingCode && (
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="border border-gray-300 text-gray-700 px-5 py-2 rounded-md hover:bg-gray-100 transition"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6 overflow-x-auto">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Symptoms</h2>

                        <table className="w-full text-sm text-left">
                            <thead className="text-gray-600 border-b">
                            <tr>
                                <th className="py-2 pr-4">Code</th>
                                <th className="py-2 pr-4">Nama Gejala</th>
                                <th className="py-2 pr-4">CF Expert</th>
                                <th className="py-2 text-right">Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            {symptoms.map((s) => (
                                <tr key={s.code} className="border-b last:border-0">
                                    <td className="py-2 pr-4 font-medium">{s.code}</td>
                                    <td className="py-2 pr-4">{s.name}</td>
                                    <td className="py-2 pr-4">{s.cfExpert}</td>
                                    <td className="py-2 text-right">
                                        <button
                                            onClick={() => handleEdit(s)}
                                            className="text-[#1F6B5C] hover:underline font-medium"
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SymptomsPages;
