import { Card } from "react-bootstrap";
import './homeCard.css';
import IconStar from "../../icons/IconStar"
import logo from "../../icons/logo.svg"

export const HomeCard = ({title, icon, link, bgColor, textColor, text}: IHomeCard) => {
    return (
        <Card id={title + "navCard"} className="navCard" style={{backgroundColor: bgColor }}>
            <Card.Body>
                <Card.Title style={{color: textColor}}>{title}</Card.Title>
                <br></br>
                <i style={{ color: textColor}}>
                    <IconStar></IconStar>
                </i>
                <Card.Text style={{color: textColor}}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export interface IHomeCard {
    title: string;
    icon: any;
    link: any;
    bgColor: string;
    textColor: string;
    text: string;
}