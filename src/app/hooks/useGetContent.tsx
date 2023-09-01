import { useEffect, useState } from 'react';
import { FormContent } from '../types/types';
import { getResource } from '../firebase/database/resource';
import {
  getContentSession,
  saveContentSession
} from '../utils/local-storage/save-content';

import { filterUsingTypes, filterUsingSearch } from '../utils/filter/filter';

export const useGetContent = (searchData: string, filter: string) => {
  const [content, setContent] = useState<Array<FormContent>>();
  const [firstFetchSearch, setFirstFetchSearch] = useState(true);
  const [firstFetchType, setFirstFetchType] = useState(true);

  const baseData = getContentSession();

  useEffect(() => {
    const fetchContent = async () => {
      const result = await getResource();
      saveContentSession(result.content);
      const data = filterUsingTypes(result.content, filter);
      setContent(data);
    };

    fetchContent();
  }, []);

  useEffect(() => {
    if (firstFetchSearch) {
      setFirstFetchSearch(false);
      return;
    }

    const result = filterUsingSearch(baseData, searchData);
    setContent(result);
  }, [searchData]);

  useEffect(() => {
    if (firstFetchType) {
      setFirstFetchType(false);
      return;
    }

    const result = filterUsingTypes(baseData, filter);
    setContent(result);
  }, [filter]);

  return content;
};
