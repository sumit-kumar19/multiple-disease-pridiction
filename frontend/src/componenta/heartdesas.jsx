import React, { useState } from 'react';

function Heart() {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
    });

    const [heartDiseaseResult, setHeartDiseaseResult] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        const user_input = Object.values(formData).map(Number);
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
        
        try {
            const response = await fetch(`${API_URL}/predict-heart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input: user_input }),
            });
            
            const result = await response.json();
            
            if (result.prediction === 1) {
                setHeartDiseaseResult('This person is having heart disease');
            } else {
                setHeartDiseaseResult('This person does not have any heart disease');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Heart Disease Prediction Using Machine Learning</h1>
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
                Heart Disease Test Result
            </button>
            {heartDiseaseResult && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md">
                    {heartDiseaseResult}
                </div>
            )}
        </div>
    );
}

export default Heart;
