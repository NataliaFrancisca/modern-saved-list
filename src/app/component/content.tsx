import { TContent } from "@/ts/types";
import { useRouter } from "next/navigation";

const Content = (props: {data: TContent}) => {
  const { type, image, title, link }  = props.data;
  const iconPath = `icon/${type.toLowerCase()}.svg`;

  const router = useRouter();

  const onNavigation = () => {
    router.push(link);
  }
    
  return(
    <article className="__content" onClick={() => onNavigation()}>
      <div className={`container-image _${type}`}>
        {image ? 
          <img
            src={image}
            alt="image about it"
            className="img-full"
            height={200}
            width={100}
          />
          : <img src={iconPath} alt="" className="img-icon" />
        }
      </div>

      <div className="container-description">
        <h2>{title}</h2>
        <span>{type}</span>
      </div>
    </article>
  )
}

export default Content;