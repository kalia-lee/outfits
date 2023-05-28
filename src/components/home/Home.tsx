import { HomeCard, IHomeCard } from "./HomeCard"
import "./home.css"

export const Home = () => {
    const test: IHomeCard = { title: "Test", img: "Test", link: "Test"};
    return (
        <div className="main">
            <div className="titleIntro">
                <h1>Outfits Orgnizer</h1>
                <p> This is where I will put my home page!</p>
            </div>
            <div className="navCards">
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
                <HomeCard></HomeCard>
            </div>
        </div>
    )
}
