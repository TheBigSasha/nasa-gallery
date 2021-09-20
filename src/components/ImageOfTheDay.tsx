import axios from "axios"
import React, { useState } from "react"
import ImageView from "./imageview"
import { SolarSystemLoading } from "react-loadingg"
import { motion } from "framer-motion"
import TrackVisibility from "react-on-screen"

interface ImageOfTheDayProps {
  date: Date;
}

const ImageOfTheDay: React.FC<ImageOfTheDayProps> = ({ date }) => {
  const [imageResponse, setImageResponse] = useState(undefined)
  const [error, setError] = useState("")
  const procDate = date.toLocaleDateString("fr-ca", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).replace(new RegExp("/", "g"), "-")
  if ((imageResponse === undefined && error === "") || (imageResponse === undefined ? "" : imageResponse.date) !== procDate) {
    axios({
      method: "get",
      url: `https://api.nasa.gov/planetary/apod?date=${procDate}&start_date=&end_date=&count=&thumbs&api_key=${process.env.NASA_API_KEY}`,
      headers: {}
    })
      .then(function(response) {
        setImageResponse(response.data)
      })
      .catch(function(error) {
        setError(error)
      }).finally(function() {
    })
  }

  if (imageResponse !== undefined) {
    return (
      <TrackVisibility>
        <ImageView title={imageResponse.title} imageURL={imageResponse.url} imageURLHD={imageResponse.hdurl}
                       explanation={imageResponse.explanation} date={imageResponse.date} expand={true}
                       contentType={imageResponse.media_type}>
    </ImageView>
        </TrackVisibility>)
  } else {
    return (
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className={"center"}>
        <SolarSystemLoading />
        <h2>{error !== "" ? "Loading" : error}</h2>
        <h3>{date.toLocaleDateString()}</h3>
      </motion.div>)
  }
}

export default ImageOfTheDay
