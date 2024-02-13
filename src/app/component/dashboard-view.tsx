'use client';

import { useGetRouter } from "@/hooks/useGetRouter";
import Loader from "./loader";
import { UseFetchContent } from "@/hooks/useFetchContent";
import { useRouter } from "next/navigation";
import Content from "./content";

const DashboardView = (props: {searchResult: string}) => {
  const filter = useGetRouter();
  const router = useRouter();

  const { loading, data } = UseFetchContent(props.searchResult, filter);

  if(loading){
    return <Loader color="PURPLE" />
  }

  return(
    <section className="__dashboard-view">
      {data?.length == 0 && <p>NOTHING HERE :( </p>}

      <button className="__button-add" onClick={() => router.push('/dashboard/save-content')}>
        <img src="icon/add.svg" alt="add icon" />
      </button>
    
      {data && data.map((content, key) => (
        <Content data={content} key={key}/>
      ))}

    </section>
  )
}

export default DashboardView;
