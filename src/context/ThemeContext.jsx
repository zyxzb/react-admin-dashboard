import { createContext, useReducer  } from "react";
import ThemeReducer from "./ThemeReducer";

const INITIAL_STATE ={
    darkMode: false,
}



export const ThemeContext = createContext();


export function ThemeProvider({children}) {

   const[state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE)

        return(
            <ThemeContext.Provider value={{darkMode:state.darkMode, dispatch}}>
                {children}
            </ThemeContext.Provider>
        )
}