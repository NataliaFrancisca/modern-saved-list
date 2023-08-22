import { useGetContent } from '../hooks/useGetContent';
import { FormContent } from '../types/types';
import Content from './content';
import DashboardNav from './dashboard-nav';
import { useSearchParams, useRouter } from 'next/navigation';

const Filter = () => {
  const routerSearch = useSearchParams();
  let currentFilter = routerSearch.get('filter') || 'allcontent';

  const router = useRouter();
  const data = useGetContent(currentFilter);

  const nav = () => {
    router.push('/dashboard/save-content');
  };

  return (
    <main className="filter">
      <DashboardNav />

      <section className="filter-result">
        <button className="btn-add-content" onClick={() => nav()}>
          <img src="icon/add.svg" alt="add icon" />
        </button>

        {data.map((content, index) => (
          <Content data={content} key={index} />
        ))}
      </section>
    </main>
  );
};

export default Filter;
