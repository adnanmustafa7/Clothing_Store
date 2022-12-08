import { Container, Row, Col } from "react-bootstrap";
const Account = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col lg={6}>
                        <h3>Order History</h3>
                    </Col>
                    <Col lg={6}>
                        <h3>Personal Detail</h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Account;