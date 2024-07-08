import { useEffect, useState } from "react";
import Loading from "./components/Loading.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import LoginPage from "./components/LoginPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Layout 내부에 Outlet을 넣어주면, 해당 라우터의 하위 라우터들이 렌더링된다.
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    )
  );

  useEffect(() => {
    init();
  }, []);

  return <>{isLoading ? <Loading /> : <RouterProvider router={router} />}</>;
}

export default App;
