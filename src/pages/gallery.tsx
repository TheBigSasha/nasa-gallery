import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../utility/seo"
import { SolarSystemLoading } from 'react-loadingg';
import loadable from '@loadable/component'


const GalleryBrowser = loadable(() => import('../components/GalleryBrowser'));

const IndexPage: React.FC = () => {
  const lastDate = new Date();
  const dateStart = new Date(lastDate);
  dateStart.setDate(dateStart.getDate() - 100);
  return(
  <Layout>
    <Seo title="Gallery" />
    <GalleryBrowser dateEnd={lastDate} dateStart={dateStart}>

    </GalleryBrowser>
  </Layout>
  );
}

export default IndexPage
