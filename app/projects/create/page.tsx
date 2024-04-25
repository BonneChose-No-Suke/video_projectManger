export default function CreateProjects() {
  return (
    <div className='w-10/12 w-10/12 max-w-4xl ml-8 mt-8'>
      <h1 className='text-lg font-semibold text-stone-900 mb-6'>
        プロジェクト新規作成
      </h1>
      {/* ステッパーUI */}
      <div className='flex'>
        <SideStepBar />
      </div>
    </div>
  );
}

const SideStepBar = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className="content-[''] display-block w-4 h-4 border border-[#000] bg-[#FF8882] rounded-full"></div>
      <div className="content-[''] display-block w-4 h-4 border border-[#000] bg-[#FF8882] rounded-full"></div>
      <div className="content-[''] display-block w-4 h-4 border border-[#000] bg-[#FF8882] rounded-full"></div>
      <div className="content-[''] display-block w-4 h-4 border border-[#000] bg-[#FF8882] rounded-full"></div>
    </div>
  );
};
