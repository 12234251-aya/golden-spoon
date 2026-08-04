import { Link } from "react-router-dom";

export default function PageNavigation({ active }) {
  return (
    <nav className="d-flex justify-content-center mt-4 mb-4">
      <ul className="pagination">
        <li className={`page-item ${active === "home" ? "active" : ""}`}>
          <Link className="page-link" to="/">
            1
          </Link>
        </li>

        <li className={`page-item ${active === "menu" ? "active" : ""}`}>
          <Link className="page-link" to="/menu">
            2
          </Link>
        </li>

        <li className={`page-item ${active === "reservation" ? "active" : ""}`}>
          <Link className="page-link" to="/reservation">
            3
          </Link>
        </li>

        <li className={`page-item ${active === "contact" ? "active" : ""}`}>
          <Link className="page-link" to="/contact">
            4
          </Link>
        </li>
      </ul>
    </nav>
  );
}