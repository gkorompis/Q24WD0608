import "./FloatingIcon.css";
import globalStates from '../../utils/global';
import { useContext } from "react";
import { iconFloatingWa } from "../../assets";

const FloatingIcons = () =>{

    const context = globalStates && globalStates.globalContext;
    const globalContext:any = useContext(context);
    const windowWidthClass = globalContext && globalContext.windowWidthClass;


    const handleEmail = (destination:string) =>{
        const email = destination || 'adminmarketing@naturalhoodspices.com';
        const subject = 'More information about NaturalHoodSpices';
        const body = 'Hi, I want to know more about your products. Thank you.';

        // Create the mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Create a temporary anchor element to trigger the mail client
        const tempLink = document.createElement('a');
        tempLink.href = mailtoLink;
        tempLink.click();
    }
    const openLinkHandler = (link:any) =>{
        // console.log("link", link)
        window.open(link, '_blank');
    }

    const openWa = (wa:string)=>{
        const waNumber = wa || '628123456789';
        openLinkHandler(`https://wa.me/${waNumber}?text=Hi,%20I'd%20like%20to%20know%20more%20%20about%20this%20product.%20Thank%20you.%20`)
    }

    return (
        <div className={`${windowWidthClass}-floating-icon`}>
            <img src={iconFloatingWa} alt="green whatsapp icon"
                onClick={()=>openWa('')}
            />
        </div>
    )
}

export default FloatingIcons;