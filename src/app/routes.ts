import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HubPage } from "./components/HubPage";
import { CommunicationsPage } from "./components/CommunicationsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HubPage },
      { path: "communications", Component: CommunicationsPage },
    ],
  },
]);
