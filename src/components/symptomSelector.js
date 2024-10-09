import React, { useState } from 'react'
import { MEDICAL_DATA } from '../data/medicalData'

const SymptomSelector = ({ onSubmit }) => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [additionalSymptoms, setAdditionalSymptoms] = useState('');


    const handleSymptomChange = (symptom) => {
        setSelectedSymptoms(prev =>
            prev.includes(symptom)
                ? prev.filter(s => s !== symptom)
                : [...prev, symptom]
        );
    };

    const handleSubmit = () => {
        const allSymptoms = [
            ...selectedSymptoms,
            ...(additionalSymptoms ? [additionalSymptoms] : [])
        ].join(', ');
        onSubmit(allSymptoms);
    };

    return (
        <div className=''>
            <div className=''> Select Symptoms You have</div>
            <div className=''>
                {MEDICAL_DATA && MEDICAL_DATA.symptoms.map((symptoms) => (
                    <div className='' key={symptoms.id}>
                        <label className=''>
                            <input
                                type='checkbox'
                                className=''
                                checked={selectedSymptoms.includes(symptoms.name)}
                                onChange={() => {
                                    handleSymptomChange(symptoms.name)
                                }}
                            />
                            <span className=''></span>
                            <span className=''>
                                {symptoms.name} - {symptoms.description}
                            </span>
                        </label>
                    </div>
                ))}
            </div>
            <div className=''>
                <textarea
                    className=""
                    rows="4"
                    placeholder="Additional Symptoms/Details"
                    value={additionalSymptoms}
                    onChange={(e) => setAdditionalSymptoms(e.target.value)}
                />
            </div>
            <button
                className=""
                onClick={handleSubmit}
                disabled={selectedSymptoms.length === 0 && !additionalSymptoms}
            >
                Get Advice from pharma-Assistant
            </button>
        </div>
    )
}

export default SymptomSelector