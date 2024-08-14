// import DashboardPage from '../components/admin/dashboard/Index';
// import Kanban from '../components/admin/kanban/Index';
 import PublicRoute from '../navigation/routes/PublicRoutes';
//  import PrivateRoute from '../navigation/routes/PrivateRoutes';
 import PublicLayout from '../components/layout/Public';
 import PATH from '../../Paths';
import WEB_PAGES from '../pages/Index';

const PUBLIC_ROUTES = [
  {
    name: "LANDINGPAGE",
    path: PATH.LANDINGPAGE,
    page: <WEB_PAGES.LANDINGPAGE />,
    routeType: PublicRoute,
     layout: PublicLayout,
  },
  {
    name: "DASHBOARD",
    path: PATH.DASHBOARD,
    page: <WEB_PAGES.DASHBOARD />,
    routeType: PublicRoute,
     layout: PublicLayout,
  },
  {
    name: "KANBAN",
    path: PATH.KANBAN,
    page: <WEB_PAGES.KANBAN />,
    routeType: PublicRoute,
    layout: PublicLayout,
  }
];

const PRIVATE_ROUTES = [
  // {
  //   name: "Kanban",
  //   page: <Kanban />,
  //   routeType: PrivateRoute,
  // },
];

const ROUTES = [
  ...PUBLIC_ROUTES,
  ...PRIVATE_ROUTES,
];

export default ROUTES;
