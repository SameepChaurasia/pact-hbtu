// import { Link } from "react-router-dom";

// export default function Header() {

//   return(
    
//     <header className="bg-gradient-to-r from-fuchsia-100 to-cyan-100  border-4 border-indigo-500 border-y-indigo-800  ">
        
//         <div className="grid grid-cols-3 md:grid-cols-8 gap-4 pl-3 pr-3 pt-2 pb-2">
//             <div>
//               <Link to="/">
//                 <div className="">
//                     <img src="pacticon.png"  alt="Blog Logo" className="h-10 w-10 md:h-16 md:w-20 "/>
//                 </div>  
//               </Link>
//             </div>
//                     <div className="font-serif font-bold text-base pt-3 pb-3  hover:text-cyan-500 hover:underline">
//                   <Link to='/'>
//                       <a >
//                           Home
//                       </a>
//                    </Link></div>

//                   <div className=" font-serif font-bold text-base pt-3 pb-3  hover:text-cyan-500 hover:underline"><Link to='/aboutus'>
//                       <a >
//                             About Us 
//                        </a>
//                   </Link> </div>    

//                   <div className=" font-serif font-bold text-base pt-3 pb-3  hover:text-cyan-500 hover:underline"> <Link to='/pactmembership'>
//                        <a >
//                           Pact Membership 
//                        </a>
//                     </Link></div>

//                     <div className=" font-serif font-bold text-base pt-3 pb-3  hover:text-cyan-500 hover:underline pl-5"><Link to='/team'>
//                        <a >
//                           Team-Members
//                        </a>
//                   </Link></div>

//                     <div className=" font-serif font-bold text-base pt-3 pb-3  hover:text-cyan-500 hover:underline"><Link to='/paintdepartment'>
//                         <a >
//                           Paint Department
//                         </a>
//                     </Link></div>

//                     <div className=" font-serif font-bold text-base pt-3 pb-3  hover:text-cyan-500 hover:underline pl-5"><Link to='/events'>
//                      <a> 
//                         Events
//                       </a>
//                   </Link> </div> 

//                     <div className=" font-serif font-bold text-base pt-3 pb-3  hover:text-cyan-500 hover:underline"><Link to='/alumninetwork'>
//                         <a >
//                           Our Alumni Network
//                         </a>
//                      </Link></div>
//         </div> 
// </header>
//   );
// };

import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const Navbar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/aboutus",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Pact Membership",
      link: "/pactmembership",
    },
    {
      name: "Team-Members",
      link: "/team",
    },
    {
      name: "Paint Department",
      link: "/paintdepartment",
    },
    {
      name: "Our Alumni Network",
      link: "/alumninetwork",
    },
  ];
  return (
    <>
      <nav className="w-full h-auto bg-gradient-to-r from-fuchsia-100 to-cyan-100 border-4 border-indigo-500 border-y-indigo-800 lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md">
        <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
          {/* Navbar logo & toggle button section */}
          <div>
            <div className="flex items-center justify-between py-1 md:py-2 md:block">
              {/* Logo section */}
              <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]" to="/">
              <div className="">
                    <img src="pact-header-logo-new-removebg.png"  alt="Blog Logo" className="h-16 w-auto md:h-20 md:w-auto "/>
                </div> 
              </Link>
              {/* Toggle button section  (we will do it later) */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      className="text-gray-600 cursor-pointer"
                      size={24}
                    />
                  ) : (
                    <FaBars
                      className="text-gray-600 cursor-pointer"
                      size={24}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* NAvbar menu items section */}
          <div
            className={`flex justify-between items-center md:block ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="list-none lg:flex md:flex sm:block block gap-x-8 gap-y-14">
              {Navbar.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="text-gray-700 text-[1.15rem] font-serif  tracking-wider hover:text-cyan-500 hover:underline ease-out duration-700"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
                    <button className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-5 border-b-8 border-blue-500 hover:border-blue-300 rounded shadow-2xl">
                        Login
                    </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};


