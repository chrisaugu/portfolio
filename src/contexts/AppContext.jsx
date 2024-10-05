import { createContext } from "react";
import { ThemeProvider } from "./ThemeContext";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

export default function AppProvider({children}) {
    return (
        <GlobalContext.Provider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </GlobalContext.Provider>
    )
} 
