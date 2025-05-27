// CardGrid.jsx
import React, { useEffect, useState } from 'react';
import './index.css';

// רכיב כרטיס יחיד
const Card = ({ name }) => {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
        );
        const data = await response.json();
        if (data.extract) {
          setSummary(data.extract);
        } else {
          setSummary('No summary available.');
        }
      } catch (error) {
        setSummary('Error fetching summary.');
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [name]);

  return (
    <div className="card">
      <h2>{name}</h2>
      {loading ? (
        <p className="content">Loading summary...</p>
      ) : (
        <p className="text-gray-200">{summary}</p>
      )}
    </div>
  );
};

// רכיב רשת של כרטיסים
const CardGrid = ({ data }) => {
  return (
    <div className="cards_container">
      {data.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col">
          {column.map((itemName) => (
            <Card key={itemName} name={itemName} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
