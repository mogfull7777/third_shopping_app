import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
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

            const signUpList = [
                {
                    username : username,
                    Email : Email,
                    password : password,
                    confirmPassword : confirmPassword,
                    thisChackBox : thisChackBox
                }
            ];

            console.log(signUpList)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <Row>
                <Col>
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
                                value={Email}
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