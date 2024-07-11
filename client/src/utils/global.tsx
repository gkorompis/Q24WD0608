import { createContext } from "react";

// use-context
const GlobalContext = createContext(null);
const globalStates =  {
    globalContext: GlobalContext
};

export default globalStates as any;
