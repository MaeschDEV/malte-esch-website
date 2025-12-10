import Link from "next/link";

interface Props {
  imgSource: string;
  imgAlt: string;
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
}

const projectCard = ({
  imgSource,
  imgAlt,
  title,
  description,
  linkHref,
  linkText,
}: Props) => {
  return (
    <div className="card bg-neutral text-neutral-content shadow-sm">
      <figure className="w-full aspect-video bg-neutral">
        <img
          src={imgSource}
          alt={imgAlt}
          className="w-full h-full object-contain object-top"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link href={linkHref}>{linkText}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default projectCard;
