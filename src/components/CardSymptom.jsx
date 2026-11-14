const CardSymptom = ({ symptom, dropdown}) => {
    return (

           <div className="rounded-lg bg-white p-7 flex flex-row shadow-md max-w-screen justify-between mx-10 mt-7">
               <h3 className="font-medium ml-5">{symptom}</h3>
               <h3 className="mr-5 font-medium">{dropdown}</h3>
           </div>

    )
}


export default CardSymptom;