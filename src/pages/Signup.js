import { Button, Card, CardBody, CardHeader, Container, FormGroup, Input } from "reactstrap";
import Base from "../components/Base";
import {Form} from "reactstrap";
import {Row} from "reactstrap";
import {Col} from "reactstrap";


const Signup=()=>{
    return(
       <Base>
       

        <Container>
      <Row className="mt-4">
        <Col  sm={{size:6,offset:3}}>
        <Card color="secondary" >

<CardHeader>

<h3>Fill Information to Register</h3>   


</CardHeader>

<CardBody>



{/* Name filed  */}
<Form>
     <FormGroup> 
        
        <Input
        type="text"
        placeholder="Enter FirstName"
        id="name"
        />
    </FormGroup>
    </Form>
    <Form>
     <FormGroup> 
        
        <Input
        type="text"
        placeholder="Enter LastName"
        id="name"
        />
    </FormGroup>

    </Form>
 {/* Email filed  */}
 <FormGroup> 

<Input
type="email"
placeholder="Enter Email"
id="email"
/>
</FormGroup>

{/* Password filed  */}
<FormGroup> 
<Input
type="password"
placeholder="Enter Password"
id="password"
/>
</FormGroup>

<Container className="text-center">
<Button color="dark">Register </Button>
{/* <Button color="light" type="reset" className="ms-2">Reset</Button> */}
</Container>

</CardBody>
</Card>





        </Col>


      </Row>


        </Container>






       </Base>
    );
};
export default Signup;