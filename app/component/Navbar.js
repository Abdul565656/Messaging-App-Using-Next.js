"use client"
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
// import { useUser } from '@clerk/nextjs';


function Navbar() {
  // const user = useUser();
  // console.log(user.user?.id)
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo (Left Side) */}
        <Link href="/" className="flex items-center">
          
        <h1>Conncectivity</h1>
            <span className="sr-only">Home</span>  {/*  For Screen Readers. */}
          
        </Link>

        {/* Navigation Links (Right Side) */}
        <div className="flex md:order-2">
            {/* Mobile Menu Button (Hidden on larger screens) */}
            <button
              type="button"
              className="md:hidden text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="navbar-items"  // Important for accessibility, connects button to the menu
              aria-expanded="false"  // Important for accessibility, indicates if the menu is open
            >
               <svg
                 className="w-6 h-6"
                 aria-hidden="true"
                 fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"
               >
                <path
                   fillRule="evenodd"
                   d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                   clipRule="evenodd"
                 ></path>
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>


          {/*  You can place a button here or a user icon here  */}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" //Hidden by default, flex on medium and up.
          id="navbar-items" // ID used for accessibility, connected to the button above
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-800">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link href="/forums" className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                Forums
              </Link>
            </li>
            <li>
              <Link href="/chat" className="block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">
                UserChat
              </Link>
            </li>
            <li>
                <UserButton/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;