import React, { createContext, useState } from 'react'
import runChat from "../Config/Gemini"
 export const Contex = createContext();
 const ContextProvider=(props)=>{

        const [input ,setInput]=useState("");
        const [recentPrompt,setRecentPrompt]=useState("");
        const [prevPrompt,setPrevPrompt]=useState([]);
        const [showResult,setResult]=useState(false);
        const [loading,setLoading]=useState(false);
        const [resultData,setResultData]=useState("");
       


const onSent=async(prompt)=>{
    await runChat(prompt);
}
onSent("what is react js");

const contextValue = {

        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        setResult,
        loading,
        setLoading,
        resultData,
        setResultData
}
return (

    <Contex.Provider value={contextValue}>
        {props.children}
    </Contex.Provider>
)

 }
export  default ContextProvider;