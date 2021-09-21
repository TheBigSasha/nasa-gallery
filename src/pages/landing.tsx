import * as React from "react"

import Layout from "../components/layout"
import Seo from "../utility/seo"

const LandingPage: React.FC = () => (
  <Layout>
    <Seo title="Landing" />
    <h1>NASA Gallery</h1>
    <p>One link, for all things NASA Gallery.</p>
    <div className={"horizontal"}>
      <div className={"card"}>
        <a href={"https://github.com/TheBigSasha/nasa-gallery"}>
          <h1 className={"magic"}>Source Code</h1>
        </a>
        <p>Written with React, Spring Boot, & Gatsby</p>
      </div>
      <div className={"card"}>
        <a href={"https://thebigsasha.github.io/nasa-gallery/"}>
          <h1 className={"magic"}>Deployed Site</h1>
        </a>
        <p>Hosted on GitHub Pages</p>
      </div>
      <div className={"card"}>
        <a href={"https://github.com/TheBigSasha/nasa-gallery#readme"}>
          <h1 className={"magic"}>Documentation</h1>
        </a>
        <p>For more details on features & process</p>
      </div>
    </div>
  </Layout>
)

export default LandingPage
