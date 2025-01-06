import  { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

export default function Header() {

  // const { currentUser } = useSelector((state) => state.user);

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
               {/* {currentUser ? (
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar alt='user' img={currentUser.profilePicture} rounded />
                  }
                >
                  <Dropdown.Header>
                    <span className='block text-sm'>@{currentUser.username}</span>
                    <span className='block text-sm font-medium truncate'>
                      {currentUser.email}
                    </span>
                  </Dropdown.Header>
                  <Link to={'/profile'}>
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                </Dropdown>
              ) : (
                <Link to='/sign-in'>
                  <Button gradientDuoTone='purpleToBlue' outline>
                    Sign In
                  </Button>
                </Link>
              )} */}
                  <Link to='/sign-in'>   
                    <button className="bg-blue-700 hover:bg-blue-400 text-white font-bold py-3 px-6 font-serif border-b-8 border-blue-500 hover:border-blue-300 rounded shadow-2xl">
                       SignIn
                    </button>
                  </Link>     
            </ul>
          </div>
                  
        </div>
      </nav>
    </>
  );
};


