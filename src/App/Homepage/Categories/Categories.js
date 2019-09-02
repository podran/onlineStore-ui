import React, { Component } from 'react';
import CategoryService from '../../../services/category.service';
import { Chip } from '@material-ui/core';
import { Carousel, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

export class Categories extends Component {
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
            <Row className="d-flex justify-content-center">
                <Col md={6}>
                    <h4>Shop by categories</h4>
                    {this.state.categories.map((item, i) => {
                        return (
                            <Link key={i} to={'/category/' + item.id}>
                                <Chip className="mb-1 mr-1" label={item.name} variant="outlined" clickable />
                            </Link>
                        )
                    })}
                </Col>
            </Row>
        )
    }
}

export default Categories
