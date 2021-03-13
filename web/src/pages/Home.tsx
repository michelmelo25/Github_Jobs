import React from 'react';
import { Button, Col, Form, FormControl } from 'react-bootstrap';

import Navibar from '../Components/Navibar';


function Home() {
    return (
        <div>
            <Navibar />
            <div className="Pesquisa">
                <Form>
                    <Form.Row className="align-items-center">
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputName">
                                            Job Description
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Filter by title, benefits, companies, expertise" />
                        </Col>
                        <Col sm={3} className="my-1">
                            <Form.Label htmlFor="inlineFormInputGroupUsername">
                                            Location
                            </Form.Label>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Filter by city, state, zip code or coutry" />
                        </Col>
                            <Col xs="auto" className="my-1">
                            <Form.Label htmlFor="inlineFormInputGroupUsername" />
                            <Form.Check type="checkbox" id="autoSizingCheck2" label="Full Time Only" />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Form.Label htmlFor="inlineFormInputGroupUsername" />
                            <Button type="submit" variant="secondary">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
            <div className="">

            </div>
        </div>
    );
}

export default Home;