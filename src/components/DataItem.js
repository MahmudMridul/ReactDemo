import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardImg, CardTitle, CardText, Col, Button, ButtonGroup } from 'reactstrap';
import { useNavigate } from 'react-router';

export default function DataItem(props) {

    const navigate = useNavigate();

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

                <CardBody>
                    <ButtonGroup>
                        <Button
                            color="primary"
                            outline
                            onClick={( ) => navigate('/edit', {
                                    state : {
                                        data: props.obj
                                    }
                                }
                            )}
                        >
                            Edit
                        </Button>

                        <Button
                            color="danger"
                            outline
                            onClick={( ) => navigate('/delete')}
                            
                        >
                            Delete
                        </Button>
                    </ButtonGroup>
                    
                </CardBody>
            </Card>
        </Col>
    );
}
