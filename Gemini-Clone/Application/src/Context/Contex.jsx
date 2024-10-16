import React, { createContext } from 'react'
import runChat from "../Config/Gemini"
 export const Contex = createContext();
 const ContextProvider=(props)=>{

const onSent=async(prompt)=>{
    await runChat(prompt);
}
onSent("what is react ?");

const contextValue = {

}
return (

    <Contex.Provider value={contextValue}>
        {props.children}
    </Contex.Provider>
)

 }
export  default ContextProvider;