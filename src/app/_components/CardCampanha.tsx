export function CardCampanha() {
  return (
    <div className="flex-shrink-0 h-60 w-full sm:w-48 md:w-40 lg:w-52 rounded-xl border-2 shadow-lg overflow-hidden">
      <div className="h-44 w-full flex justify-center items-center bg-slate-950">
        <p className="text-white">image</p>
      </div>
      <div className="px-2">
        <div className="mt-2">
          <h3>30% off em toda loja</h3>
        </div>
        <div className="p-1">
          <p className="text-end text-red-600">restam: 3d</p>
        </div>
      </div>
    </div>
  );
}
