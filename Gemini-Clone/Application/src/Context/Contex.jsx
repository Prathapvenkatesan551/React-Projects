import React, { createContext, useState } from 'react'
import runChat from "../Config/Gemini"
 export const Contex = createContext();
 const ContextProvider=(props)=>{

        const [input ,setInput]=useState("");
        const [recentPrompt,setRecentPrompt]=useState("");

const onSent=async(prompt)=>{
    await runChat(prompt);
}
onSent("what is react js");

const contextValue = {

}
return (

    <Contex.Provider value={contextValue}>
        {props.children}
    </Contex.Provider>
)

 }
export  default ContextProvider;