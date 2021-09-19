import React, { useState } from "react"
import CameraInfo from "../objects/CameraInfo"
import RoverInfo from "../objects/RoverInfo"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useResizeDetector } from "react-resize-detector";
import { motion } from "framer-motion";

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
    expand: boolean;
}

const variants = {
    open: { opacity: 1, height: 'min-content' },
    closed: { opacity: 0, height: 0},
  }  

const ImageView: React.FC<React.PropsWithChildren<ImageOfTheDayProps>> = ({title,imageURL, imageURLHD, explanation,date, expand}) => {
    const { width, height, ref } = useResizeDetector();
    const [expanded, setExpanded] = useState(expand);

    return (<motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale:0}}>
        <LazyLoadImage alt={title} src={imageURLHD} width={width}/>

        <h1             onClick={() => setExpanded(!expanded)}
>{title}</h1>
        <h3>{date}</h3>
        <motion.div animate={expanded ? "open" : "closed"} variants={variants}>
            <p>{explanation}</p>
        </motion.div>


    </motion.div>)
}

ImageView.defaultProps={expand: false, title: "Image Entry"};

export default ImageView;