import React from 'react'
import { MEDICAL_DATA } from '../data/medicalData';
import ReactMarkdown from 'react-markdown';

const ResultsDisplay = ({ results, symptoms }) => {

    return (
        <div className=''>
            {results && (
                <div className=''>
                    <h2>Recommendation from AI-Pharmasist for -{symptoms}</h2>
                    <strong>
                        <ReactMarkdown>{results}</ReactMarkdown>
                    </strong>

                    <div className="">
                        <h3>General Precautions</h3>
                        {MEDICAL_DATA.generalPrecautions.map((precaution, index) => (
                            <div className="" key={index}>
                                {precaution.text}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ResultsDisplay;