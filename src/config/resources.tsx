import {
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

// the resource work like routers, we define the resource that will be shown on the side bar it will be added automtically
// we add the imported resorces on the resources property on Refine wrapper (app.tsx)
export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    // meta is using to add any additionaly properties
    meta: {
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
  },
  {
    name: "companies",
    list: "/companies",
    // adding the route actions
    show: "/companies/:id",
    create: "/companies/new",
    edit: "/companies/edit/:id",

    meta: {
      icon: <ShopOutlined />,
      label: "Companies",
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/new",
    edit: "/tasks/edit/:id",

    meta: {
      icon: <ProjectOutlined />,
      label: "Tasks",
    },
  },
];
