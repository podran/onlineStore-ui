import React, { Component } from 'react';
import productService from './services/product.service'

export class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        productService.getByCategoryId(this.props.match.params.id)
        .then(res => res.json())
        .then(products =>{ 
            console.log(products);
            this.setState({products})})
        .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                {this.state.products.map((product, i) => {
                    return (
                    <div key={i}>
                        {product.title}
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Category;
