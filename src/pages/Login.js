import Base from "../components/Base";
import {Card, CardHeader, Col, Container, Form, FormGroup, Input, Row,Button, CardBody} from "reactstrap";
const Login=()=>{
    return(
       <Base>
        
        <Container>

        <Row className="mt-4">
        <Col sm={{size:6,offset:3}} >
            
        <Card color="secondary">

        <CardHeader>

        <h3>Login Here</h3>
        </CardHeader>
<CardBody>
        <Form>
         {/* Email Field*/}

            <FormGroup>
            <Input type="text"
            placeholder="Enter Email"
            id="email"></Input>
            </FormGroup>
            </Form>


            <Form>
         {/* Password Field*/}

            <FormGroup>
            <Input type="password"
            placeholder="Enter Password"
            id="password"></Input>
            </FormGroup>
            </Form>

            <Container className="text-center">

            <Button color="dark">Login</Button>

            </Container>

            </CardBody>
        </Card>
        </Col>
        </Row>
    </Container>
       </Base>
    );
};
export default Login;