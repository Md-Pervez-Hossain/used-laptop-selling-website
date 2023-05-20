import React from "react";
import { NavLink } from "react-router-dom";

const DashBoadCommonInfo = () => {
  return (
    <div>
      <div className="flex items-center gap-24">
        <div>
          <NavLink>DashBoard</NavLink>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            porro nobis odit minus unde, sint maxime reprehenderit voluptas sed.
            Praesentium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoadCommonInfo;
