import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  HashRouter,
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

function ProtectedRoute({ isAuthenticated }: any) {
  if (!isAuthenticated) return <Navigate to="/" />;
  return <Outlet />;
}

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<Post />} />
          <Route path=":slug" element={<PostDetails />} />
        </Route>
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
