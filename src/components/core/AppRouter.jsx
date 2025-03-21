import { Routes, Route } from "react-router-dom";
import { routes } from "../../utils/Routes";

export default function AppRouter() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route} />
      ))}
    </Routes>
  );
}
