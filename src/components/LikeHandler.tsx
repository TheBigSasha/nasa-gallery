import React, { useState } from "react"
import axios from "axios"
import Heart from "react-animated-heart"
import { serverURL } from "../utility/APIContext"

interface LikeHandlerProps {
  apiKey: string;
  imageID: string;
}

const LikeHandler: React.FC<LikeHandlerProps> = ({ apiKey, imageID }) => {
  //API Postman Docs: https://www.getpostman.com/collections/1703c1056154b3a622f4

  const [hasLiked, setHasLiked] = useState<boolean>(false)
  const [likes, setLikes] = useState<number>(0)
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [likers, setLikers] = useState(undefined)

  axios(
    {
      method: "get",
      url: `${serverURL}/users/${apiKey}/likes/?postID=${imageID}`,
      headers: {}
    })
    .then(function(response) {
      if (response.data !== hasLiked) {
        setHasLiked(response.data)
      }
    })
    .catch(function(error) {
      return (<div>Error with likes {error}</div>)
    })

  axios({
    method: "get",
    url: `${serverURL}/posts/${imageID}/likes/`,
    headers: {}
  })
    .then(function(response) {
      if (response.data !== likes) {
        setLikes(response.data)
      }
    })
    .catch(function(error) {
      return (<div>Error with likes {error}</div>)
    })

  axios({
    method: "get",
    url: `${serverURL}/posts/${imageID}/likes/users/`,
    headers: {}
  })
    .then(function(response) {
      setLikers(response.data)
    })
    .catch(function(error) {
      console.log(error)
    })


  return (<div>
    <div className={"leftRight centerChildren"}
         style={{ width: "min-content", position: "absolute", right: "-25px", top: "-25px" }}>
      <h2 style={{ display: "inline", margin: 0 }} className={"Magic"}
          onClick={() => setShowPopup(!showPopup)}>{likes}</h2>
      {(showPopup && likers !== undefined) && (
        <div className={"fullscreen"} style={{ top: 0, height: "100vh" }}>
          <div className={"card"}>
            <h1>Likes for {imageID}</h1>
            <ul>
              {(likers || []).map((liker) => (
                <li>
                  {liker}
                </li>
              ))}
            </ul>
            <button onClick={() => {
              setShowPopup(false)
            }}>Close
            </button>
          </div>
        </div>)}
      <Heart style={{ margin: -50, display: "inline" }} isClick={hasLiked} onClick={() => {
        axios({
          method: "post",
          url: `${serverURL}/posts/${imageID}/likes/?userID=${apiKey}`,
          headers: {}
        }).then(function(response) {
          setHasLiked(!hasLiked)
        })
          .catch(function(error) {
          })

      }} /></div>
    <div style={{ position: "absolute", right: 0, bottom: 0 }}>
      {likers !== undefined && likers.length >= 1 && (
        <p onClick={() => setShowPopup(!showPopup)}>Liked by {likers.slice(0, 1).map((liker) => (
          <strong style={{ margin: 0, display: "inline", marginInline: "5px" }}
                  className={"likerName"}>{liker}</strong>))} {likers.length > 1 && (
          <p style={{ margin: 0, display: "inline" }}> & {likers.length - 1} more</p>)}</p>)}
    </div>
  </div>)
}

export default LikeHandler;
