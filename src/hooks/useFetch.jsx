import { useState, useEffect } from "react";

export function useFetch( url ) {

    const [user, setUserData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        fetch(url)
          .then((response) => response.json())
          .then((user) => setUserData(user))
          .catch((error) => setError(error))
          .finally( () => setLoading(false))
      }, [])

      return { user, loading, error }
}
