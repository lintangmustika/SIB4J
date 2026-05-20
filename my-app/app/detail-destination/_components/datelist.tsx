export default function DatelistPages({
  date,
  price,
} : {
    date: string
    price: string
}) {
  return (
    <div className="bg-white border border-slate-300 px-5 py-3 min-w-2">
        <p className="text-gray-400 flex justify-center items-center text-sm">
            {date}
        </p>

        <h1 className="text-black font-bold text-2xl mt-1">
            {price}
        </h1>
    </div>  
    );
}