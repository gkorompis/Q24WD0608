import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./EquipmentScreen3.css";
import { EquipmentGiftSet } from "../../assets";

const EquipmentScreen3 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    

    const dataProduct = [
        {
            name: "Product",
            imgSrc: EquipmentGiftSet
        },
        {
            name: "Product",
            imgSrc: EquipmentGiftSet
        },
        {
            name: "Product",
            imgSrc: EquipmentGiftSet
        }
    ]
    
    return(
        <div className={`${windowWidthClass}-equipment-screen3`}>
            <div className="wrapper">
                <div className="screen-title">
                    <h1>Gift Set</h1>
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

export default EquipmentScreen3;