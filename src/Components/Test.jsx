import React, { useEffect, useState } from 'react';

const Test = () => {
  const [practiceData, setPracticeData] = useState(null);
  const [data, setData] = useState(null); // State to store API response data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  
  useEffect(() => {
    const fetchPracticeData = async () => {
      try {
        const response = await fetch('http://192.168.1.16:3060/api/Practice/GetPracticebyModel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({}), // Send empty object as payload
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setPracticeData(data); // Set the response data in state
      } catch (error) {
        console.error('Error fetching practice data:', error);
      }
    };

    fetchPracticeData();

    
  }, []);

  if (!practiceData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Practice Data</h2>
      <pre>{JSON.stringify(practiceData, null, 2)}</pre>
      {/* You can map over practiceData here to display specific data */}
    </div>
  );
};

export default Test;