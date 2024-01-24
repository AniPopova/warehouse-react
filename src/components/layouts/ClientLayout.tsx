import { NavLink, Outlet } from "react-router-dom";

export default function ClientLayout() {
  return (
    <div className="client-layout">
      <h2>Additional info</h2>
      <nav>
        <NavLink to="list">See all clients</NavLink>
        <NavLink to="details">Find client by...</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
