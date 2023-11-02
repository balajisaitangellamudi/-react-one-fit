function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" href="#">
        <h1 className="title">
          ONE <span className="text-color">FIT</span>
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup" // Ensure this matches the id of the div
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ms-auto">
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            About Us
          </a>
          <a className="nav-link" href="#">
            Contact Us
          </a>
          <a className="nav-link" href="#">
            Join Us
          </a>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
