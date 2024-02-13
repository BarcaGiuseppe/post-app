import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Post from "./pages/Post";
import PostDetails from "./pages/PostDetail";
import Login from "./pages/Login";
import RouteNotFound from "./pages/RouteNotFound";
import Navbar from "./pages/Navbar";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function Redirect() {
  return <Navigate to="/404" replace />;
}

function ProtectedRoute({ isAuthenticated }: any) {
  if (!isAuthenticated) return <Navigate to="/" />;
  return <Outlet />;
}

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Post />} />
          <Route path="/:slug" element={<PostDetails />} />
        </Route>
        <Route path="/404" element={<RouteNotFound />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
