import { Card } from "react-bootstrap";
import './homeCard.css';
import logo from '../../logo.svg';

export const HomeCard = ({title, img, link, bgColor, textColor, text}: IHomeCard) => {
    return (
        <Card id={title + "navCard"} className="navCard" style={{backgroundColor: bgColor }}>
            <Card.Body>
                <Card.Title style={{color: textColor}}>{title}</Card.Title>
                <Card.Img style={{height: '10vmin'}}variant="top" src={logo} />
                <Card.Text style={{color: textColor}}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export interface IHomeCard {
    title: string;
    img: any;
    link: any;
    bgColor: string;
    textColor: string;
    text: string;
}