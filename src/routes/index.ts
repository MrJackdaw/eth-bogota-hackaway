import React from "react";

/**
 * Application Routes here.
 * Note: this auto-populates your application nav bar. 
 */
const routes: RouteDef[] = [
  { path: "/", text: "Home", component: React.lazy(() => import("./Home")) },
  {
    path: "/dao/new",
    text: "Create DAO",
    component: React.lazy(() => import("./CreateDAO"))
  },
  {
    path: "/dao/list",
    text: "All DAOs",
    component: React.lazy(() => import("./ListDAOs"))
  },
  {
    path: "/dao/:id",
    text: "View DAO",
    isPrivate: true,
    component: React.lazy(() => import("./ViewDAO"))
  }
];

export default routes;

export interface RouteDef {
  path: string;
  text: string;
  component?: any;
  isPrivate?: boolean;
  render?: (p?: any) => JSX.Element;
}
