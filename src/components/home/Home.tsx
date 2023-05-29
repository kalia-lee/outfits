import { HomeCard, IHomeCard } from "./HomeCard"
import "./home.css"
import IconStar from "/icons/IconStar.svg";
import IconSun from "/icons/IconSun.svg";

export const Home = () => {
    const navCardConfig: IHomeCard[] = [
        { title: "Randomizer", text: "Randomize an outfit!", icon: "../../icons/IconStar.svg", link: "Test", bgColor: "#ff9258", textColor: "#d6e8f7"},
        { title: "Closet", text: "View or Update your closet!", icon: "../..//icons/IconSun.svg", link: "Test", bgColor: "#ccc2e5", textColor: "#FFF8ED"},
        { title: "About", text: "", icon: "../../icons/logo.svg", link: "Test", bgColor: "#F1DFB6", textColor: "#F17A40"},
        { title: "Coming...", text: "", icon: "../../icons/logo.svg", link: "Test", bgColor: "#bfdf8b", textColor: "#526130"},
        { title: "Coming...", text: "", icon: "../../icons/logo.svg", link: "Test", bgColor: "#d6e8f7", textColor: "#caa9bd"}       
    ]
    return (
        <div className="main">
            <div className="titleIntro">
                <h1>Outfits Orgnizer</h1>
                <p>Creating new outfits one click at a time!</p>
                
            </div>
            <div className="navCards">
                {navCardConfig.map(card => {
                    return (
                        <HomeCard {...card}></HomeCard>
                    );
                })}
            </div>
        </div>
    )
}
