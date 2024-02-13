import { TContent } from "@/ts/types";

export function filterUsingSearch(data: Array<TContent>, search: string){
  return data.filter((content: TContent) => {
    const titleUpperCase = content.title.toUpperCase();
    return titleUpperCase.includes(search);
  });
}

export function filterUsingTypes(data: Array<TContent>, filter: string){
  return filter === 'ALLCONTENT'
    ? data
    : data.filter((content: TContent) => content.type == filter);
}