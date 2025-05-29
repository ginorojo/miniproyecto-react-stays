import { useState, useEffect } from 'react';
import axios from 'axios';

export function useStays() {
  const [stays, setStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/stays.json')
      .then(response => {
        setStays(response.data);
        setTimeout(() => {
           setLoading(false);
        }, 800);
       
      })
      .catch(err => {
        setError("Error al cargar los alojamientos");
        setLoading(false);
      });
  }, []);

  return { stays, loading, error };
}

