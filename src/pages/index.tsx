import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../utility/seo"
import ImageOfTheDay from "../components/ImageOfTheDay"
import DatePicker from 'react-date-picker';
import { useState } from "react"
import { motion } from "framer-motion"



const IndexPage: React.FC = () => {
  const [date, setDate] = useState(new Date());
  return(
  <Layout>
    <Seo title="Home" />
    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.7}} className='leftStatic navButton'
    onClick={() => {date.setDate(date.getDate() - 1); setDate(new Date(date))}}>
      {'<'}
    </motion.button>
    {date.getDate() < new Date().getDate() && (    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.7}} className='rightStatic navButton'
    onClick={() => {date.setDate(date.getDate() + 1); setDate(new Date(date))}}>
      {'>'}
    </motion.button>
    )}
    <p>
      {process.env.ENV_TEST}
      </p>
    <ImageOfTheDay date={date.toLocaleDateString("fr-ca", {year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).replace(new RegExp('/', 'g'), '-')}/>
  </Layout>
  );
}

export default IndexPage
