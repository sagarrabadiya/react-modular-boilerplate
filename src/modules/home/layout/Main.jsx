import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      Inside home module This is Main module layout if needed or use{" "}
      {"<Outlet />"} directly <br /> <br />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
