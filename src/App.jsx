import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./constants/routes";
import Loader from "./components/Loader/Loader";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const Home = lazy(() => import("./pages/Home/Home"));
const Main = lazy(() => import("./pages/Main/Main"));
const Favorite = lazy(() => import("./pages/Favorite/Favorite"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTE_PATH.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTE_PATH.catalog} element={<Main />} />
          <Route path={ROUTE_PATH.favorites} element={<Favorite />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
