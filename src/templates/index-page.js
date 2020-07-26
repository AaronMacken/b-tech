import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import ImageCard from "../components/ImageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStream, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  services,
  about,
  contactheading,
}) => {
  const { card1, card2, card3 } = services;
  const { heading, text, signature, logoimage } = about;
  return (
    <>
      <section
        className="landing-hero container"
        // style={{
        //   backgroundImage: `linear-gradient(90deg, rgba(30,30,30,1) 40%, rgba(30,30,30,0.18110994397759106) 100%),url(${
        //     !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        //   })`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="row">
          <div className="col-md-4 mb-4 hero-text">
            <div>
              <h1 id="babylon">Babylon</h1>
              <h1 id="tech">Technology</h1>
            </div>

            <hr />
            <p className="subheading">
              <strong>{subheading}</strong>
            </p>
            <div className="hero-buttons">
              <ScrollLink
                className="btn btn-primary btn-lg"
                id="servicesbtn"
                to="services-section"
                offset={-50}
                smooth
              >
                Our Services <FontAwesomeIcon icon={faStream} />
              </ScrollLink>

              <ScrollLink
                className="btn btn-primary btn-lg"
                id="contactbtn"
                to="contact-section"
                offset={-50}
                duration={1000}
                smooth
              >
                Contact Us <FontAwesomeIcon icon={faEnvelope} />
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>
      <section className="landing-services" name="services-section">
        <h2 className="section-heading title-dark">{services.heading}</h2>
        <div className="service-wrapper">
          <ImageCard image={card1.image} card_title={card1.card_title} text={card1.card_text} />
          <ImageCard image={card2.image} card_title={card2.card_title} text={card2.card_text} />
          <ImageCard image={card3.image} card_title={card3.card_title} text={card3.card_text} />
        </div>

        <Link to="/services" className="btn btn-primary btn-lg text-white mt-3">
          Read more <FaArrowRight style={{ marginLeft: ".5rem" }} />
        </Link>
      </section>
      <section className="landing-about">
        <h2 className="section-heading title-light">{heading}</h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 about-img-col">
              <img
                src={`${
                  !!logoimage.childImageSharp ? logoimage.childImageSharp.fluid.src : logoimage
                }`}
                className="about-logo"
                alt="Babylon Technologies Logo"
              />
            </div>
            <div className="col-md-6 about-wrapper">
              <div className="about-text-wrapper">
                <p>
                  <FontAwesomeIcon icon={faQuoteLeft} className="quote" />
                  <br />
                  <p className="about-text">{text}</p>
                </p>
                <div>
                  <h4>{signature}</h4>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn-primary btn-lg text-white">
              Read more <FaArrowRight style={{ marginLeft: ".5rem" }} />
            </Link>
          </div>
        </div>
      </section>
      <section className="landing-form" name="contact-section">
        <h2 className="section-heading title-dark">{contactheading}</h2>
        <form className="form-wrapper" data-netlify="true" name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" placeholder="name *" className="form-input" name="name" required />
          <input type="email" placeholder="email *" className="form-input" name="email" required />
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
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        services={frontmatter.services}
        about={frontmatter.about}
        contactheading={frontmatter.contactheading}
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
                fluid(maxWidth: 400, quality: 100) {
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
                fluid(maxWidth: 400, quality: 100) {
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
                fluid(maxWidth: 400, quality: 100) {
                  src
                }
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2040, quality: 100) {
              src
            }
          }
        }
        about {
          heading
          signature
          text
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                src
              }
            }
          }
          logoimage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                src
              }
            }
          }
        }
        contactheading
      }
    }
  }
`;

// query MyQuery {
//   markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//     frontmatter {
//       title
//       subheading
//       services {
//         heading
//         card1 {
//           card_text
//           card_title
//           image {
//             childImageSharp {
//               fluid(maxWidth: 400, quality: 100) {
//                 src
//               }
//             }
//           }
//         }
//         card2 {
//           card_text
//           card_title
//           image {
//             childImageSharp {
//               fluid(maxWidth: 400, quality: 100) {
//                 src
//               }
//             }
//           }
//         }
//         card3 {
//           card_text
//           card_title
//           image {
//             childImageSharp {
//               fluid(maxWidth: 400, quality: 100) {
//                 src
//               }
//             }
//           }
//         }
//       }
//       image {
//         childImageSharp {
//           fluid(maxWidth: 2040, quality: 100) {
//             src
//           }
//         }
//       }
//       about {
//         heading
//         signature
//         text
//         image {
//           childImageSharp {
//             fluid(maxWidth: 400, quality: 100) {
//               src
//             }
//           }
//         }
//         logoimage {
//           childImageSharp {
//             fluid(maxWidth: 400, quality: 100) {
//               src
//             }
//           }
//         }
//       }
//       contactheading
//     }
//   }
// }
