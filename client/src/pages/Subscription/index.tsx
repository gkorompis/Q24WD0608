import { useContext } from "react";
import globalStates from "../../utils/global"
import { HomeScreen1, HomeScreen2, SubscriptionScreen1, SubscriptionScreen2, SubscriptionScreen3, SubscriptionScreen4 } from "../../containers";
import { AppNavbar } from "../../components";
// import { HomeScreen1 } from "../../containers";
// import { AppNavbar } from "../../components";

const Subscription = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <div>
            <AppNavbar/>
            <SubscriptionScreen1/>
            <SubscriptionScreen2/>
            <SubscriptionScreen3/>
            <SubscriptionScreen4/>
        </div>
    )
};

export default Subscription;