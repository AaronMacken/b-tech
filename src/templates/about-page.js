import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <main className="about-page-section">
      {/* TEXT */}
      <section className="about-page-header-wrapper">
        <h1 className="title-dark about-titles" style={{ marginBottom: "0" }}>
          About
        </h1>
        <h1 className="title-light about-titles">Us</h1>
      </section>
      {/* SERVICES */}
      <section className="about-page-white about-page-service-section">
        <div className="about-us-service-section-text">
          <p>"Babylon Technologies is all about bringing powerful resources to small businesses"</p>
          <Link className="about-page-services-link" to="/services">
            Our Services <FaArrowRight />
          </Link>
        </div>
        <img
          src="/img/about-page-img.jpg"
          alt="Man working on computer"
          className="about-page-service-section-img shadow"
        />
      </section>
      {/* BELEIFS */}
      <section className="about-page-beleifs-section">
        <h2 className="title-dark section-heading" id="about-page-heading">
          Here is what we believe
        </h2>
        <div className="belief-card-contaier">
          <div className="card shadow">
            <img src="/img/mission.png" alt="vision icon" className="belief-icon" />
            <div className="card-body">
              <h4 className="card-title-b">Our Mission</h4>
              <hr />
              <p>
                <FaQuoteLeft style={{ marginRight: "1rem" }} />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci{" "}
              </p>
            </div>
          </div>
          <div className="card shadow">
            <img src="/img/vision.png" alt="vision icon" className="belief-icon" />
            <div className="card-body">
              <h4 className="card-title-b">Our Vision</h4>
              <hr />
              <p>
                <FaQuoteLeft style={{ marginRight: "1rem" }} />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci{" "}
              </p>
            </div>
          </div>
          <div className="card shadow">
            <img src="/img/values.png" alt="vision icon" className="belief-icon" />
            <div className="card-body">
              <h4 className="card-title-b">Our Values</h4>
              <hr />
              <p>
                <FaQuoteLeft style={{ marginRight: "1rem" }} />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-page-white about-page-content">
        <h2 className="title-light section-heading" id="about-page-heading">
          {title}
        </h2>
        <div className="container content">
          <PageContent content={content} />
        </div>
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
