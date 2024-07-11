import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./EquipmentScreen2.css";
import { EquipmentManual } from "../../assets";

const EquipmentScreen1 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    

    const dataProduct = [
        {
            name: "Product",
            imgSrc: EquipmentManual
        },
        {
            name: "Product",
            imgSrc: EquipmentManual
        },
        {
            name: "Product",
            imgSrc: EquipmentManual
        }
    ]
    
    return(
        <div className={`${windowWidthClass}-equipment-screen2`}>
            <div className="wrapper">
                <div className="screen-title">
                    <h1>Manual Brew</h1>
                </div>
                <div className="screen-content">
                   <div className="conveyor">
                        {dataProduct.map((product:any, index:any)=>{
                            const {name, imgSrc} = product
                            return(
                                <div key={index} className="grid-item">
                                    <div className="frame">
                                        <img src={imgSrc} />
                                    </div>
                                    <h2>{name}</h2>
                                </div>
                            )
                        })}
                   </div>
                </div>
            </div>
        </div>
    )
};

export default EquipmentScreen1;