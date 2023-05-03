import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [thisChackBox, setThisChackBox] = useState(false);

    const signUpSubnitHendle = async (e) => {
        e.preventDefault()

        try {

            if (password !== confirmPassword) {
                alert("password not match")
            } else if (thisChackBox === false) {
                alert("Please chack in the box.")
            }

            const signUpList = {
                    name : username,
                    email : email,
                    password : password,
                    confirmPassword : confirmPassword,
                    thisChackBox : thisChackBox
                };

            const result = await axios.post("http://localhost:9090/api/users/",signUpList)

            // console.log(result, result.status)

            if (result.status === 201){

                alert("success signup")

                navigate("/login")

            }

            console.log("***************", result)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6} className={"mt-5"}>
                    <h1>SIGN UP</h1>
                    <Form onSubmit={signUpSubnitHendle}>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check
                                type="checkbox"
                                label="Check me out"
                                value={thisChackBox}
                                onChange={e => setThisChackBox(e.target.checked)}
                            />
                        </Form.Group>


                        <Button variant="dark" type="submit">
                            Submit
                        </Button>


                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;