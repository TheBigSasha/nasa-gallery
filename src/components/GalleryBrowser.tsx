import axios from "axios";
import React, { useState } from "react";
import ImageView from "./imageview";
import { SolarSystemLoading } from 'react-loadingg';
import { motion } from "framer-motion";
import loadable from "@loadable/component";


interface ImageOfTheDayProps{
    dateStart: Date;
    dateEnd: Date;
}

const ImageOfTheDay = loadable(() => import('./ImageOfTheDay'));

const GalleryBrowser: React.FC<ImageOfTheDayProps> = ({dateStart, dateEnd}) => {
    const dates: Date[] = [];
    let currentDate = dateEnd;
    while(currentDate >= dateStart){
        dates.push(new Date(currentDate));
        currentDate = new Date(currentDate);
        currentDate.setDate(currentDate.getDate() - 1);
    }
    return (<div>
        {dates.map((date) => (
            <ImageOfTheDay date={date} fallback={<SolarSystemLoading/>} ></ImageOfTheDay>
        ))}
    </div>)
}

export default GalleryBrowser;