import SearchIcon from "@/assets/icon/SearchIcon";

const MainHeader = () => {
  return (
    <div className="flex justify-between mb-10">
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
            로그인 낼하자
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
