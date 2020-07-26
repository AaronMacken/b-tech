import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "gatsby";

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
    if (this.state.mobile || this.props.flat) {
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
        <Navbar.Brand>
          <Link to="/" className="navi-link">
            <img src="/img/bteclogowhite.png" style={{ height: "2.5rem", marginRight: "1rem" }} />
            Babylon Technologies
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
            <Link className="navbar-item" to="/" className="navi-link">
              Home
            </Link>
            <Link className="navbar-item" to="/about" className="navi-link">
              About Us
            </Link>
            <Link className="navbar-item" to="/services" className="navi-link">
              Services
            </Link>
            <Link className="navbar-item" to="/contact" className="navi-link">
              Contact
            </Link>
            <Link className="navbar-item" to="/faq" className="navi-link">
              F.A.Q.
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarBootstrap;
