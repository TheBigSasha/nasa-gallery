/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../style/styles.scss"
import { motion } from "framer-motion"

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
          pathPrefix
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <motion.footer
        style={{
          marginTop: `2rem`,
          bottom: 0,
        }}
        initial={{y: 100}} animate={{y:0}}
      >
        <div className={'leftRight'} style={{padding: `0 1.0875rem 0`}} >
        <motion.div whileHover={{y: -5}}>
        © {new Date().getFullYear()},
        <a href="https://sasharesume.com">Alexander Aleshchenko</a>
        </motion.div>
          <motion.div whileHover={{y: -5}}>
            See source on <a href={`https://github.com/TheBigSasha/${data.site.pathPrefix || ''}`}>GitHub</a>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}

export default Layout
