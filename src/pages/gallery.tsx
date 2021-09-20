import * as React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../utility/seo"
import loadable from '@loadable/component'
import { useState } from "react"
import { useStore } from "react-stores"
import { APIStore } from "../utility/APIStore"
import APIKeySetter from "../components/APIKeySetter"


const GalleryBrowser = loadable(() => import('../components/GalleryBrowser'));

const IndexPage: React.FC = () => {
  const lastDate = new Date();
  const dateStart = new Date(lastDate);
  const [apiKey, setApiKey] = useState<string | undefined>(process.env.NASA_API_KEY || useStore(APIStore).APIKey); //Switch to context
  APIStore.setState({
    APIKey: apiKey
  })
  const [showPopup, setShowPopup] = useState<boolean>(false);

  dateStart.setDate(dateStart.getDate() - 20);
  return(
  <Layout>
    <Seo title="Gallery" />
    {(apiKey === undefined || showPopup) && <APIKeySetter setApiKey={(key) => {setApiKey(key)}} apiKey={apiKey || ''} exit={() => {
      setShowPopup(false)
    }}/>}

    <GalleryBrowser dateEnd={lastDate} dateStart={dateStart} apiKey={apiKey || ''}>
    </GalleryBrowser>
  </Layout>
  );
}

export default IndexPage
