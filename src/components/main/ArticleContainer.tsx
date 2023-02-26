import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
  name: string;
}

const ArticleContainer = ({ imgSrc, title, name }: Props) => {
  return (
    <div className="w-72 h-80 border border-slate-500 border-solid flex flex-col">
      <div className="basis-5/12">
        <Image
          src={imgSrc}
          alt="test"
          className="w-full h-auto"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="basis-5/12">{title}</div>
      <div className="basis-2/12">{name}</div>
    </div>
  );
};

export default ArticleContainer;
