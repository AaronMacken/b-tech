import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const ServicesPageTemplate = () => {
  return (
    <main className="about-page-section">
      <section className="about-page-header-wrapper">
        <h1 className="title-dark about-titles" style={{ marginBottom: "0" }}>
          Services
        </h1>
        <h1 className="title-light about-titles">Us</h1>
      </section>
    </main>
  );
};

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesPageTemplate />
    </Layout>
  );
};

export default ServicesPage;
