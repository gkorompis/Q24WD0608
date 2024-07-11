import "./HomeScreen2.css";
import globalStates from "../../utils/global";
import { useContext } from "react";

const HomeScreen2 = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;
    
    const dataProductValue = [
        {
            title: "PRODUCT VALUE #1",
            description: "Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page."
        },
        {
            title: "PRODUCT VALUE #2",
            description: "Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page."
        },
        {
            title: "PRODUCT VALUE #3",
            description: "Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on this page."
        }
    ]
    return(
        <div className={`${windowWidthClass}-home-screen2`}> 
            <div className="screen-title">
                <h1>Why Choose Us?</h1>
            </div>  
            <div className="screen-content">
                {
                    dataProductValue.map((value:any, index:any)=>{
                        const {title, description} = value;

                        return(
                            <div key={index} className="grid-item">
                                <div className="card">
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default HomeScreen2;