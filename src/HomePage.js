import React, { Component } from 'react';
import CategoryService from './services/category.service'

export class HomePage extends Component {
    componentDidMount(){
        CategoryService.getAll().then(res => res.json()).then(categories => {
            this.setState({
                categories
            })
        })
    }
    render() {
        return (
            <div>
                <h1>
                    Homepage
                </h1>
            </div>
        )
    }
}

export default HomePage
