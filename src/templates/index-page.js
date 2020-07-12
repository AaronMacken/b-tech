import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";
import kyle from "./kyle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

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
      <section className="landing-about">
        <h2>Who We Are</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img src={kyle} alt="Kyle Lmaoo" />
            </div>
            <div className="col-md-5">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} />
                We are very happy to work with Altar.io. The collaboration goes far beyond a
                standard IT service: with Altar.io we have a sparring partner that challenges us in
                our product decisions and is truly passionate about the results developed. The level
                of professionalism and dedication is exceptional in this industry and we are eager
                to strengthen our collaboration in the future.
              </p>
              <h4>Liam Morison</h4>
              <h5>Place Logo Here</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-form">
        <h2>Hit us up</h2>
        <form className="form-wrapper">
          <input type="text" placeholder="name" className="form-input" />
          <input type="email" placeholder="email" className="form-input" />
          <textarea
            name="message"
            placeholder="message"
            cols="30"
            rows="10"
            className="form-input"
          ></textarea>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
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
