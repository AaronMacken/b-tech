import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class FaqRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="faqcard-wrapper">
        {posts &&
          posts.map(({ node: post }) => {
            return (
              <div className="faqcard">
                <div className="card-body2">
                  <h4 className="card-title font-weight-bold">{post.frontmatter.title}</h4>
                  <p className="card-text">{post.excerpt}</p>
                  <div className="align-right">
                    <Link to={post.fields.slug} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

FaqRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query FaqRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "faq-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <FaqRoll data={data} count={count} />}
  />
);

// ORIGINAL DATA RETURNED
// <div className="is-parent column is-6" key={post.id}>
//   <article
//     className={`blog-list-item tile is-child box notification ${
//       post.frontmatter.featuredpost ? 'is-featured' : ''
//     }`}
//   >
//     <header>
//       {post.frontmatter.featuredimage ? (
//         <div className="featured-thumbnail">
//           <PreviewCompatibleImage
//             imageInfo={{
//               image: post.frontmatter.featuredimage,
//               alt: `featured image thumbnail for post ${post.frontmatter.title}`,
//             }}
//           />
//         </div>
//       ) : null}
//       <p className="post-meta">
//         <Link
//           className="title has-text-primary is-size-4"
//           to={post.fields.slug}
//         >
//           {post.frontmatter.title}
//         </Link>
//         <span> &bull; </span>
//         <span className="subtitle is-size-5 is-block">
//           {post.frontmatter.date}
//         </span>
//       </p>
//     </header>
//     <p>
//       {post.excerpt}
//       <br />
//       <br />
//       <Link className="button" to={post.fields.slug}>
//         Keep Reading →
//       </Link>
//     </p>
//   </article>
// </div>
