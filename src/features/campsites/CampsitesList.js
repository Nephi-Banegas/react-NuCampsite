
import CampsiteCard from "./CampsiteCard";
import {Col, Row} from 'reactstrap';
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
        <Row className="ms-auto">
            {campsites.map((cs, index) => (
                <Col 
                    md="5" 
                    className="m-4" 
                    key={CampsiteCard.id}
                    
                    >
                    
                    <CampsiteCard campsite={cs} key={index}/>
                </Col>
            ))}
        </Row>
    );
};

export default CampsitesList;