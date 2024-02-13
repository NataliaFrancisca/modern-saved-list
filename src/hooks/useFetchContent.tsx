import { getResource } from "@/firebase/database/resource";
import { TContent } from "@/ts/types";
import { filterUsingSearch, filterUsingTypes } from "@/utils/filter/filter";
import { useEffect, useState } from "react"

export const UseFetchContent = (searchResult: string, filter: string) => {
  const [data, setData] = useState<Array<TContent>>();
  const [loading, setLoading] = useState(false);

  const [firstFetchSearch, setFirstFetchSearch] = useState(true);
  const [firstFetchType, setFirstFetchType] = useState(true);
  const [baseData, setBaseData] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading((prev) => !prev);
      const result = await getResource();
      const data = filterUsingTypes(result.content, filter);
      setData(data);
      setBaseData(result.content);
      setLoading((prev) => !prev);
    };

    fetchContent();
  }, []);

  useEffect(() => {
    if (firstFetchSearch) {
      setFirstFetchSearch(false);
      return;
    }

    const result = filterUsingSearch(baseData, searchResult);
    setData(result);
  }, [searchResult]);

  useEffect(() => {
    if (firstFetchType) {
      setFirstFetchType(false);
      return;
    }

    const result = filterUsingTypes(baseData, filter);
    setData(result);
  }, [filter]);

  return { loading, data };
}