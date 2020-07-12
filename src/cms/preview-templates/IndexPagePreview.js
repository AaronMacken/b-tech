import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        image={getAsset(entry.getIn(["data", "image"]))}
        title={data.title}
        subheading={data.subheading}
        services={{
          heading: entry.getIn(["data", "services", "heading"]),
          card1: {
            image: getAsset(entry.getIn(["data", "services", "card1", "image"])),
            card_title: entry.getIn(["data", "services", "card1", "card_title"]),
            card_text: entry.getIn(["data", "services", "card1", "card_text"]),
          },
          card2: {
            image: getAsset(entry.getIn(["data", "services", "card2", "image"])),
            card_title: entry.getIn(["data", "services", "card2", "card_title"]),
            card_text: entry.getIn(["data", "services", "card2", "card_text"]),
          },
          card3: {
            image: getAsset(entry.getIn(["data", "services", "card3", "image"])),
            card_title: entry.getIn(["data", "services", "card3", "card_title"]),
            card_text: entry.getIn(["data", "services", "card3", "card_text"]),
          },
        }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
