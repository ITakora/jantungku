import {CF_LEVELS} from "../utils/CalculateCF.js";

const CardSymptom = ({ symptom, value, onChange }) => {

    return (
        <div className="rounded-4xl bg-white p-7 flex flex-row shadow-md max-w-screen justify-between items-center gap-4 mx-10 mt-7">
            <div className="ml-5">
                <h3 className="font-medium">{symptom}</h3>

            </div>

            <select
                required
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="  mr-5 w-48 shrink-0 border border-gray-300 rounded-xl px-3 py-2 bg-white font-medium"
            >
                <option value="" disabled>
                    Pilih
                </option>
                {CF_LEVELS.map((level) => (
                    <option key={level.value} value={level.value} >
                        {level.label}
                    </option>
                ))}
            </select>
        </div>
    );
}


export default CardSymptom;