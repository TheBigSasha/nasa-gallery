import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../utility/seo"
import ImageOfTheDay from "../components/ImageOfTheDay"
import DatePicker from 'react-date-picker';
import { useState } from "react"



const IndexPage: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return(
  <Layout>
    <Seo title="Home" />
    <h1>The space age is upon us 🚀</h1>
    <p>Date picker goes here</p>
    <ImageOfTheDay date={date.toLocaleDateString("fr-ca", {year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(new RegExp('/', 'g'), '-')}/>
  </Layout>
  );
}

export default IndexPage
