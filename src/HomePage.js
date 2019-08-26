import React, { Component } from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';

import Categories from './Categories';

export class HomePage extends Component {

    render() {
        return (
            <div className="my-3">
                <h1>Homepage</h1>
                    <Row>
                        <Col md={6}>
                            <Categories />
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default HomePage
