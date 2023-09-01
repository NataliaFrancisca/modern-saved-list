import { FormContent } from "@/app/types/types";

export function filterUsingSearch(data: Array<FormContent>, search: string) {
    return data.filter((content: FormContent) => content.title.includes(search));
  }
  
export function filterUsingTypes(data: Array<FormContent>, filter: string) {
    return filter === 'ALLCONTENT'
      ? data
      : data.filter((content: FormContent) => content.type == filter);
}
  
