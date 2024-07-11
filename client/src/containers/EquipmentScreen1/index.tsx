import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./EquipmentScreen1.css";
import { BannerCoffee2, ImgHowItWorks } from "../../assets";

const EquipmentScreen1 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenSubscription1Ref = useRef(null) as any;
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenHome1 = screenSubscription1Ref.current.getBoundingClientRect();
            const top = screenHome1.top;
            const bottom = screenHome1.bottom;
            const offset = globalContext && globalContext.windowHeight;
            setScreensOffset((prev:any)=>{return {...prev, 
                isOffsetScreenHome1: false, bottom, offset, top
            }});
            if(top < (-1*0.005*offset) ){
                setScreensOffset((prev:any)=>{return {...prev, bottom, offset, top,
                    isOffsetScreenHome1: true,
                }});
            };
        
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [globalContext]);

    
    return(
        <div ref={screenSubscription1Ref} className={`${windowWidthClass}-equipment-screen1`}>
            <div className="wrapper">
                <div className="screen-title">
                    <h1>EQUIPMENTS</h1>
                </div>
            </div>
        </div>
    )
};

export default EquipmentScreen1;