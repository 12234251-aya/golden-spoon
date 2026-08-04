import { Link, useLocation } from "react-router-dom";

export default function PageNavigation() {
  const location = useLocation();

  const pages = [
    { name: "home", path: "/" },
    { name: "menu", path: "/menu" },
    { name: "reservation", path: "/reservation" },
    { name: "contact", path: "/contact" },
  ];

  return (
    <nav className="d-flex justify-content-center mt-4 mb-4">
      <ul className="pagination">
        {pages.map((page, index) => (
          <li
            key={page.name}
            className={`page-item ${
              location.pathname === page.path ? "active" : ""
            }`}
          >
            <Link
              className="page-link"
              to={page.path}
              onClick={() => window.scrollTo(0, 0)}
            >
              {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}