import React from 'react';
import { useEffect, useState } from 'react';
import { useGetContent } from '../hooks/useGetContent';
import { useGetRouter } from '../hooks/useGetRouter';
import Loader from './loader';
import FilterSucess from './filter-sucess';

const Filter = React.memo((props: { searchData: string }) => {
  const filter = useGetRouter();
  const [loading, setLoading] = useState(true);

  const userContent = useGetContent(props.searchData, filter);

  useEffect(() => {
    userContent ? setLoading(false) : setLoading(true);
  }, [userContent]);

  return (
    <div className="component-filter">
      {loading ? (
        <Loader color="PURPLE" />
      ) : (
        <>
          {userContent && userContent.length > 0 ? (
            <FilterSucess data={userContent} />
          ) : (
            <section className="result_error">
              <div className="image-illustration">
                <img
                  src="illustration/nothing-here.svg"
                  alt="toy nothing here"
                />
                <h1>NOTHING HERE</h1>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
});

export default Filter;
