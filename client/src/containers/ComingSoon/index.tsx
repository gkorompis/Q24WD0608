import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./ComingSoon.css";
import { ImgComingSoon1 } from "../../assets";

const ComingSoon = ({title}:any) =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screenHome1Ref = useRef(null) as any;
    // console.log({})
    useEffect(()=>{
        const handleScroll =()=>{
            const setScreensOffset = globalContext && globalContext.setScreensOffset;
            const screenHome1 = screenHome1Ref.current.getBoundingClientRect();
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
    }, [globalContext])
    
    return(
        <div ref={screenHome1Ref} className={`${windowWidthClass}-coming-soon`}>
            <div className="wrapper">
                <div className="tagline">
                    <h1>{title}</h1>
                </div>
                <div className="actions">
                    {/* <h1>test</h1> */}
                    <img alt="coffee-logo" src={ImgComingSoon1} />
                </div>
            </div>
        </div>
    )
};

export default ComingSoon;