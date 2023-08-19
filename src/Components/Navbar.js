import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/5a52563da5196da29e67d64c3b6bdcb303d3a4d1/68ebd/_astro/logo-primary.7848484f_1c8y86.svg"
              alt=""
              className="img-fluid"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Rent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sell
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home Loans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Agent Finder
                </a>
              </li>
            </ul>
            {/* <div class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-primary" type="submit">
                Search
              </button>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
