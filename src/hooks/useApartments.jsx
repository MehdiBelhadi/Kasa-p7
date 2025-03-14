import { useState, useEffect } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch("db.json", { signal })
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.error("Fetch error: ", error);
        }
      });

    return () => {
      console.log("cleanup");
      abortController.abort();
    };
  }, []);

  return apartments;
};
