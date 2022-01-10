import React from "react";
import { Route, Navigate } from "react-router-dom";
import Layout from "./layout/Main.jsx";
import About from "./views/About.jsx";

const ContactUs = React.lazy(() => import("./views/ContactUs.jsx"));
/**
 *
 * you can pass any config during init and those config can become prop for any of the route component
 */

export default function getRoutes(config) {
  return (
    <Route path="home" key="home" element={<Layout />}>
      {/* if no route is defined navigate to about route */}
      <Route index element={<Navigate replace to="about" />}></Route>
      <Route path="about" element={<About />} />
      <Route path="contact-us" element={<ContactUs />} />
    </Route>
  );
}
