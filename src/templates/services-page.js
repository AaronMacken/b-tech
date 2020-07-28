import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { FaEnvelope } from "react-icons/fa";

export const ServicesPageTemplate = () => {
  return (
    <main className="about-page-section">
      <section className="about-page-header-wrapper">
        <h1 className="title-dark about-titles" style={{ marginBottom: "0" }}>
          Our
        </h1>
        <h1 className="title-light about-titles">Services</h1>
      </section>
      <section className="services-content">
        <div className="container">
          <div className="row">
            <div className="col-12 services-content-wrapper">
              <div className="service-box">
                <img src="/img/serv1.jpeg" alt="some stuff" className="shadow" />

                <div className="service-box-text">
                  <h2>Something we do</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis cum
                    eveniet quam. Architecto voluptatum quas natus ut pariatur cupiditate
                    voluptatem, fugit a ullam laboriosam ex hic dolores distinctio dolore debitis
                    reprehenderit in at maiores eum dolorum nihil soluta eos repellat rem? Deserunt
                    praesentium sunt beatae quia maiores delectus provident!
                  </p>
                  <Link className="btn btn-primary btn-lg text-white" to="/contact">
                    Contact Us <FaEnvelope />
                  </Link>
                </div>
              </div>
              <div className="service-box">
                <div className="service-box-text">
                  <h2>Something we do</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis cum
                    eveniet quam. Architecto voluptatum quas natus ut pariatur cupiditate
                    voluptatem, fugit a ullam laboriosam ex hic dolores distinctio dolore debitis
                    reprehenderit in at maiores eum dolorum nihil soluta eos repellat rem? Deserunt
                    praesentium sunt beatae quia maiores delectus provident!
                  </p>
                  <Link className="btn btn-primary btn-lg text-white" to="/contact">
                    Contact Us <FaEnvelope />
                  </Link>
                </div>
                <img src="/img/serv2.jpeg" alt="some stuff" className="shadow" />
              </div>
              <div className="service-box">
                <img src="/img/serv3.jpeg" alt="some stuff" className="shadow" />

                <div className="service-box-text">
                  <h2>Something we do</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facilis cum
                    eveniet quam. Architecto voluptatum quas natus ut pariatur cupiditate
                    voluptatem, fugit a ullam laboriosam ex hic dolores distinctio dolore debitis
                    reprehenderit in at maiores eum dolorum nihil soluta eos repellat rem? Deserunt
                    praesentium sunt beatae quia maiores delectus provident!
                  </p>
                  <Link className="btn btn-primary btn-lg text-white" to="/contact">
                    Contact Us <FaEnvelope />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesPageTemplate />
    </Layout>
  );
};

export default ServicesPage;
