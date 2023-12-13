import React from "react";
import Directory from "../../components/directory/directory.component";
import "../../components/directory/directory.styles.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory />;
    </div>
  );
};
export default Home;
