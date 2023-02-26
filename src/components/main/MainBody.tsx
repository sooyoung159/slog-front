import { data } from "tmpData";
import ArticleContainer from "./ArticleContainer";

const MainBody = () => {
  return (
    <div className="w-full flex flex-wrap gap-10">
      {data.map((v: any) => {
        return (
          // <div>
          <ArticleContainer imgSrc={v.imgSrc} title={v.title} name={v.name} />
          // </div>
        );
      })}
    </div>
  );
};

export default MainBody;
