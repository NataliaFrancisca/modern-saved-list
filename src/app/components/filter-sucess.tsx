import { useRouter } from 'next/navigation';
import { FormContent } from '../types/types';
import Content from './content';

const FilterSucess = (props: { data: Array<FormContent> }) => {
  const router = useRouter();

  return (
    <section className="result_sucess">
      <>
        <button
          className="button_add"
          onClick={() => router.push('/dashboard/save-content')}
        >
          <img src="icon/add.svg" alt="add icon" />
        </button>

        {props.data &&
          props.data.map((content, index) => (
            <Content data={content} key={index} />
          ))}
      </>
    </section>
  );
};

export default FilterSucess;
