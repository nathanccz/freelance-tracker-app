import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AuthContextProvider from "./components/authContext";
import Login from "./pages/Login";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/login">
            <Route index element={<Login />} />
          </Route>
          <Route path="/dashboard">
            <Route index element={<Dashboard route={"dashboard"} />} />
          </Route>
          <Route path="/notifications">
            <Route index element={<Dashboard route={"notifications"} />} />
          </Route>
          <Route path="/leads">
            <Route index element={<Dashboard route={"leads"} />} />
          </Route>
          <Route path="/active">
            <Route index element={<Dashboard route={"active"} />} />
          </Route>
          <Route path="/history">
            <Route index element={<Dashboard route={"history"} />} />
          </Route>
          <Route path="/resources">
            <Route index element={<Dashboard route={"resources"} />} />
          </Route>
          <Route path="/faqs">
            <Route index element={<Dashboard route={"faqs"} />} />
          </Route>
          <Route path="/project/:id">
            <Route index element={<Dashboard route={"project"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
