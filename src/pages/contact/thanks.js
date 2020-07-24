import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";

export default () => (
  <Layout flat>
    <div className="contact-thanks">
      <h1>Thanks for reaching out!</h1>
      <p>Someone will be in contact with you typically within 24 hours.</p>
      <Link to="/" className="btn btn-primary">
        Home Page
      </Link>
    </div>
  </Layout>
);
