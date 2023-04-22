import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";
import {Col, Row} from 'reactstrap';

const CampsitesList = () => {
    return (
        <Row className="ms-auto">
            {CAMPSITES.map((cs) => (
                <Col md="5" className="m-4" key={CampsiteCard.id}>
                    <CampsiteCard campsite={cs} />
                </Col>
            ))}
        </Row>
    );
};

export default CampsitesList;