import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

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

          {/* CARD WRAPPER */}
          <div className="faqcard-wrapper">
            {/* CARD */}
            <div className="faqcard">
              <div className="card-body2">
                <h4 className="card-title font-weight-bold">
                  Just in: small batch of Jamaican Blue Mountain in store next week
                </h4>
                <p className="card-text">
                  We’re proud to announce that we’ll be offering a small batch of Jamaica Blue
                  Mountain coffee beans in our store next week.{" "}
                </p>
                <div className="align-right">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
          </div>

          {/* <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section> */}
        </section>
      </Layout>
    );
  }
}
