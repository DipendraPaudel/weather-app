const LoaderAnimation = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-8 max-w-sm w-full m-8">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded w-3/5 mx-auto"></div>
          <div className="h-2 bg-slate-200 rounded w-2/5 mx-auto"></div>
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderAnimation;
