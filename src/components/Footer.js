import React from "react";
import { Link } from "gatsby";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div class="footer-copyright text-center py-3" id="bar">
          <div class="col-md-12 col-lg-12 text-center mb-md-0">
            <h6 class="mb-0" id="text">
              Get connected with us on social networks!
            </h6>

            <div class="col-md-12 col-lg-12 text-center" id="socials">
              <a class="fb-ic">
                <FaFacebook />
              </a>
              <a class="tw-ic">
                <FaTwitter />
              </a>
              <a class="li-ic">
                <FaLinkedin />
              </a>
              <a class="ins-ic">
                <FaInstagram />
              </a>
              <a class="wa-ic">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
