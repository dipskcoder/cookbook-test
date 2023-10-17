import React from "react";

function NavBar({ recipes , handleDetails}) {
  return (
    <div className="nav-bar">
      <ul>
        {recipes.map((item) => {
          return (
            <li key={item} className="heading-list-item"
              onClick={() => {
                handleDetails(item);
              }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
