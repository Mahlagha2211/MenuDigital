import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Category from "./Category";

export default function MenuPageLayout() {
  return (
    <div className="relative z-10 ">
      <Nav />
      <Category />
      <Outlet />
    </div>
  );
}
