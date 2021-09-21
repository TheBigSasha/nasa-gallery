import React, { useState } from "react"
import axios from "axios"
import { demoAccount, serverURL } from "../utility/APIContext"


interface APIKeySetterProps {
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  exit: () => void;
}

function uploadApiKeyAndName(apiKey: string, name: string) {
  var data = JSON.stringify({
    "APIKey": apiKey,
    "name": name
  })

  axios({
    method: "post",
    url: `${serverURL}/users/`,
    headers: {
      "Content-Type": "application/json"
    },
    data: data
  })
    .then(function(response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function(error) {
      console.log(error)
    })

}

const APIKeySetter: React.FC<APIKeySetterProps> = ({ apiKey, setApiKey, exit }) => {
  const [proposedKey, setProposedKey] = useState<string>(apiKey)
  const [proposedName, setProposedName] = useState<string>("")
  return (<div className={"fullscreen"}>
    <div className={"card"}>
      <h1>Login with API Key</h1>
      <p>In order to provide identity for likes, and to hide API keys, this site asks you use your own NASA API key.</p>
      <input type={"password"} value={proposedKey} onChange={(event) => {
        setProposedKey(event.target.value)
      }} />
      <p>You can get a key at <a href={"https://api.nasa.gov"}>api.nasa.gov</a></p>
      <p style={{ marginBottom: "5px" }}>You can also set a name if you'd like. Otherwise, it will be randomized.</p>
      <input type={"text"} style={{ display: "block", marginTop: 0, marginBottom: "25px" }} value={proposedName}
             onChange={(event) => {
               setProposedName(event.target.value)
             }} />
      <div className={"leftRight"}>
        <div>
          <button onClick={() => {
            setApiKey(proposedKey)
            uploadApiKeyAndName(proposedKey, proposedName)
            exit()
          }}>Submit
          </button>
          <button className={"bad"} style={{ marginLeft: "10px" }} onClick={() => {
            setApiKey(demoAccount)
            exit()

          }}>Don't Login
          </button>
        </div>

        <button onClick={exit} disabled={apiKey === ""}>Cancel</button>
      </div>
    </div>
  </div>)
}

export default APIKeySetter;
