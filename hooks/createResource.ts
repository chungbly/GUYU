import { useEffect, useState } from "react";

export default function useCreateResource<T>(fetcher: () => Promise<unknown>): {
  data: T | null;
  loading: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetcher();
      setData(data as T);
      setLoading(false);
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
}
