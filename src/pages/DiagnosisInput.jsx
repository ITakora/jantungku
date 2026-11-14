import CardSymptom from "../components/CardSymptom.jsx";

const DiagnosisInput = () => {
    return (
        <div className="min-h-screen mx-auto bg-[#E4EBE8] pt-10">
            <div className="rounded-2xl shadow-md p-6">
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>
                <CardSymptom dropdown="Definitely" symptom="Resting BP"/>
                <CardSymptom dropdown="Probably" symptom="Angina"/>
                <CardSymptom dropdown="Probably" symptom="Cholesterol"/>
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>
                <CardSymptom dropdown="Probably" symptom="Max Heart Rate"/>


            </div>
        </div>
    )
}


export default DiagnosisInput;