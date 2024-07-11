import { useContext, useState } from "react";
import globalStates from "../../utils/global";
import "./AppNavbar.css";
import { IconBurger, IconClose } from "../../assets";
import { useNavigate } from "react-router-dom";

const AppNavbar = ()=>{

    const navigate = useNavigate();

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;

    const screensOffset = globalContext && globalContext.screensOffset;
    const isOffsetScreenHome1 = screensOffset && screensOffset.isOffsetScreenHome1;

    const [isCollapsed, setIsCollapsed ] = useState(false);

    const handleCollapsed=()=>{
        setIsCollapsed(!isCollapsed)
    };

    const handleNavigate = (path:string) =>{
        const route = (path || "");
        navigate(`/${route}`)
    };

    return(
        <>
        <nav className={`${windowWidthClass}-app-navbar
            ${isOffsetScreenHome1 ? "offset-screen-home1": ""}
        `}>
            <div className="anchor-group bar-1">
                
                 {
                    windowWidthClass==="w-mob" ?
                    <>
                        <h1>26 Brew</h1>
                    </> :
                    <>
                       <h1>26 Brew</h1>
                    </>
                }
            </div>
            <div className="anchor-group bar-2">
                {
                    windowWidthClass==="w-mob" ?
                    <>
                        {/* <h1>26 Brew</h1> */}
                    </> :
                    <>
                        <p onClick={()=>handleNavigate("")}>Home</p>
                        <p onClick={()=>handleNavigate("subscription")}>Subscription</p>
                        <p onClick={()=>handleNavigate("equipment")}>Equipment</p>
                        <p onClick={()=>handleNavigate("experience-store")}>Experience Store</p>
                        <p onClick={()=>handleNavigate("blog")}>Blog</p>
                    </>
                }
                
            </div>
            <div className="anchor-group bar-3">
                
                {
                    windowWidthClass==="w-mob" ?
                    <>
                        <img alt="burger icon" src={IconBurger} onClick={handleCollapsed} />
                        
                    </> :
                    <>
                        <h3>GET STARTED</h3>
                    </>
                }
            </div>
        </nav>
                {
                            isCollapsed ?
                            <div className="mob-collapsed-bar">
                                <div className="close-button">
                                    <img alt="close icon" src={IconClose} onClick={handleCollapsed}/>
                                </div>
                                <p onClick={()=>handleNavigate("")}>Home</p>
                                <p onClick={()=>handleNavigate("subscription")}>Subscription</p>
                                <p onClick={()=>handleNavigate("equipment")}>Equipment</p>
                                <p onClick={()=>handleNavigate("experience-store")}>Experience Store</p>
                                <p onClick={()=>handleNavigate("blog")}>Blog</p>
                            </div> : null
                        }
        </>
    )
};

export default AppNavbar;