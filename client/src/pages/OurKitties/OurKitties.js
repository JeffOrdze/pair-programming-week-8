import "./OurKitties.scss";
import KittyCard from "../../Components/KittyCard/KittyCard";


const OurKitties = () => {
    return (
        <>
        <h2 className="our-kitties__heading sub-header">Our Kitties</h2>
        <div className="our-kitties">
            <KittyCard/>
        </div>
    </>
    )
}

export default OurKitties;