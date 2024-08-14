  import { faChevronDown, faChevronUp, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Person from '../../../assets/images/person.png';
  import { useState } from "react";
import { useLocation } from "react-router-dom";
  // Navbar.js
  const Navbar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    // For path name
    const formatPathname = (pathname) => {
      if (!pathname) return '';
            const cleanedPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
        return cleanedPath.charAt(0).toUpperCase() + cleanedPath.slice(1);}
  
    return (
    <>
      <nav className="bg-blue-500"> 
      <div className="flex items-center justify-between mx-3 sm:mx-20 relative">

      <FontAwesomeIcon icon = {faTachometerAlt} className="w-10 h-20 text-black ml-2" />
      
          <h1>{formatPathname(location.pathname)}</h1>

          
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center">
          <img src={Person} alt="person" className="w-10 h-10 rounded-full ml-2 cursor-pointer"  />
                  <p className="ml-2">Ahmed</p>
                  <FontAwesomeIcon icon={dropdownOpen ? faChevronUp : faChevronDown} className="ml-2" />
          </button> 

          </div>   

      </nav>
              {dropdownOpen && 
              <div className="flex justify-end">
              <div className="fixed mx-14 -mt-3  ">
              <div id="dropdown" className=" bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
        </div>
        </div>
        </div>

        }
        </> 
    );
  };

  export default Navbar;
