import React, { useState } from "react"
import CameraInfo from "../objects/CameraInfo"
import RoverInfo from "../objects/RoverInfo"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useResizeDetector } from "react-resize-detector"
import { AnimatePresence, motion } from "framer-motion"

interface RoverImageViewProps {
  title: string;
  imageURL: string;
  explanation: string;
  cameraInfo: CameraInfo;
  roverInfo: RoverInfo;
}

interface ImageOfTheDayProps {
  title: string;
  imageURL: string;
  imageURLHD: string;
  explanation: string;
  date: string;
  expand?: boolean;
  contentType: string;
  isVisible?: boolean;
}

const openCloseVars = {
  open: { opacity: 1, height: "min-content", scale: 1 },
  closed: { scale: 1, opacity: 0, height: 0 }
}

const ImageView: React.FC<React.PropsWithChildren<ImageOfTheDayProps>> = ({
                                                                            title,
                                                                            imageURL,
                                                                            imageURLHD,
                                                                            explanation,
                                                                            date,
                                                                            expand,
                                                                            contentType,
                                                                            isVisible
                                                                          }) => {
  const { width, height, ref } = useResizeDetector()
  const [expanded, setExpanded] = useState(expand)
  const variants = {
    visible: {opacity: 1, scale: 1},
    invisible: {opacity: 0.6, scale: 1},
  }
  return (
    <AnimatePresence>
        <motion.div ref={ref} animate={isVisible ? 'visible' : 'invisible'} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          {contentType === "image" && (<LazyLoadImage alt={title} src={imageURL} width={width} effect={"blur"} />)}
          {contentType === "video" && (<iframe src={imageURL} width={width} height={(width || 1280) / 16 * 9} />)}
          {contentType !== "image" && contentType !== "video" && (
            <code className={"error"}>Invalid media type: {contentType}</code>)}
          <motion.div initial={{ backdropFilter: "blur(0px)", scale: 0 }}
                      animate={{ backdropFilter: "blur(10px)", scale: 1 }}
                      style={{ position: "sticky", bottom: "85px" }}>
            <motion.h1 animate={isVisible ? 'visible' : 'invisible'} onClick={() => setExpanded(!expanded)}
             className={'imageCap'}>{title}</motion.h1>
            <h3 className={"imageCap"}>{date}</h3>

          </motion.div>

            <motion.div initial={{opacity: 0.6}} animate={(isVisible || ((height !== undefined ? height : 400) > window.innerHeight - 100)) ? 'visible' : 'invisible'} variants={variants}>
              <motion.div initial={{opacity: 0.6}} animate={expanded ? 'open' : 'closed'} variants={openCloseVars}>
              <p>{explanation}</p>
              </motion.div>
            </motion.div>
        </motion.div>
    </AnimatePresence>

  )
}

ImageView.defaultProps = { expand: false, title: "Image Entry", isVisible: true }

export default ImageView
