import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardImg, CardTitle, CardText, Col } from 'reactstrap';

export default function DataItem(props) {
    return (
        <Col lg='4'>

            <Card className="my-2">
                <CardImg
                    alt={props.obj.title}
                    src={props.obj.imageUrl}
                    style={{
                        height: 180
                    }}
                    top
                    width="100%"
                />

                <CardBody>
                    <CardTitle tag="h5">
                        {props.obj.title}
                    </CardTitle>

                    <CardText>
                        {props.obj.description}
                    </CardText>
    
                </CardBody>
            </Card>

        </Col>
    );
}
