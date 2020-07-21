import React from "react";
import Layout from "../../components/Layout";
import FaqRoll from "../../components/FaqRoll";
import { FaTwitter, FaPhone, FaFacebook, FaEnvelope } from "react-icons/fa";

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

          <div class="card card-cascade">
            <div class="view view-cascade gradient-card-header">
              <h2 class="card-header-title mb-3">Still more questions?</h2>
              <p class="card-header-subtitle mb-0">We have easy ways to get in touch with us</p>

              <div class="icons">
                <a class="px-2 fa-lg tw-ic">
                  <i class="fab fa-twitter"> </i>
                  <FaTwitter />
                </a>
                <a class="fa-lg "></a>
                <FaPhone />
                <a class="px-2 fa-lg fb-ic">
                  <FaFacebook />
                </a>
                <a class="px-2 fa-lg email-ic">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
