import { Component } from "react";
import { HeaderOnly } from "../components/Layout";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/following", Component: Following },
  { path: "/profile", Component: Profile },
  { path: "/upload", Component: Upload, layout: HeaderOnly },
  { path: "/search", Component: Search, layout: null },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
