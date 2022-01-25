import { useState, useEffect } from 'react';

const useGetResponse = (URL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const document = await fetch( URL );
        const response = await document.json();

        setData(response.data.results)
        setLoading(false)
        
      } catch (e) {
        alert(e);
      }
    };

    getData();
  }, [URL]);

  return [data, loading];
};

export default useGetResponse;
