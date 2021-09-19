import axios from "axios";
import React, { useState } from "react";
import ImageView from "./imageview";
import { SolarSystemLoading } from 'react-loadingg';
import { motion } from "framer-motion";


interface ImageOfTheDayProps{
    date: string;
}

const ImageOfTheDay: React.FC<ImageOfTheDayProps> = ({date}) => {
     const [imageResponse, setImageResponse] = useState(undefined);
     console.log(`the test is  ${process.env.ENV_TEST}`);
      axios({
        method: 'get',
        url: `https://api.nasa.gov/planetary/apod?date=${date}&start_date=&end_date=&count=&thumbs&api_key=${process.env.NASA_API_KEY}`,
        headers: { }
      })
      .then(function (response) {
        setImageResponse(response.data);
      })
      .catch(function (error) {
          console.log(error);
        return(<p className={'Error'}>{error}
        </p>);
      }).finally(function () {
      });
       
    if(imageResponse !== undefined){
    return (<ImageView title={imageResponse.title} imageURL={imageResponse.url} imageURLHD={imageResponse.hdurl} explanation={imageResponse.explanation} date={imageResponse.date} expand={true} >
    </ImageView>);
    }else{
        return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale:0}} className={'center'}>
            <SolarSystemLoading/>
            <h2>Loading</h2>
            <h3>{date}</h3>
        </motion.div>)
    }
}

export default ImageOfTheDay;