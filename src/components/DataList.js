import DataItem from "./DataItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from "reactstrap";

export default function DataList(props) {
    return (
        <Row>
            {props.objList.map(obj => {
                return (
                    <DataItem obj={obj}/>
                );
            })}
        </Row>
        
    );
}
