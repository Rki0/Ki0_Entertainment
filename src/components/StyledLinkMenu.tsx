import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  last: boolean;
}

function StyledLinkMenu(props: LinkProps) {
  return (
    <Link
      to={props.to}
      className={`py-2 pl-6 text-lg font-semibold border-t-2 border-black hover:bg-black hover:text-white ${
        props.last && "border-b-2"
      }`}
    >
      {props.children}
    </Link>
  );
}

export default StyledLinkMenu;
