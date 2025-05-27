import React, { useEffect, useState } from 'react';

const FoodCard = ({ name }) => {
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
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      {loading ? (
        <p>Loading summary...</p>
      ) : (
        <p className="text-gray-700">{summary}</p>
      )}
    </div>
  );
};


const Food = () => {
  const foodColumns = [
    ['Pizza', 'Burger', 'Falafel'],
    ['Sushi', 'Ramen', 'Tempura'],
    ['Tacos', 'Burrito', 'Enchilada'],
    ['Pasta', 'Lasagna', 'Gnocchi'],
    ['Croissant', 'Baguette', 'Quiche'],
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Food Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {foodColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col">
            {column.map((foodName) => (
              <FoodCard key={foodName} name={foodName} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;