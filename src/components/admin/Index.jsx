// import Sidebar from "../admin/sidebar/Index";
// import Navbar from "../admin/navabar/Index";
// import Dashboard from "../admin/dashboard/Index";
// // import Ecommerce from "../admin/eCommerce/Index";
// import Kanban from "../admin/kanban/Index";
// import { useState } from "react";

// const Index = () => {
//     const [currentComponent, setCurrentComponent] = useState('Dashboard');

//     const renderComponent = () => {
//         switch (currentComponent) {
//           case 'Dashboard':
//             return <Dashboard />;
//           case 'Kanban':
//             return <Kanban />;
//           default:
//             return <Dashboard />;
//         }
//       };

//   return (  
// <>
// <div className="col-span-12">
//   <Navbar currentComponent={currentComponent} />
// </div>

// <div className="grid grid-cols-12">
//   <div className="w-64 sm:w-auto sm:col-span-3 lg:col-span-2">
//     <Sidebar setCurrentComponent={setCurrentComponent} />
//   </div>

//   <div className="ml-8 col-span-11 sm:col-span-9 lg:col-span-10">
//     {renderComponent()}
//   </div>
// </div>

//     </>
//   );
// }

// export default Index;



//Correct code
// import { Routes, Route} from 'react-router-dom';
// import Sidebar from '../admin/sidebar/Index';
// import Navbar from '../admin/navabar/Index';
// import ROUTES from '../../navigation/Routes';

// const Main = () => {

//   return (
//     <div>
//       <Navbar />
//       <div className="grid grid-cols-12">
//         <div className="w-64 sm:w-auto sm:col-span-3 lg:col-span-2">
//           <Sidebar />
//         </div>

//         <div className=" col-span-11 sm:col-span-9 lg:col-span-10">

//           <div className='bg-pink-100 m-5 p-5 h-screen'>

//         <Routes>
//         {ROUTES.map((item) => {
//           const RouteType = item.routeType;
//           console.log('Rendering Route:', item.path, 'with RouteType:', RouteType, 'and Element:', item.page);

//           return (
//             <Route
//               key={item.path}
//               path={item.path}
//               element={<RouteType element={item?.page} layout={item?.layout} />}
//             />
//           );
//         })}
//       </Routes>

//       </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;







import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from '../admin/sidebar/Index';
import Navbar from '../admin/navabar/Index';
import ROUTES from '../../navigation/Routes';

const Main = () => {
  const location = useLocation();
  const showLayout = location.pathname !== '/';
  const containerClass = showLayout ? 'bg-pink-100 m-5 p-5 h-screen' : 'h-screen';

  return (
    <div>
      {showLayout && <Navbar />}
      <div className="grid grid-cols-12">
        {showLayout && (
          <div className="w-64 sm:w-auto sm:col-span-3 lg:col-span-2">
            <Sidebar />
          </div>
        )}

        <div className={`${showLayout ? 'col-span-11 sm:col-span-9 lg:col-span-10' : 'col-span-12'}`}>
          <div className={containerClass}>
            <Routes>
              {ROUTES.map((item) => {
                const RouteType = item.routeType;
                console.log('Rendering Route:', item.path, 'with RouteType:', RouteType, 'and Element:', item.page);

                return (
                  <Route
                    key={item.path}
                    path={item.path}
                    element={<RouteType element={item?.page} layout={item?.layout} />}
                  />
                );
              })}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
