import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { startTransition, useState } from 'react';
import { faShoppingCart, faTachometerAlt, faTasks, faTimes, faCaretDown, faCaretUp, faBars, faBagShopping, faMoneyBill, faFileInvoice } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';
import PATHS from '../../../../Paths';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const navigate=useNavigate()

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const items = [
    {   
      type: 'link',
      label: 'Dashboard',
      icon: faTachometerAlt,
     // PATHS: '/dashboard'
     path: PATHS.DASHBOARD,
    },
    {
      type: 'dropdown',
      label: 'E-commerce',
      icon: faShoppingCart,
      
      children: [
        {  
          label: 'Products', 
          icon: faBagShopping,
          children: [
            {  
              label: 'Product A',
              icon: faTachometerAlt,
              path: PATHS.DASHBOARD,
            },
            {  
              label: 'Product B',
              icon: faTachometerAlt,
              path: PATHS.KANBAN,
            }
          ],
        },
        {  
          label: 'Billing',
          icon: faMoneyBill,
          children: [
            {  
              label: 'Billing A',
              icon: faTachometerAlt,
              
              children: [
                {  
                  label: 'Billing A1',
                  icon: faTachometerAlt,
                },
                {  
                  label: 'Billing A2',
                  icon: faTachometerAlt,
                }
              ],
            },
          ],
        },
        {  
          label: 'Invoice',
          icon: faFileInvoice,
          children: [
            {  
              label: 'Invoice A',
              icon: faTachometerAlt,
            },
            {  
              label: 'Invoice B',
              icon: faTachometerAlt,
            }
          ],
        },
      ],
    },
    {
      type: 'link',
      label: 'Kanban',
      navigate: 'Kanban',
      icon: faTasks,
      path: PATHS.KANBAN,
      // path:"/tasks"
    },
  ];

  const handleDropdownToggle = (path) => {
    setDropdownStates(prevState => {
      const newState = { ...prevState };
      const key = path.join('-');
      newState[key] = !newState[key];
      return newState;
    });
  };

  const renderItems = (items, path = []) => {
    return items.map((item, index) => {
      const currentPath = [...path, index];
      const key = currentPath.join('-');
      const isOpen = dropdownStates[key];

      return (
        <>
        <li key={index} className='mt-4'>
          {item.type === 'link' ? (
            <button
            onClick={() => {
              startTransition(() => {
                navigate(item.path);
              });
            }}
              // onClick={() => setCurrentComponent(item.navigate)}
              className="flex items-center cursor-pointer p-3 text-base text-black"
            >
              <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-black" />
              <span className="ml-4">{item.label}</span>
            </button>
          ) : (
            <div>
              <button
                type="button"
                className="flex items-center w-full text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                // onClick={() => handleDropdownToggle(currentPath)}
                onClick={() => {
                  handleDropdownToggle(currentPath)
                  startTransition(() => {
                    navigate(item.path);
                  });
                }}
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 h-5 text-black cursor-pointer ml-3"/>
                <span className="ml-5">{item.label}</span>
               {item.children && <FontAwesomeIcon icon={isOpen ? faCaretUp : faCaretDown} className="ml-auto w-4 h-4" />} 
              </button>
              {isOpen && item.children && (
                <ul className="ml-6 space-y-1 mb-5">
                  {renderItems(item.children, currentPath)}
                </ul>
              )}
            </div>
          )}
        </li>
        </>
      );
    });
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        aria-controls="sidebar-multi-level-sidebar"
        type="button" 
        className="fixed top-20 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>

        <FontAwesomeIcon icon={faBars} className='w-6 h-6' />
      </button>  

      <aside
        id="sidebar-multi-level-sidebar"
        className={`h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 text-black text-2xl sm:hidden"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="space-y-2 font-medium">
            {renderItems(items)}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
