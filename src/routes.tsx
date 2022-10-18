import { useLayoutEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages";

export default function Router() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <AnimatePresence>{routes}</AnimatePresence>;
}
