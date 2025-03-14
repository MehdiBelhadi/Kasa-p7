import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Vérifie si location.state et location.state.apartmentId existent
    if (!location.state || !location.state.apartmentId) {
      console.error("Apartment ID is missing in location state");
      return; // Si pas de `apartmentId`, on ne fait pas la requête
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    fetch("db.json", { signal })
      .then((res) => res.json())
      .then((flats) => {
        // On cherche l'appartement avec l'ID passé dans l'état
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        if (flat) {
          setFlat(flat); // Si l'appartement existe, on le met dans l'état
        } else {
          console.error("Apartment not found");
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error); // Log uniquement les erreurs autres que AbortError
        }
      });

    // Nettoyage de l'effet (annuler la requête si le composant est démonté)
    return () => {
      abortController.abort();
    };
  }, [location.state]); // Ajoute location.state dans les dépendances pour que l'effet soit déclenché à chaque changement de `location`

  return flat;
}
