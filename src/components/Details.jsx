import React, { useEffect, useState } from 'react';
import './Details.css';

function Details({ info }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/data/${info.id}.json`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке деталей:', error);
        setLoading(false);
      });
  }, [info.id]);

  return (
    <div className="details-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="details-content">
          <img src={details.avatar} alt={details.name} className="avatar" />
          <h2>{details.name}</h2>
          <p>City: {details.details.city}</p>
          <p>Company: {details.details.company}</p>
          <p>Position: {details.details.position}</p>
        </div>
      )}
    </div>
  );
}

export default Details;
