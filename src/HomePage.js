import React, { Component } from 'react';
import CategoryService from './services/category.service'
import { Carousel, Col, Row } from 'react-bootstrap';
import { Chip } from '@material-ui/core';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        CategoryService.getAll().then(res => res.json()).then(categories => {
            this.setState({
                categories
            })
        })
    }
    render() {
        return (
            <div className="my-3">
                <h1>Homepage</h1>
                    <Row>
                        <Col md={6}>
                            <Row className="d-flex justify-content-center">
                                <Col md={6}>
                                    <h4>Shop by categories</h4>
                                    {this.state.categories.map((item, i) => {
                                        return (
                                            <Chip className="mb-1 mr-1" key={i} label={item.name} variant="outlined" clickable />
                                        )
                                    })}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default HomePage
