import { RouterProvider } from "react-router";
import { router } from "./routes";

// Re-export types and constants so existing component imports still work
export type { Post } from "./components/CommunicationsPage";
export { CATEGORIES } from "./components/CommunicationsPage";

export default function App() {
  return <RouterProvider router={router} />;
}