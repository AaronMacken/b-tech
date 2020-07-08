import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";

export const IndexPageTemplate = ({ image, title, subheading, services }) => {
  return (
    <>
      <section
        className="landing-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(30,30,30,1) 40%, rgba(30,30,30,0.18110994397759106) 100%),url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-heading">
          <h1>{title}</h1>
        </div>
        <div className="hero-subheading">
          <p>{subheading}</p>
        </div>
        <div className="hero-button-container" id="hero-button-container">
          <button className="button">Our Services</button>
          <button className="button-ghost">Contact Us</button>
        </div>
      </section>
      <section className="landing-services">
        {/* <h2>{services.heading}</h2> */}
        <div className="service-wrapper">
          {services.service_card.map((card, i) => {
            return (
              <ImageCard image={card.image} text={card.text} card_title={card.card_title} key={i} />
            );
          })}
        </div>
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  services: PropTypes.shape({
    servicecards: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        services={frontmatter.services}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        services {
          heading
          service_card {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`;
