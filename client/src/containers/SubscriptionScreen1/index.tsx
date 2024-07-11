import { useContext, useEffect, useRef } from "react";
import globalStates from "../../utils/global";
import "./SubscriptionScreen1.css";
import { BannerCoffee2, ImgHowItWorks } from "../../assets";

const SubscriptionScreen1 = () =>{

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

    const dataHowItWorks = [
        {
            paragraph: "Coffee beans undergo a fascinating journey from plant to cup. It all begins with the coffee plant, typically cultivated in tropical climates, where the beans grow inside cherries. Once harvested, the cherries are processed to extract the beans, which are then dried and hulled. These raw beans, known as green coffee, are then roasted at various temperatures and durations to develop their unique flavors and aromas. Roasting transforms the chemical and physical properties of the beans, releasing oils and creating the rich, complex profiles that coffee enthusiasts cherish. After roasting, the beans are ground to the desired coarseness depending on the brewing method, whether it's a fine grind for espresso or a coarse grind for French press."
        },
        // {
        //     paragraph: "Brewing coffee involves extracting the soluble compounds from the ground beans, a process that depends heavily on water temperature, grind size, and brewing time. Hot water is typically used to dissolve these compounds, creating the beverage we know as coffee. As the water passes through the coffee grounds, it extracts oils, acids, and caffeine, which contribute to the flavor, aroma, and stimulating effects of the drink. Different brewing methods, such as drip coffee makers, espresso machines, and pour-over cones, highlight various aspects of the coffee's character, from its acidity and sweetness to its body and aftertaste. The entire process, from bean to brew, showcases the intricate and rewarding nature of coffee production, making it a beloved beverage worldwide."
        // }
    ]
    
    return(
        <div ref={screenSubscription1Ref} className={`${windowWidthClass}-subscription-screen1`}>
            <div className="wrapper">
                <div className="screen-title">
                    <h1>How It Works?</h1>
                </div>
                <div className="screen-content">
                    <section className="text-description">
                        {
                            dataHowItWorks.map((text:any, index:any)=>{
                                const {paragraph} = text;
                                return(
                                    <p key={index}>{paragraph}</p>
                                )
                            })
                        }
                    </section>
                    <section className="image">
                        <div className="frame">
                            <img alt="coffe brew" src={ImgHowItWorks} />
                        </div>
                        
                    </section>
                    
                </div>
            </div>
        </div>
    )
};

export default SubscriptionScreen1;