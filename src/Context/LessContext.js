import { createContext, useContext, useReducer } from "react";

const LessContext = createContext()

export const ChangeContext = ({initialState,reducer,children}) => {
    <LessContext.Provider value={useReducer(reducer,initialState)}>
       {children}
    </LessContext.Provider>
}


export const useLessContext = () => useContext(LessContext);