export const Preloader = () => {
  return (
    // <div className="absolute -translate-x-1/2 left-1/2 z-[100] bg-black">
    <div className="relative z-50 w-full h-screen mx-auto bg-black goUp">
      <div className="absolute max-w-sm px-4 -translate-x-1/2 -translate-y-1/2 md:max-w-2xl top-1/2 left-1/2">
        <div className="flex justify-end w-[350px] mb-6 overflow-hidden">
          <div className="flex items-center">
            <div className="w-[350px] h-[2px] bg-white progressCurrent"></div>
            <div className="w-[350px] h-[2px] bg-func-50"></div>
          </div>
        </div>
        <div className="flex items-center justify-between text-lg text-white md:text-xl font-inter animate-pulse">
          <div className="flex items-center gap-2">
            <div className="w-[7px] h-[7px] overflow-hidden bg-accent-50"></div>
            Loading..
          </div>
          <div>//</div>
        </div>
      </div>
    </div>
    // </div>
  );
};
