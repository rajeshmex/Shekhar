import React from "react";
import { NavLink } from "react-router-dom";

const HouseBuildNavbar = () => {
  const buildata = [
    { label: "GiLasso", id: 1 },
    { label: "labour", id: 2 },
    { label: "Sand", id: 3 },
    { label: "crushed stone", id: 4 },
    { label: "raj mistri", id: 5 },
    { label: "cement", id: 6 },
    { label: "railling", id: 7 },
  ];

  return (
    <div className="w-1/5 bg-slate-200 border">
      <div>
        {/* <ul>
          {buildata.map((val, id) => {
            return (
              <>
                <li
                  className="uppercase p-5 font-bold text-xl buildNavLi outline-none  bg-slate-100 "
                  style={{ borderBottom: "3px solid #d7d3d3" }}
                >
                  <NavLink style={{ outline: "none" }}>{val.label}</NavLink>
                </li>
              </>
            );
          })}
        </ul> */}

        <div className=" rounded-md">
          <ul className="bg-white rounded-md list-none  text-center">
            {buildata.map((val, id) => {
              return (
                <>
                  <li
                    className="py-3 border-b-2 buildNavLi text-xl font-bold"
                    key={id}
                  >
                    <a href="#" className="list-none ">
                      {val.label}
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HouseBuildNavbar;
