import MainBody from "./main/MainBody";
import MainHeader from "./main/MainHeader";

const MainLayout = () => {
  return (
    <div className="w-full h-full py-10 px-20 bg-slate-50 box-border">
      <MainHeader />
      <MainBody />
    </div>
  );
};

export default MainLayout;
