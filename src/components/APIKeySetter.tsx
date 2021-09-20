import React, { useState } from "react";
import ImageView from "./imageview";
import { SolarSystemLoading } from 'react-loadingg';
import { motion } from "framer-motion";
import loadable from "@loadable/component";


interface APIKeySetterProps{
  apiKey: string;
  setApiKey: (apiKey: string) => void;
  exit: () => void;
}

const APIKeySetter: React.FC<APIKeySetterProps> = ({apiKey, setApiKey, exit}) => {
  const [proposedKey, setProposedKey] = useState<string>(apiKey);
  return (<div className={'fullscreen'}>
    <div className={'card'}>
    <h1>Enter an API Key</h1>
    <p>In order to provide identity for likes, and to hide API keys, this site asks you use your own NASA API key.</p>
    <input type={'password'} value={proposedKey} onChange={(event) => {setProposedKey(event.target.value)}}/>
    <p>You can get a key at <a href={'https://api.nasa.gov'}>api.nasa.gov</a> </p>
    <button onClick={() => {setApiKey(proposedKey); exit();}}>Submit</button>
    <button onClick={exit} disabled={apiKey === ''}>Cancel</button>
    </div>
  </div>)
}

export default APIKeySetter;
