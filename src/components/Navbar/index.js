import React from "react";

function Navbar() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Google Books</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Search<span className="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/api/books/:id">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}

export default Navbar;





// <nav>
// <div className="nav-wrapper">
//   <a href="/" className="brand-logo center">Google Books</a>
//   <a href="/">Search</a>
//   <a href="/books">Saved</a>
// </div>
// </nav>