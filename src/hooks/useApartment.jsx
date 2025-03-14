import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.state || !location.state.apartmentId) {
      console.error("Apartment ID is missing in location state");
      return; 
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch("db.json", { signal })
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        if (flat) {
          setFlat(flat); 
        } else {
          console.error("Apartment not found");
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [location.state]);

  return flat;
}
