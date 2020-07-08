import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const ImageCard = ({ image, text, card_title }) => {
  return (
    <div className="service">
      <Img fluid={image.childImageSharp.fluid} />
      {/* <img src={image.childImageSharp.fluid.src} alt={card_title} className="service-img" /> */}
      <h3>{card_title}</h3>
      <p className="underline">{text}</p>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default ImageCard;
