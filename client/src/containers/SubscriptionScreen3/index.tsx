import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./SubscriptionScreen3.css";
import { BannerCoffee1, BannerCoffee2, ImgHowItWorks } from "../../assets";

const SubscriptionScreen3 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    

    const dataProduct = [
        {
            name: "Product",
            imgSrc: BannerCoffee1
        },
        {
            name: "Product",
            imgSrc: BannerCoffee1
        },
        {
            name: "Product",
            imgSrc: BannerCoffee1
        }
    ]
    
    return(
        <div className={`${windowWidthClass}-subscription-screen3`}>
            <div className="wrapper">
                <div className="screen-title">
                    <h1>Specialty Beans</h1>
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

export default SubscriptionScreen3;