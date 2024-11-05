export function CardDefoult() {
  return (
    <div className="flex-shrink-0 h-64 w-full sm:w-40 md:w-44 lg:w-56 rounded-xl border-2 shadow-lg overflow-hidden">
      <div className="h-44 w-full flex justify-center items-center bg-slate-950">
        <p className="text-white">Loading...</p>
      </div>
      <div className="px-2 flex justify-center items-center">
        <h3 className="text-red-600"></h3>
      </div>
    </div>
  );
}
