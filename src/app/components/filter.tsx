import { useEffect, useState } from 'react';
import Loader from './loader';
import DashboardNav from './dashboard-nav';
import { useGetContent } from '../hooks/useGetContent';
import Content from './content';
import { useRouter } from 'next/navigation';
import React from 'react';

const Filter = React.memo(() => {
  const [loading, setLoading] = useState(true);
  const userContent = useGetContent();
  const router = useRouter();

  useEffect(() => {
    userContent ? setLoading(false) : setLoading(true);
  }, []);
  // const [loading, setLoading] = useState(true);
  // const routerSearch = useSearchParams();
  // let currentFilter = routerSearch.get('filter') || 'allcontent';

  // const router = useRouter();
  // const data = useGetContent(currentFilter);

  return (
    <main className="filter">
      {loading ? (
        <Loader />
      ) : (
        <>
          <DashboardNav />
          <section className="filter-result">
            <button
              className="btn-add-content"
              onClick={() => router.push('/dashboard/save-content')}
            >
              <img src="icon/add.svg" alt="add icon" />
            </button>

            {userContent.map((content, index) => (
              <Content data={content} key={index} />
            ))}
          </section>
        </>
      )}
    </main>
  );
});

export default Filter;
