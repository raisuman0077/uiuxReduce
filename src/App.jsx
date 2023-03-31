import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import routes from "./routes/routes";
import salesRoutes from "./routes/salesRoute";
import Loading from "./views/Loading";

function App() {
  const defaultRoute = routes[0]; // set the default route to the first route in the routes array

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            key={defaultRoute.path}
            path={defaultRoute.path}
            element={<defaultRoute.component />}
          />
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            >
              {route.path === "sales-details" &&
                salesRoutes.map((sales) => (
                  <Route
                    key={sales.path}
                    path={sales.path}
                    element={<sales.component />}
                  />
                ))}
            </Route>
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
