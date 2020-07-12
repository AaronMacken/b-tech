import React from "react";
import PropTypes from "prop-types";

const ImageCard = ({ image, text, card_title }) => {
  return (
    <div className="service">
      <img
        src={`${!!image.childImageSharp ? image.childImageSharp.fluid.src : image}`}
        alt={card_title}
        className="service-img"
      />
      <h3>{card_title}</h3>
      <p className="underline">{text}</p>
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  card_title: PropTypes.string.isRequired,
};

export default ImageCard;
