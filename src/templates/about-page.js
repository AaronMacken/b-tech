import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <main className="about-page-section">
      <section className="about-page-header-wrapper">
        <h1 className="title-dark section-heading" style={{ marginBottom: "0" }}>
          About
        </h1>
        <h1 className="title-light section-heading">Us</h1>
      </section>
      <section className="about-page-white about-page-service-section">
        <div className="about-us-service-section-text">
          <strong>
            "Babylon Technologies is all about bringing powerful resources to small businesses"
          </strong>
          <br />
          <a class="serviceslink" href="#services">
            Our Services <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <img
          src="/img/about-page-img.jpg"
          alt="Man working on computer"
          className="about-page-service-section-img"
        />
      </section>
      <section className="about-page-white">
        <h2>{title}</h2>
        <PageContent content={content} />
      </section>
    </main>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
