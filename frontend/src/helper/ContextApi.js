import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUrls } from './apiCalls';

const BASEContxt = createContext(null);

const ContextApi = ({children}) => {

    const [url, setUrl] = useState([])
    const getAllUrls = async () => {
        try {
            const urlData = await getUrls();
            let result = urlData.data.url;
            setUrl(result)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      getAllUrls()
    }, [])

  return (
    <div>
        <BASEContxt.Provider
           value={{
              url,
              setUrl
           }}
        >
          {children}
        </BASEContxt.Provider>
    </div>
  )
}

export const APPState = () => {
   return useContext(BASEContxt);
}
export default ContextApi