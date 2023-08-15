import DashboardNav from './dashboard-nav';
import { useSearchParams } from 'next/navigation';

const Filter = () => {
  const router = useSearchParams();
  const filtro = router.get('filter');
  console.log(filtro);

  return (
    <main className="filter">
      <DashboardNav current={filtro == null ? 'allcontent' : filtro} />

      <section className="filter-result">
        <button className="btn-add-content">
          <img src="icon/add.svg" alt="add icon" />
        </button>

        <div className="content-book">
          <img src="images/bell-hooks-book.png" alt="" />
        </div>

        <div className="content-description">
          <h2>ALL ABOUT LOVE NEW VISIONS</h2>
          <span>BOOK</span>
        </div>
      </section>
    </main>
  );
};

export default Filter;
