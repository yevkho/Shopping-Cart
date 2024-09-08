import { useState, useEffect } from "react";

export function useShoppingData(url) {
  const [shoppingData, setShoppingData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { mode: "cors" }, { signal: controller.signal })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((processedData) => {
        setShoppingData(processedData);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log("Aborted");
        } else {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [url]);

  return { shoppingData, error, loading };
}
