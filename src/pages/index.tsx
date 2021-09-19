import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../utility/seo"
import DatePicker from 'react-date-picker';
import { SolarSystemLoading } from 'react-loadingg';
import { useState } from "react"
import { motion } from "framer-motion"
import loadable from '@loadable/component'


const ImageOfTheDay = loadable(() => import('../components/ImageOfTheDay'));

const IndexPage: React.FC = () => {
  const [date, setDate] = useState(new Date());
  return(
  <Layout>
    <Seo title="Home" />
    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.7}} className='leftStatic navButton'
    onClick={() => {date.setDate(date.getDate() - 1); setDate(new Date(date))}}>
      {'<'}
    </motion.button>
    {date < new Date() && (    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.7}} className='rightStatic navButton'
    onClick={() => {date.setDate(date.getDate() + 1); setDate(new Date(date))}}>
      {'>'}
    </motion.button>
    )}
    <ImageOfTheDay date={date} fallback={<div>Loading...<SolarSystemLoading/></div>} />
  </Layout>
  );
}

export default IndexPage
