'use client';

import { useGetRouter } from "@/hooks/useGetRouter";
import Loader from "./loader";
import { UseFetchContent } from "@/hooks/useFetchContent";

const DashboardView = (props: {searchResult: string}) => {
  const filter = useGetRouter();
  const { loading, data } = UseFetchContent(props.searchResult, filter);

  if(loading){
    return <Loader color="PURPLE" />
  }

  return(
    <section className="__dashboard-view">
      {data?.length == 0 && <p>NOTHING HERE :(</p>}
      {data?.map((element, key) => (
        <p key={key}>{element.title} | {element.type}</p>
      ))}
    </section>
  )
}

export default DashboardView;
