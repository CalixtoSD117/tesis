import { useState, useEffect } from "react";

export function useFetch( url ) {

    const [temperature, setTemperature] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        fetch(url)
          .then((response) => response.json())
          .then((temperature) => setTemperature(temperature))
          .catch((error) => setError(error))
          .finally( () => setLoading(false))
      }, [])

      return { temperature, loading, error }
}
