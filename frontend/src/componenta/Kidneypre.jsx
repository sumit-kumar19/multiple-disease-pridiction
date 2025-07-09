    import React, { useState } from 'react';

    const Kidney = () => {
        const [formData, setFormData] = useState({
            age: '',
            blood_pressure: '',
            specific_gravity: '',
            albumin: '',
            sugar: '',
            red_blood_cells: '',
            pus_cell: '',
            pus_cell_clumps: '',
            bacteria: '',
            blood_glucose_random: '',
            blood_urea: '',
            serum_creatinine: '',
            sodium: '',
            potassium: '',
            haemoglobin: '',
            packed_cell_volume: '',
            white_blood_cell_count: '',
            red_blood_cell_count: '',
            hypertension: '',
            diabetes_mellitus: '',
            coronary_artery_disease: '',
            appetite: '',
            peda_edema: '',
            aanemia: ''
        });

        const [kidneyDiagnosis, setKidneyDiagnosis] = useState('');

        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

        const handleSubmit = () => {
            const userInput = Object.values(formData).map(value => parseFloat(value));
            const prediction = kidney_disease_model.predict([userInput]);

            if (prediction[0] === 1) {
                setKidneyDiagnosis("The person has Kidney's disease");
            } else {
                setKidneyDiagnosis("The person does not have Kidney's disease");
            }
        };

        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Kidney Disease Prediction using ML</h1>
                <div className="grid grid-cols-5 gap-4">
                    {Object.keys(formData).map((key, index) => (
                        <div key={index} className="col-span-1">
                            <input
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                placeholder={key.replace(/_/g, ' ')}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Kidney's Test Result
                </button>
                {kidneyDiagnosis && (
                    <div className="mt-4 p-4 bg-green-100 text-green-700 rounded">
                        {kidneyDiagnosis}
                    </div>
                )}
            </div>
        );
    };

    export default Kidney;
