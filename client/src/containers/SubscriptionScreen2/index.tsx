import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./SubscriptionScreen2.css";
import { BannerCoffee1, ImgHowItWorks } from "../../assets";

const SubscriptionScreen2 = () =>{

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
        <div className={`${windowWidthClass}-subscription-screen2`}>
            <div className="wrapper">
                <div className="screen-title">
                    <h1>Custom Blend Beans</h1>
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

export default SubscriptionScreen2;