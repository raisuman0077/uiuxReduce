import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import routes from "./routes/routes";
import Loading from "./views/Loading";

function App() {
  return (
    <>
      <Navbar routeActive />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/add-orders" replace />} />
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              >
                <Route
                  path={route.path}
                  element={<Navigate to="today" replace />}
                />
                {(route?.subRoutes || []).map((subRoute) => (
                  <Route
                    key={subRoute.path}
                    path={subRoute.path}
                    element={<subRoute.component />}
                  >
                    {(subRoute?.salesSubRoute || []).map((subSale) => (
                      <Route
                        key={subSale.path}
                        path={subSale.path}
                        element={<subSale.component />}
                      ></Route>
                    ))}
                  </Route>
                ))}
              </Route>
            );
          })}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
