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

        <Content data={{ title: 'Pachinko', type: 'BOOK' }} />
        <Content data={{ title: 'BK AO VIVO', type: 'VIDEO' }} />
        <Content data={{ title: 'MANO A MANO', type: 'PODCAST' }} />
        <Content
          data={{
            title: 'What Is Candomblé? Beliefs and History',
            type: 'ARTICLE'
          }}
        />
        <Content data={{ title: 'RECEITA COXINHA FÁCIL', type: 'OTHERS' }} />
        <Content
          data={{ title: 'tudo sobre o amor - bell hooks', type: 'BOOK' }}
        />
        <Content data={{ title: 'amendoas', type: 'BOOK' }} />
        <Content data={{ title: 'BK AO VIVO', type: 'VIDEO' }} />
        <Content data={{ title: 'MANO A MANO', type: 'PODCAST' }} />
        <Content
          data={{
            title: 'What Is Candomblé? Beliefs and History',
            type: 'ARTICLE'
          }}
        />
        <Content data={{ title: 'RECEITA COXINHA FÁCIL', type: 'OTHERS' }} />
        <Content data={{ title: 'RECEITA COXINHA FÁCIL', type: 'OTHERS' }} />
        <Content data={{ title: 'RECEITA COXINHA FÁCIL', type: 'OTHERS' }} />
        <Content data={{ title: 'BK AO VIVO', type: 'VIDEO' }} />
      </section>
    </main>
  );
};

export default Filter;
