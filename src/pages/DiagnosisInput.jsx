import CardSymptom from "../components/CardSymptom.jsx";
import {getUser} from "../utils/SaveSession.js";
import { useLiveQuery } from "dexie-react-hooks";
import {db} from "../db/db.jsx";
import {useState} from "react";
import {calculateCF, toPercent} from "../utils/CalculateCF.js";

const DiagnosisInput = () => {
    const user = getUser();
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);

    const symptoms = useLiveQuery(() => db.symptoms.toArray());


    const handleChange = (code, value) => {
        setAnswers((prev) => ({ ...prev, [code]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const inputs = symptoms.map((s) => ({
            code: s.code,
            name: s.name,
            cfUser: Number(answers[s.code]),
            cfExpert: s.cfExpert,
        }));

        const value = calculateCF(inputs);


        await db.diagnoses.add({
            userId: user.id,
            createdAt: Date.now(),
            inputs,
            result: value,
        });

        setResult(value);

    };

    const handleReset = () => {
        setAnswers({});
        setResult(null);
    };


    return (
        <div className="min-h-screen mx-auto bg-[#E4EBE8] pt-10 pb-16">
            <h1 className="font-bold ml-20 mt-10 text-2xl">Halo, {user?.username}</h1>






            {symptoms?.length > 0 && (
                <form onSubmit={handleSubmit} className="rounded-2xl p-6">
                    {symptoms.map((s) => (
                        <CardSymptom
                            key={s.code}
                            symptom={s.name}
                            value={answers[s.code] ?? ""}
                            onChange={(value) => handleChange(s.code, value)}
                        />
                    ))}

                    {result !== null && (
                        <div className="bg-white rounded-xl shadow-md p-6 mx-10 mt-7">
                            <p className="text-sm text-gray-500 ml-5">Hasil Diagnosis</p>
                            <p className="text-4xl font-bold text-[#1F6B5C] mt-1 ml-5">
                                {toPercent(result)}%
                            </p>
                            <p className="text-gray-700 ml-5">Terdiagnosis Penyakit jantung</p>

                            <div className="h-2 bg-gray-200 rounded-full mt-4 mx-5 overflow-hidden">
                                <div
                                    className="h-full bg-[#1F6B5C]"
                                    style={{ width: `${result * 100}%` }}
                                />
                            </div>

                            <p className="text-xs text-gray-500 mt-4 mx-5">
                               Ini hanya edukasi expert system, Bukan real diagnosis medikal. Temui Dokter untuk concern lebih lanjut
                            </p>

                            <button
                                type="button"
                                onClick={handleReset}
                                className="mt-4 ml-5 text-sm text-[#1F6B5C] hover:underline"
                            >
                                Coba lagi
                            </button>
                        </div>
                    )}

                    <div className="mx-10 mt-7">
                        <button
                            type="submit"
                            className="w-full bg-[#1F6B5C] hover:bg-[#195A4D] text-white font-medium py-3 rounded-md transition"
                        >
                           Hitung Hasil
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}


export default DiagnosisInput;