import { useState } from 'react';
import './App.css';
import Disclaimer from './components/disclaimer';
import ResultsDisplay from './components/resultsDisplay';
import SymptomSelector from './components/symptomSelector';
import serviceAi from './services/aiService';



function App() {

  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSymptoms, setCurrentSymptoms] = useState('');

  const handleSubmit = async (symptoms) => {
    setLoading(true);
    console.log({ symptoms: symptoms })
    setCurrentSymptoms(symptoms);
    {
      try {
        const advice = await serviceAi.getAdviceFor(symptoms);
        setResults(advice);
      } catch (error) {
        alert('An error occurred while getting medical advice. Please try again.');
        throw error
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="container">
      <h1 className="title">AI Pharma Assistant</h1>
      <Disclaimer />

      <SymptomSelector onSubmit={handleSubmit} />

      {
        loading && (
          <div className='loading-container'>
            <div className='spinner'></div>
          </div>
        )
      }

      {results && <ResultsDisplay results={results} symptoms={currentSymptoms} />}
    </div>
  );
}

export default App;
