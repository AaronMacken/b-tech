import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

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
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <h1 style={{ marginTop: "5rem" }} className="section-heading">
              Interested in working with us?
            </h1>
            <p className="contact-page-subheading">
              Send us an email and someone will reach out to you soon!
            </p>
          </div>

          <form className="form-wrapper" data-netlify="true" name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" placeholder="name *" className="form-input" name="name" required />
            <input
              type="email"
              placeholder="email *"
              className="form-input"
              name="email"
              required
            />
            <input type="number" placeholder="Phone Number" className="form-input" name="number" />
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
        </section>
      </Layout>
    );
  }
}
