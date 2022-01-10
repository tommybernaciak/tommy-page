import Social from "./Social";

function Navbar() {
  return (
    <div className="will-change-transform transform transition-transform -translate-x-full absolute top-0 left-0 md:relative md:translate-x-0 w-3/4 md:w-60 h-full min-h-screen p-3 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 flex flex-col gap-2.5 z-20 sidebar">
      <p className="font-bold mb-5 flex items-center gap-2">Tommy Bernaciak</p>

      <ul className="list-none flex flex-col gap-1">
        <li>
          <a
            className="px-2 py-1.5 rounded-md text-sm flex items-center justify-between hover:bg-slate-200 dark:hover:bg-slate-700"
            href="#"
          >
            <span>About</span>
          </a>
        </li>
        <li>
          <a
            className="px-2 py-1.5 rounded-md text-sm flex items-center justify-between hover:bg-slate-200 dark:hover:bg-slate-700"
            href="#"
          >
            <span>Blog</span>
          </a>
        </li>
      </ul>

      <div className="flex-1"></div>

      <ul className="list-none flex flex-wrap justify-center gap-1 pt-2 border-t border-slate-200 dark:border-slate-600"></ul>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        pl / en
      </button>
      <Social />
    </div>
  );
}

export default Navbar;
