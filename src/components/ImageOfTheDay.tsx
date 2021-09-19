import axios from "axios";
import React, { useState } from "react";
import ImageView from "./imageview";
import { SolarSystemLoading } from 'react-loadingg';


interface ImageOfTheDayProps{
    date: string;
}

const ImageOfTheDay: React.FC<ImageOfTheDayProps> = ({date}) => {
     const [imageResponse, setImageResponse] = useState(undefined);
          
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
    return (<ImageView title={imageResponse.title} imageURL={imageResponse.url} imageURLHD={imageResponse.hdurl} explanation={imageResponse.explanation} date={imageResponse.date} expand={false} >
    </ImageView>);
    }else{
        return (<SolarSystemLoading/>)
    }
}

export default ImageOfTheDay;