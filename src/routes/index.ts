import React from "react";

/**
 * Application Routes here.
 * Note: this auto-populates your application nav bar. 
 */
const routes: RouteDef[] = [
  { path: "/", text: "Home", component: React.lazy(() => import("./Home")) },
  {
    path: "/dao",
    text: "Create DAO",
    component: React.lazy(() => import("./CreateDAO"))
  },
  {
    path: "/dao/view",
    text: "View DAO",
    component: React.lazy(() => import("./ViewDAO"))
  }
];

export default routes;

export interface RouteDef {
  path: string;
  text: string;
  component?: any;
  render?: (p?: any) => JSX.Element;
}
