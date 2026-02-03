import React, { useState } from 'react';

export default function Dictionary() {
  const [dictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
    { word: "Props", meaning: "Short for properties, used to pass data to components." },
    { word: "Hook", meaning: "A special function that lets you use state and other React features." },
    {word: "next", meaning: "A React framework for server-side rendering and static site generation."}
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setDefinition('');
      setNotFound(false);
      return;
    }

    const foundWord = dictionary.find(
      item => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundWord) {
      setDefinition(foundWord.meaning);
      setNotFound(false);
    } else {
      setDefinition('');
      setNotFound(true);
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
      
      {notFound ? (
        <div>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>
            Definition:
          </h3>
        <p style={{ fontSize: '16px' }}>Word not found in the dictionary.</p>
        </div>
      ) : (
        <div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0' }}>
            Definition:
          </h3>
            <p style={{ fontSize: '16px', margin: '0' }}>{definition}</p> 
        </div>
      )}
    </div>
  );
}