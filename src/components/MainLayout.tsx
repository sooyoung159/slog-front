import SearchIcon from "@/assets/icon/SearchIcon";

const MainLayout = () => {
  return (
    <div className="w-screen h-screen py-10 px-20 bg-slate-50 box-border">
      <div className="flex justify-between">
        <div>slog</div>
        <div className="flex">
          <div className="mr-[20px]">
            <SearchIcon />
          </div>
          <div className="mr-[20px]">
            <button className="border-solid border-2  rounded w-24">
              새 글 작성
            </button>
          </div>
          <div>
            <button className="border-solid border-2 rounded-full w-20">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
