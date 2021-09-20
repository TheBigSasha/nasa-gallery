import React, { useState } from "react";
import { SolarSystemLoading } from 'react-loadingg';
import loadable from "@loadable/component";

interface ImageOfTheDayProps{
    dateStart: Date;
    dateEnd: Date;
    apiKey: string;
}

const ImageOfTheDay = loadable(() => import('./ImageOfTheDay'));

const GalleryBrowser: React.FC<ImageOfTheDayProps> = ({dateStart, dateEnd,apiKey}) => {
    const dates: Date[] = [];
    let currentDate = dateEnd;
    while(currentDate >= dateStart){
        dates.push(new Date(currentDate));
        currentDate = new Date(currentDate);
        currentDate.setDate(currentDate.getDate() - 1);
    }
    return (<div>
        {dates.map((date) => (
            <ImageOfTheDay date={date} apiKey={apiKey} fallback={<SolarSystemLoading />} />
        ))}
    </div>)
}

export default GalleryBrowser;
