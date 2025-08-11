export default function Heading() {
  return (
   <header className="flex flex-col sm:flex-row justify-between items-center mb-8 px-4 py-2">
          <div>
            <h1 className="text-3xl font-bold">Chocolate Sales Dashboard</h1>
            <p className="text-sm text-slate-400">Sales Analytics for 2022-2024</p>
          </div>
          <span className="text-sm text-slate-400 mt-2 sm:mt-0">Last Updated: 8/11/2025</span>
        </header>
  );
}