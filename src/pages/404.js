import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" className="btn btn-primary btn-lg">
        Take me home!
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
