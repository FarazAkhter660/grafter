import { useCallback, useEffect, useState } from "react";
import { fetchFeaturesContent, fetchHeroContent } from "../services/api";

export const useContent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const loadContent = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const [heroPayload, featuresPayload] = await Promise.all([
        fetchHeroContent(),
        fetchFeaturesContent()
      ]);

      setData({
        ...heroPayload,
        ...featuresPayload
      });
    } catch (loadError) {
      setError(loadError.message || "Unable to load page data.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  return {
    data,
    isLoading,
    error,
    retry: loadContent
  };
};
