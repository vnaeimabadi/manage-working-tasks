import React from "react";

const Header = ({ children }) => {
  return (
    <div className="header">
      <div className="header-title">
        Task Manager {`>`} {children}
      </div>
    </div>
  );
};

export default Header;
