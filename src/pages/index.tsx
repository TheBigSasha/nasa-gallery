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
    <ImageOfTheDay date={date.toLocaleDateString("en-US").replace('/', '-')}/>
  </Layout>
  );
}

export default IndexPage
