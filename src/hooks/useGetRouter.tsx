import { useSearchParams } from 'next/navigation';

export const useGetRouter = () => {
  const routerSearch = useSearchParams();
  const filterRouter = routerSearch.get('filter') || 'allcontent';
  return filterRouter.toUpperCase();
};
