import { Card } from "react-bootstrap";
import logo from "../logo.svg"
export const HomeCard = () => {
    return (
        <Card style={{ width: '18rem', borderStyle: 'dotted' }}>
            <Card.Img variant="top" src="../logo.svg" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export interface IHomeCard {
    title: string;
    img: any;
    link: any;
}