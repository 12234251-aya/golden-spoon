function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">

      <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap mb-3">
        <span>Delicious Food</span>
        <span>|</span>
        <span>Fresh Ingredients</span>
        <span>|</span>
        <span>Great Service</span>
        <span>|</span>

        <span>
          <i className="bi bi-envelope-fill me-2"></i>
          goldenspoon@gmail.com
        </span>

        <span>
          <i className="bi bi-telephone-fill me-2"></i>
          +961 70 123 456
        </span>
      </div>

      <p className="mb-0 text-secondary">
        © 2026 Golden Spoon. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;