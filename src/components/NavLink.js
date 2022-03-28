import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavLink({ to, label }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link style={{ textDecoration: match ? "underline" : "none" }} to={to}>
        {label}
      </Link>
    </div>
  );
}

export default NavLink;