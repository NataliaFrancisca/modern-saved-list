import { useEffect, useState } from 'react';
import Loader from './loader';
import DashboardNav from './dashboard-nav';
import { useGetContent } from '../hooks/useGetContent';
import Content from './content';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const Filter = React.memo((props: { searchData: string }) => {
  const router = useRouter();
  const routerSearch = useSearchParams();

  const [loading, setLoading] = useState(true);
  let filter = routerSearch.get('filter') || 'allcontent';

  const userContent = useGetContent(
    props.searchData.toUpperCase(),
    filter.toUpperCase()
  );

  useEffect(() => {
    userContent ? setLoading(false) : setLoading(true);
  }, [userContent]);

  return (
    <div className="filter">
      {loading ? (
        <Loader color="PURPLE" />
      ) : (
        <>
          {userContent && userContent.length == 0 ? (
            <section className="filter-result_nothing">
              <div className="image-illustration">
                <img
                  src="illustration/nothing-here.svg"
                  alt="toy nothing here"
                />
                <h1>NOTHING HERE</h1>
              </div>
            </section>
          ) : (
            <section className="filter-result">
              <>
                <button
                  className="btn-add-content"
                  onClick={() => router.push('/dashboard/save-content')}
                >
                  <img src="icon/add.svg" alt="add icon" />
                </button>

                {userContent &&
                  userContent.map((content, index) => (
                    <Content data={content} key={index} />
                  ))}
              </>
            </section>
          )}
        </>
      )}
    </div>
  );
});

export default Filter;
