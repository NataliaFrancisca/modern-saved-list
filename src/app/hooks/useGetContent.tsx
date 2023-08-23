import { useEffect, useState } from 'react';
import { getResource } from '../firebase/database/resource';
import { FormContent } from '../types/types';
import { useSearchParams } from 'next/navigation';

export const useGetContent = () => {
  const routerSearch = useSearchParams();
  let filter = routerSearch.get('filter') || 'allcontent';

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
    const fetchData = async () => {
      const result = await filterData(baseData, filter);
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
