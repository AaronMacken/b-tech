import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavbarBootstrap extends Component {
  // state taht will be triggered when someone scrolls down from the top of the page
  constructor(props) {
    super(props);
    this.state = {
      scrolling: true,
      mobile: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  // use handle scroll method when component is mounted
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
    this.handleScroll();
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  }
  // use the window object to check to see if the user has scrolled
  // call set state based on user activity
  handleScroll(event) {
    if (window.innerWidth < 992) {
      this.setState({ scrolling: true });
    } else if (window.scrollY === 0) {
      this.setState({ scrolling: false });
    } else if (window.scrollY !== 0) {
      this.setState({ scrolling: true });
    }
  }
  handleResize(event) {
    if (window.innerWidth < 992) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }
  render() {
    // bootstrap navbar default style, changes to dark if user scrolls
    let navbarStyle = "transparent";
    if (this.state.mobile) {
      navbarStyle = "dark";
    } else {
      if (!this.state.mobile && !this.state.scrolling) {
        navbarStyle = "transparent";
      } else {
        navbarStyle = "dark";
      }
    }

    return (
      <Navbar
        className={navbarStyle}
        expand="lg"
        variant="dark"
        style={{ padding: "1rem 5%" }}
        fixed="top"
      >
        <Navbar.Brand href="#home">Babylon Tech.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarBootstrap;
