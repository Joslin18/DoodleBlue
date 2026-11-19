import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Components/CommonComponents/Header";

import Home from "./Pages/Home";
import Students from "./Pages/Students";
import Teachers from "./Pages/Teachers";

import "./Styles/Style.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />

        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/students"
              element={<Students />}
            />

            <Route
              path="/teachers"
              element={<Teachers />}
            />

            {/* Page Not Found */}

            <Route
              path="*"
              element={
                <div
                  className="page-container"
                >
                  <h1>
                    404 - Page Not Found
                  </h1>
                </div>
              }
            />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}