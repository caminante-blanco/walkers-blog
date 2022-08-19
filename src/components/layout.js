import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLink,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "./layout.module.css";

const Layout = ({ PageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <title>
        {PageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLink}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
            <li>
            <Link to="/blog" className={navLinkText}>
                Blog
            </Link>
            </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{PageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
