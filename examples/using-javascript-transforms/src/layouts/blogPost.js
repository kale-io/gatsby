import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import moment from "moment"

import MasterLayout from "./master"

class BlogPostLayout extends React.Component {
  render() {
    let siteMetadata = this.props.data.site.siteMetadata

    const home = (
      <div className="nav">
        <div className="container">
          <div className="nav-left">
            <Link className="nav-item is-tab is-active" to={`/`}>
              Home
            </Link>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <MasterLayout>
          {home}
          <div className="container">{this.props.children()}</div>
          <div className="footer container">
            <hr />
            <p>
              {siteMetadata.siteDescr}
              <a href={siteMetadata.siteTwitterUrl}>
                <br /> <strong>{siteMetadata.siteAuthor}</strong> on Twitter
              </a>
            </p>
          </div>
        </MasterLayout>
      </div>
    )
  }
}

export default BlogPostLayout

export const pageQuery = graphql`
  query BlogPostLayoutBySlug {
    site {
      siteMetadata {
        title
        siteDescr
        siteAuthor
        siteEmailUrl
        siteEmailPretty
        siteTwitterUrl
        siteTwitterPretty
      }
    }
  }
`
