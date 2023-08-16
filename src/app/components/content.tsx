import { Content } from '../types/types';

const Content = (props: { data: Content }) => {
  const iconPath = `icon/${props.data.type.toLowerCase()}.svg`;

  return (
    <article className={`content content-${props.data.type}`}>
      <div className={`container-image container-${props.data.type}`}>
        {props.data.image ? (
          <img src="images/bell-hooks-book.png" alt="" className="img-full" />
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
