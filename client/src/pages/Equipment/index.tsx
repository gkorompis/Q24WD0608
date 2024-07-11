import { useContext } from "react";
import globalStates from "../../utils/global"
import { EquipmentScreen1, EquipmentScreen2, EquipmentScreen3, HomeScreen1, HomeScreen2 } from "../../containers";
import { AppNavbar } from "../../components";
// import { HomeScreen1 } from "../../containers";
// import { AppNavbar } from "../../components";

const Equipment = () =>{
    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    return(
        <div>
            <AppNavbar/>
            <EquipmentScreen1/>
            <EquipmentScreen2/>
            <EquipmentScreen3/>
        </div>
    )
};

export default Equipment;