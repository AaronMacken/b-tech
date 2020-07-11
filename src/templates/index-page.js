import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";

export const IndexPageTemplate = ({ image, title, subheading, services }) => {
  const { card1, card2, card3 } = services;
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
        <h2>{services.heading}</h2>
        <div className="service-wrapper">
          <ImageCard image={card1.image} card_title={card1.card_title} text={card1.card_text} />
          <ImageCard image={card2.image} card_title={card2.card_title} text={card2.card_text} />
          <ImageCard image={card3.image} card_title={card3.card_title} text={card3.card_text} />
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
        subheading
        services {
          heading
          card1 {
            card_text
            card_title
            image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 100) {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
          card2 {
            card_text
            card_title
            image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 100) {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
          card3 {
            card_text
            card_title
            image {
              childImageSharp {
                fluid(maxWidth: 250, quality: 100) {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`;
