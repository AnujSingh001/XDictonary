import React, { useState } from 'react';

export default function Dictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState('');

  const handleSearch = () => {
    const trimmedSearch = searchTerm.trim();
    
    if (!trimmedSearch) {
      setResult('');
      return;
    }

    const foundWord = dictionary.find(
      item => item.word.toLowerCase() === trimmedSearch.toLowerCase()
    );

    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult('Word not found in the dictionary.');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: 'bold' }}>
        Dictionary App
      </h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search for a word..."
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '350px',
            marginRight: '10px',
            border: '1px solid #ccc'
          }}
        />
        <button 
          onClick={handleSearch}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc'
          }}
        >
          Search
        </button>
      </div>
      
      <div>
        {result === 'Word not found in the dictionary.' ? (
          <p style={{ fontSize: '16px' }}>{result}</p>
        ) : result ? (
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>
              Definition:
            </h3>
            <p style={{ fontSize: '16px', margin: '0' }}>{result}</p>
          </div>
        ) : (
          <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Definition:</h3>
        )}
      </div>
    </div>
  );
}