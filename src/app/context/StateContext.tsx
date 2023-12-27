'use client'
import React, { createContext, useContext, useState } from "react";
// import toast, { Toast } from "react-hot-toast";
// import product from "../../../sanity/schemas/project-schema";/



type StateContextprops = {
    children: React.ReactNode;


}
type props = {
    translate: boolean;
    setTranslate: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Context = createContext < props | null > (null);



export const StateContext = ({ children }: StateContextprops) => {
    const [translate, setTranslate] = useState(false);
 

  
    return (
        <Context.Provider
            value={{
                translate,
                setTranslate


            }}>
            {children}
        </Context.Provider>
    )



}

export const useStateContext = () => {
    const cont = useContext(Context);
    if (!cont) {
        throw new Error('fuck u')
    }
    return cont;
}