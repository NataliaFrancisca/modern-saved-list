import { useEffect, useState } from 'react';
import { getResource } from '../firebase/database/resource';
import { FormContent } from '../types/types';

export const useGetContent = (filter: string) => {
  const [baseData, setBaseData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getResource();
      if (result) {
        setData(result.content);
        setBaseData(result.content);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('OH SHIT WITH FILTER');
    const fetchData = async () => {
      const result = await filterData(baseData, filter);
      console.log(result);
      setData(result);
    };

    fetchData();
    return () => {};
  }, [filter]);

  return data;
};

function filterData(data: any, filter: String) {
  filter = filter.toUpperCase();

  if (filter == 'ALLCONTENT') {
    return data;
  }

  return data.filter((content: FormContent) => content.type === filter);
}
