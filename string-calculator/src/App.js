import React, { useState } from 'react';
import add from './utils/stringCalculator';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      const res = add(input);
      setResult(res);
    } catch (e) {
      setResult(null);
      setError(e.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>String Calculator</h2>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows="5"
        cols="50"
        placeholder='Enter string (e.g., "1,2" or "//;\n1;2")'
      />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
    </div>
  );
}

export default App;
