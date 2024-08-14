import React from "react";

const LANDINGPAGE = React.lazy (()=> import ("../components/admin/landing/landingcomponents/MainPage.jsx"));
const DASHBOARD = React.lazy(() => import("../components/admin/dashboard/Index.jsx"));
const KANBAN = React.lazy(()=> import("../components/admin/kanban/Index.jsx"));

const WEB_PAGES = {
  LANDINGPAGE,
  DASHBOARD,
  KANBAN,
};

export default WEB_PAGES;
