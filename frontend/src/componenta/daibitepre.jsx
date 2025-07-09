// import React, { useState } from 'react';

// function Daibites() {
//     const [formData, setFormData] = useState({
//         Pregnancies: '',
//         Glucose: '',
//         BloodPressure: '',
//         SkinThickness: '',
//         Insulin: '',
//         BMI: '',
//         DiabetesPedigreeFunction: '',
//         Age: ''
//     });

//     const [diabetesResult, setDiabetesResult] = useState('');

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async () => {
//         let NewBMI_Underweight = 0, NewBMI_Overweight = 0, NewBMI_Obesity_1 = 0, NewBMI_Obesity_2 = 0, NewBMI_Obesity_3 = 0;
//         let NewInsulinScore_Normal = 0, NewGlucose_Low = 0, NewGlucose_Normal = 0, NewGlucose_Overweight = 0, NewGlucose_Secret = 0;

//         const { BMI, Insulin, Glucose } = formData;

//         if (parseFloat(BMI) <= 18.5) {
//             NewBMI_Underweight = 1;
//         } else if (18.5 < parseFloat(BMI) && parseFloat(BMI) <= 24.9) {
//             // Normal BMI
//         } else if (24.9 < parseFloat(BMI) && parseFloat(BMI) <= 29.9) {
//             NewBMI_Overweight = 1;
//         } else if (29.9 < parseFloat(BMI) && parseFloat(BMI) <= 34.9) {
//             NewBMI_Obesity_1 = 1;
//         } else if (34.9 < parseFloat(BMI) && parseFloat(BMI) <= 39.9) {
//             NewBMI_Obesity_2 = 1;
//         } else if (parseFloat(BMI) > 39.9) {
//             NewBMI_Obesity_3 = 1;
//             }
//         };

//         if (16 <= parseFloat(Insulin) && parseFloat(Insulin) <= 166) {
//             NewInsulinScore_Normal = 1;
//         }

//         if (parseFloat(Glucose) <= 70) {
//             NewGlucose_Low = 1;
//         } else if (70 < parseFloat(Glucose) && parseFloat(Glucose) <= 99) {
//             NewGlucose_Normal = 1;
//         } else if (99 < parseFloat(Glucose) && parseFloat(Glucose) <= 126) {
//             NewGlucose_Overweight = 1;
//         } else if (parseFloat(Glucose) > 126) {
//             NewGlucose_Secret = 1;
//         }

//         const user_input = [
//             parseFloat(formData.Pregnancies), parseFloat(formData.Glucose), parseFloat(formData.BloodPressure), parseFloat(formData.SkinThickness), parseFloat(formData.Insulin),
//             parseFloat(formData.BMI), parseFloat(formData.DiabetesPedigreeFunction), parseFloat(formData.Age), NewBMI_Underweight,
//             NewBMI_Overweight, NewBMI_Obesity_1, NewBMI_Obesity_2, NewBMI_Obesity_3, NewInsulinScore_Normal,
//             NewGlucose_Low, NewGlucose_Normal, NewGlucose_Overweight, NewGlucose_Secret
//         ];

//         try {
//             const response = await fetch("http://localhost:5000/predict-diabetes", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ input: user_input }),  // Sending the user input array
//             });
        
//             const result = await response.json();
        
//             if (result.prediction === 1) {
//                 setDiabetesResult("The person has diabetes");
//             } else {
//                 setDiabetesResult("The person does not have diabetes");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
        


//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold mb-4">Diabetes Prediction Using Machine Learning</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {Object.keys(formData).map((key) => (
//                     <div key={key} className="mb-4">
//                         <label className="block text-sm font-medium text-gray-700">{key}</label>
//                         <input
//                             type="text"
//                             name={key}
//                             value={formData[key]}
//                             onChange={handleChange}
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         />
//                     </div>
//                 ))}
//             </div>
//             <button
//                 onClick={handleSubmit}
//                 className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
//             >
//                 Diabetes Test Result
//             </button>
//             {diabetesResult && (
//                 <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
//                     {diabetesResult}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Daibites;


import React, { useState } from 'react';

function Daibites() {
    const [formData, setFormData] = useState({
        Pregnancies: '',
        Glucose: '',
        BloodPressure: '',
        SkinThickness: '',
        Insulin: '',
        BMI: '',
        DiabetesPedigreeFunction: '',
        Age: ''
    });

    const [diabetesResult, setDiabetesResult] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        let NewBMI_Underweight = 0, NewBMI_Overweight = 0, NewBMI_Obesity_1 = 0, NewBMI_Obesity_2 = 0, NewBMI_Obesity_3 = 0;
        let NewInsulinScore_Normal = 0, NewGlucose_Low = 0, NewGlucose_Normal = 0, NewGlucose_Overweight = 0, NewGlucose_Secret = 0;

        const { BMI, Insulin, Glucose } = formData;

        if (parseFloat(BMI) <= 18.5) {
            NewBMI_Underweight = 1;
        } else if (18.5 < parseFloat(BMI) && parseFloat(BMI) <= 24.9) {
            // Normal BMI
        } else if (24.9 < parseFloat(BMI) && parseFloat(BMI) <= 29.9) {
            NewBMI_Overweight = 1;
        } else if (29.9 < parseFloat(BMI) && parseFloat(BMI) <= 34.9) {
            NewBMI_Obesity_1 = 1;
        } else if (34.9 < parseFloat(BMI) && parseFloat(BMI) <= 39.9) {
            NewBMI_Obesity_2 = 1;
        } else if (parseFloat(BMI) > 39.9) {
            NewBMI_Obesity_3 = 1;
        }

        if (16 <= parseFloat(Insulin) && parseFloat(Insulin) <= 166) {
            NewInsulinScore_Normal = 1;
        }

        if (parseFloat(Glucose) <= 70) {
            NewGlucose_Low = 1;
        } else if (70 < parseFloat(Glucose) && parseFloat(Glucose) <= 99) {
            NewGlucose_Normal = 1;
        } else if (99 < parseFloat(Glucose) && parseFloat(Glucose) <= 126) {
            NewGlucose_Overweight = 1;
        } else if (parseFloat(Glucose) > 126) {
            NewGlucose_Secret = 1;
        }

        const user_input = [
            parseFloat(formData.Pregnancies), parseFloat(formData.Glucose), parseFloat(formData.BloodPressure), parseFloat(formData.SkinThickness), parseFloat(formData.Insulin),
            parseFloat(formData.BMI), parseFloat(formData.DiabetesPedigreeFunction), parseFloat(formData.Age)
        ];

        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

        try {
            const response = await fetch(`${API_URL}/predict-diabetes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input: user_input }),  // Sending the user input array
            });
        
            const result = await response.json();
        
            if (result.prediction === 1) {
                setDiabetesResult("The person has diabetes");
            } else {
                setDiabetesResult("The person does not have diabetes");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Diabetes Prediction Using Machine Learning</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">{key}</label>
                        <input
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
                Diabetes Test Result
            </button>
            {diabetesResult && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                    {diabetesResult}
                </div>
            )}
        </div>
    );
}

export default Daibites;
