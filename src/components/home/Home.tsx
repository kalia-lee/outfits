import { HomeCard, IHomeCard } from "./HomeCard"
import "./home.css"

export const Home = () => {
    const navCardConfig: IHomeCard[] = [
        { title: "Randomizer", text: "Randomize an outfit!", img: "", link: "Test", bgColor: "#ff9258", textColor: "#d6e8f7"},
        { title: "Closet", text: "View or Update your closet!", img: "Test", link: "Test", bgColor: "#ccc2e5", textColor: "#f1dfb6"},
        { title: "About", text: "The inspirations and works", img: "Test", link: "Test", bgColor: "#F1DFB6", textColor: "#ef5f1d"},
        { title: "Coming...", text: "", img: "Test", link: "Test", bgColor: "#bfdf8b", textColor: "#526130"},
        { title: "Coming...", text: "", img: "Test", link: "Test", bgColor: "#d6e8f7", textColor: "#caa9bd"}       
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
