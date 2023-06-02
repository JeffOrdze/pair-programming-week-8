import "./OurKitties.scss";
import KittyCard from "../../Components/KittyCard/KittyCard";


const OurKitties = ( {click, confirmation} ) => {
    console.log(confirmation)
    return (
        <>
        <h2 className="our-kitties__heading sub-header">Our Kitties</h2>
        <h4 className="our-kitties__confirmation" style={{display :confirmation ? "block" : "none"}}> Your kitty has been added to the cart!</h4>
        <div className="our-kitties">
            <KittyCard click={click}/>
        </div>
    </>
    )
}

export default OurKitties;