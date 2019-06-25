import React from "react";

export class Intro extends React.Component {
  render() {
    return (
      <div className="intro-bg  container-fluid">
        {/* <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}

        <div className="header d-flex justify-content-around ">
          <div className="logo">
            <a href="#intro">
              {/* <h1>AIDASH</h1> */}
              <img src="./images/logo2.png" alt="" />
            </a>
          </div>
          <div className="justify-content-around">
            <nav id="menu-bar">
              <ul className="nav justify-content-end">
                <li className="nav-item justify-content-end">
                  <a class="nav-link active" href="#products">
                    Product
                  </a>
                </li>
                <li class="nav-item justify-content-end">
                  <a class="nav-link" href="#partners">
                    Partners
                  </a>
                </li>
                <li class="nav-item justify-content-end">
                  <a class="nav-link" href="#research">
                    Research
                  </a>
                </li>
                <li class="nav-item justify-content-end">
                  <a class="nav-link" href="#news">
                    News
                  </a>
                </li>
                <li id="dots" class="nav-item justify-content-end">
                  <img src="../images/sixdots.svg" alt="pi" />
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div id="desp">
          <div>
            <p>
              <h1>
                Enterprise AI.
                <br /> Delivered.
              </h1>
            </p>
            <p>
              <h6>
                AI DASH delivers an innovative suite of AI-First products that
                enable traditional enterprises in transforming their business
                operations with solutions that are AI-focused, end to end,
                integrated, seamless and secure.
              </h6>
            </p>
          </div>
          <div>
            <button class="btn">Get Started</button>
          </div>
        </div>
      </div>
    );
  }
}
