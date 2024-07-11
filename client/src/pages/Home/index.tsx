import { useContext } from "react";
import globalStates from "../../utils/global"
import "./Home.css";
import { HomeScreen1, HomeScreen2 } from "../../containers";
import { AppNavbar } from "../../components";
// import { HomeScreen1 } from "../../containers";
// import { AppNavbar } from "../../components";

const Home = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <div>
            <AppNavbar/>
            <HomeScreen1/>
            <HomeScreen2/>
        </div>
    )
};

export default Home;