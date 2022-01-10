import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      This is main Layout used for Entire App (for ex. login layout) Matched
      route is below <br />
      <br />
      <div>
        {/* implement system wide loading component and pass fallback */}
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
}
