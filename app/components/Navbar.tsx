'use client'
import Image from 'next/image';

// interface NavbarProps {
//   // Define any props needed for your Navbar
// }

// export const Navbar = () => {
//   const showLogin = () => {
//     // dispatch({ type: 'app/SET_LOGIN_DIALOG', payload: true });
//   };

//   return (
//     <nav className="grid grid-cols-2 px-8 pt-8 text-white text-xl">
//       <a
//         href="#_"
//         className="relative z-10 flex items-center w-auto text-base md:text-xl font-extrabold leading-none text-white select-none"
//         onClick={showLogin}
//       >
//         <Image src="/icon.png" width={120} height={20} className="mr-2 md:mr-2" alt={'Whatellz logo'} />
//       </a>
//       <div className="justify-self-end self-center content-center grid text-base font-medium hover:bg-primary hover:text-white bg-white text-primary border-2 border-primary px-4 py-2 rounded cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out">
//         <span className="inline-block cursor-pointer" onClick={showLogin}>
//           Download Whatellz
//         </span>
//       </div>
//     </nav>
//   )
// };

// export default Navbar;



import React, { useState } from "react";

interface ListItemProps {
  NavLink: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ NavLink, children }) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-gray-700 hover:text-gray-800 lg:ml-12 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white fixed top-0 z-50`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/" className="block w-full py-5">
            <Image src="/icon.png" width={120} height={20} className="mr-2 md:mr-2" alt={'Whatellz logo'} />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={`${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary "></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="https://blog.whatellz.com/">Blog</ListItem>
                  <ListItem NavLink="/contact-us">Contact</ListItem>
                  <ListItem NavLink="/pricing">Pricing</ListItem>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">

              <a  href="/download" className="justify-self-end self-center content-center grid text-base font-medium hover:bg-primary hover:text-white bg-white text-primary border-2 border-primary px-4 py-2 rounded cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out">
                <span className="inline-block cursor-pointer">
                  Download Whatellz
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
export { ListItem };
