const SekeletonCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-pulse">
        <div className="border p-4 rounded-lg shadow-md">
          <div className="w-full bg-slate-200 h-40 object-cover mb-2"></div>
          <div className="flex flex-col">
            <div className="font-bold text-lg w-14 h-5 bg-slate-300"></div>
            <div className="text-gray-600 mt-3 w-14 h-5 bg-slate-300"></div>
            <p className="text-gray-700 mt-2 w-30 h-14 bg-slate-300"></p>
            <div className="flex gap-4 mt-5 justify-end">
              <div className="w-14 h-5 bg-slate-300"></div>
              <div className="w-14 h-5 bg-slate-300"></div>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <div className="w-full bg-slate-200 h-40 object-cover mb-2"></div>
          <div className="flex flex-col">
            <div className="font-bold text-lg w-14 h-5 bg-slate-300"></div>
            <div className="text-gray-600 mt-3 w-14 h-5 bg-slate-300"></div>
            <p className="text-gray-700 mt-2 w-30 h-14 bg-slate-300"></p>
            <div className="flex gap-4 mt-5 justify-end">
              <div className="w-14 h-5 bg-slate-300"></div>
              <div className="w-14 h-5 bg-slate-300"></div>
            </div>
          </div>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <div className="w-full bg-slate-200 h-40 object-cover mb-2"></div>
          <div className="flex flex-col">
            <div className="font-bold text-lg w-14 h-5 bg-slate-300"></div>
            <div className="text-gray-600 mt-3 w-14 h-5 bg-slate-300"></div>
            <p className="text-gray-700 mt-2 w-30 h-14 bg-slate-300"></p>
            <div className="flex gap-4 mt-5 justify-end">
              <div className="w-14 h-5 bg-slate-300"></div>
              <div className="w-14 h-5 bg-slate-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SekeletonCard;
