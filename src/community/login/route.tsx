import React from "react";
const Element = lazy(() => import("./views"));

export default [
  {
    path: "/login",
    element: <Element />,
    children: [],
  },
];
