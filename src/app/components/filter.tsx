import Content from './content';
import DashboardNav from './dashboard-nav';
import { useSearchParams, useRouter } from 'next/navigation';

const Filter = () => {
  const routerSearch = useSearchParams();
  const router = useRouter();
  let filtro = routerSearch.get('filter');
  filtro = filtro == null ? 'allcontent' : filtro;

  const nav = () => {
    router.push('/dashboard/save-content');
  };

  return (
    <main className="filter">
      <DashboardNav current={filtro} />

      <section className="filter-result">
        <button className="btn-add-content" onClick={() => nav()}>
          <img src="icon/add.svg" alt="add icon" />
        </button>

        <Content
          data={{
            title: 'Pachinko',
            link: 'https://www.amazon.com.br/Pachinko-Min-Jin-Lee/dp/8551006347',
            type: 'BOOK'
          }}
        />
      </section>
    </main>
  );
};

export default Filter;
