import React from "react";

import Layout from "../../components/Layout";
import FaqRoll from "../../components/FaqRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="faq-section">
          {/* TITLE */}
          <div style={{ marginTop: "4rem" }} className="faq-title-wrapper">
            <h1 className="faqtitle">For your questions,</h1>
            <h1 className="faqtitle2">We got answers</h1>
          </div>

          {/* CARDS */}
          <FaqRoll />
        </section>
      </Layout>
    );
  }
}
