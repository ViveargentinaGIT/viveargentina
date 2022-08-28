// import { useDispatch } from "react-redux";
import styles from '../CreateExperience/CreateExperience.module.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function Experiences() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };


    return (
        <div>
            <div className={styles.separator}></div>

            <div className="container">
                <div className="row">

                    <div className="col-md-12">

                        <div className={styles.modalbuttons}>
                            <button type="button" className="btn btn-outline-secondary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="bi bi-node-plus"></i> New Experience
                            </button>
                        </div>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Create a new experience</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">

                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Row className="mb-1">
                                                <Form.Group as={Col} md="12" controlId="validationCustom01">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Ex: Whale Watching"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>

                                            <Row className="mb-1">
                                                <Form.Group as={Col} md="12" controlId="validationCustom02">
                                                    <Form.Label>Subtitle</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Ex: A close encounter with wonderful beings"
                                                    />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Group as={Col} md="4" controlId="validationCustom03">
                                                    <Form.Label>Price $</Form.Label>
                                                    <Form.Control type="number" placeholder="Ex: 7.500" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a price.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustom04">
                                                    <Form.Label>Duration</Form.Label>
                                                    <Form.Control type="text" placeholder="Ex: 3 hours" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid city.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustom05">
                                                    <Form.Label>Stock</Form.Label>
                                                    <Form.Control type="number" placeholder="Ex: 3" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please, enter a number other than 0.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-1">
                                                <Form.Group as={Col} md="12" controlId="validationCustom06">
                                                    <Form.Label>Short Description</Form.Label>
                                                    <Form.Control as="textarea" rows={3} placeholder="Write a description" required />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-1">
                                                <Form.Group as={Col} md="12" controlId="validationCustom07">
                                                    <Form.Label>Long Description</Form.Label>
                                                    <Form.Control as="textarea" rows={7} placeholder="Write a description" required />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-1">
                                                <Form.Group as={Col} md="12" controlId="validationCustom08">
                                                <Form.Label></Form.Label>
                                                    <Form.Select aria-label="Default select example">
                                                        <option selected>Select a category</option>
                                                        <option value="1">Cultural</option>
                                                        <option value="2">Adventure</option>
                                                        <option value="3">Landscape</option>
                                                        <option value="3">Air</option>
                                                        <option value="3">Nautic</option>
                                                        <option value="3">Termas</option>
                                                        <option value="3">Entertainment</option>
                                                        <option value="3">Gastronomic</option>
                                                        <option value="3">Sports</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-1">

                                                <Form.Label><i className="bi bi-card-image"></i> Images</Form.Label>
                                                <Form.Group as={Col} md="4" controlId="validationCustom09">
                                                    <Form.Control type="text" placeholder="Link image 1" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid link.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustom10">
                                                    <Form.Control type="text" placeholder="Link image 2" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid link.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group as={Col} md="4" controlId="validationCustom11">
                                                    <Form.Control type="text" placeholder="Link image 3" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid link.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-1">
                                                <Form.Label><i className="bi bi-play-btn-fill"></i> Video</Form.Label>
                                                <Form.Group as={Col} md="12" controlId="validationCustom09">
                                                    <Form.Control type="text" placeholder="Insert link video" required />
                                                    <Form.Control.Feedback type="invalid">
                                                        Please provide a valid link.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3">
                                                <Form.Check
                                                    required
                                                    label="Agree to terms and conditions"
                                                    feedback="You must agree before submitting."
                                                    feedbackType="invalid"
                                                />
                                            </Form.Group>
                                            <Button type="submit">Submit form</Button>
                                        </Form>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.separator}></div>

        </div>

    );

}

