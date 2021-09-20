import React from "react"

interface LikeHandlerProps {
  apiKey: string;
  imageID: string;
}

const LikeHandler: React.FC<LikeHandlerProps> = ({apiKey, imageID}) => {
  
  return(<div>Liked!</div>);
}

export default LikeHandler;
