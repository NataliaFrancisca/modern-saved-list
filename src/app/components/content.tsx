import { useRouter } from 'next/navigation';
import { FormContent } from '../types/types';

const Content = (props: { data: FormContent }) => {
  const iconPath = `icon/${props.data.type.toLowerCase()}.svg`;
  const route = useRouter();

  const navLink = () => {
    route.push(props.data.link);
  };

  return (
    <article
      className={`content content-${props.data.type}`}
      onClick={() => navLink()}
    >
      <div className={`container-image container-${props.data.type}`}>
        {props.data.image ? (
          <img
            src={props.data.image}
            alt="image about it"
            className="img-full"
            height={200}
            width={100}
          />
        ) : (
          <img src={iconPath} alt="" className="img-icon" />
        )}
      </div>

      <div className="container-description">
        <h2>{props.data.title}</h2>
        <span>{props.data.type}</span>
      </div>
    </article>
  );
};

export default Content;
