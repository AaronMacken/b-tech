import React from "react";
import { Link } from "gatsby";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-copyright text-center py-3" id="bar">
          <div>
            <h6 className="mb-0" id="footer-text">
              Get connected with us on social networks!
            </h6>

            <div id="socials">
              <a className="icon-link" target="__blank">
                <FaFacebook />
              </a>
              <a className="icon-link" target="__blank">
                <FaTwitter />
              </a>
              <a className="icon-link" target="__blank">
                <FaLinkedin />
              </a>
              <a className="icon-link" target="__blank">
                <FaInstagram />
              </a>
              <a className="icon-link" target="__blank">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="container p-5">
          <div className="row">
            {/* col 1 */}
            <div className="col-md-4 text-center">
              <h6 className="text-uppercase font-weight-bold">Babylon Technology</h6>
              <p>
                Making your IT dreams come true. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Eum culpa quae sunt repellat eos laborum magni, repudiandae dicta consequatur?
                Ullam a officia reprehenderit vel placeat molestias porro architecto voluptates
                tempora.
              </p>
              <hr class="my-hr" />
            </div>
            {/* col 2 */}
            <div class="col-md-4 text-center">
              <h6 class="text-uppercase font-weight-bold">Useful links</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a href="#!">Our Services</a>
              </p>
              <p>
                <a href="#!">FAQ</a>
              </p>
              <p>
                <a href="#!">About Us</a>
              </p>
              <p>
                <a href="#!">Contact Us</a>
              </p>
              <hr class="my-hr" />
            </div>
            {/* COL 3 */}
            <div className="col-md-4 text-center">
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr
                class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i class="fas fa-home mr-3"></i> San Francisco, CA, 94118
              </p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88
              </p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89
              </p>
              <hr class="my-hr" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
