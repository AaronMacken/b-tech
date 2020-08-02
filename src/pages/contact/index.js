import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout flat>
        <section className="landing-form" style={{ minHeight: "100vh", justifyContent: "initial" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ marginTop: "4rem" }} className="section-heading title-dark">
              Interested in our services?
            </h1>
          </div>

          <div className="contact-flex-wrapper">
            <div className="contact-info-wrapper">
              <div className="contact-info">
                <FaMapMarkerAlt className="contact-info-icon" />
                <p>Gurnee, 60031</p>
                <p>United States</p>
              </div>
              <div className="contact-info">
                <FaPhone className="contact-info-icon" />
                <p>(555) 555 - 5555</p>
                <p>Mon - Fri | 8:00 a.m. - 5:00 p.m.</p>
              </div>
              <div className="contact-info">
                <FaEnvelope className="contact-info-icon" />
                <p>babylon@technologies.com</p>
                <p>LiamMorrison@gmail.com</p>
              </div>
            </div>
            <div className="contact-form-column">
              <h4 className="contact-page-subheading title-light">
                Send us an email and someone will reach out to you soon!
              </h4>
              <form className="form-wrapper" data-netlify="true" name="contact2" method="POST">
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  placeholder="name *"
                  className="form-input"
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="email *"
                  className="form-input"
                  name="email"
                  required
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="form-input"
                  name="number"
                />
                <textarea
                  name="message"
                  placeholder="message *"
                  cols="30"
                  rows="10"
                  className="form-input"
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
