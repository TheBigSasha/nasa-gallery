import * as React from "react"
import { useState } from "react"


import Layout from "../components/layout"
import Seo from "../utility/seo"
import loadable from "@loadable/component"
import { useStore } from "react-stores"
import { APIStore } from "../utility/APIStore"
import APIKeySetter from "../components/APIKeySetter"


const GalleryBrowser = loadable(() => import("../components/GalleryBrowser"))

const pageSize = 20

const IndexPage: React.FC = () => {
  const [offset, setOffset] = useState<number>(0)
  const currentDate = new Date()
  const lastDate = new Date(currentDate)
  lastDate.setDate(lastDate.getDate() - (offset * pageSize))
  const dateStart = new Date(lastDate)
  const [apiKey, setApiKey] = useState<string | undefined>(process.env.NASA_API_KEY || useStore(APIStore).APIKey || undefined) //Switch to context
  const [showPopup, setShowPopup] = useState<boolean>(apiKey === undefined || apiKey === "" || apiKey === "undefined")
  dateStart.setDate(dateStart.getDate() - pageSize)
  return (
    <Layout extraContent={apiKey !== undefined && (<button onClick={() => {
      setShowPopup(true)
    }}>Logout</button>)}>
      <Seo title="Gallery" />
      {(apiKey === undefined || showPopup) && <APIKeySetter setApiKey={(key) => {
        setApiKey(key)
        APIStore.setState({ APIKey: key })
      }} apiKey={apiKey || ""} exit={() => {
        setShowPopup(false)
      }} />}
      {apiKey !== undefined && (
        <>
          <GalleryBrowser dateEnd={lastDate} dateStart={dateStart} apiKey={apiKey || ""}>
          </GalleryBrowser>
          <div className={"leftRight"}>
            <div>{offset >= 1 && (<button onClick={() => {
                setOffset(offset - 1)
              }}>Previous Page</button>
            )}
            </div>
            <div>
              <button onClick={() => {
                setOffset(offset + 1)
                document.body.scrollTop = document.documentElement.scrollTop = 0
              }}>Next Page
              </button>
            </div>
          </div>
          <div style={{ marginBottom: "150px" }} />
        </>
      )}
    </Layout>
  )
}

export default IndexPage
