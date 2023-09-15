import { NavLink } from "react-router-dom";
const Deshboard = () => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-6 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <ul className="space-y-6 tracking-wide mt-8">
            <li>
              <NavLink to="/array">
                <div className='flex click relative px-4 py-4 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">
                    Array Methods
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/storage">
                <div className='flex click relative px-4 py-4 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">
                    Local & session Storage
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/validation">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">
                    E-mail validation
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/copy">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">
                    Copy Clipboard
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/window">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">windows</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/location">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">Location</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/mode">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">
                    Dark & light mode
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/api">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <span className="group hover:text-gray-700">Fetch api</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Dashboard
            </h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1 ">
              <NavLink to="/array">
                <div className="h-25  hover:bg-gradient-to-r from-orange-500 to-yellow-200  hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  Array Methods
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/storage">
                <div className="h-25  hover:bg-gradient-to-r from-orange-500 to-yellow-200  hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  Local & session Storage
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/validation">
                <div className="h-25 hover:bg-gradient-to-r from-orange-500 to-yellow-200  hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  E-mail validation
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/copy">
                <div className="h-25 hover:bg-gradient-to-r from-orange-500 to-yellow-200  hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  Copy Clipboard
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/window">
                <div className="h-25  hover:bg-gradient-to-r from-orange-500 to-yellow-200  hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  windows
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/location">
                <div className="h-25 hover:bg-gradient-to-r from-orange-500 to-yellow-200  hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  Location
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/mode">
                <div className="h-25 hover:bg-gradient-to-r from-orange-500 to-yellow-200  hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  Dark & light mode
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/api">
                <div className="h-25 hover:bg-gradient-to-r from-orange-500 to-yellow-200 hover:text-white click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  Fetch api
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Deshboard;
