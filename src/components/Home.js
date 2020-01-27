import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Image from "./Image.js";

import "./styles/Home.css";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            Data : [
                { i : 1, title: 'Fiction', value: 'fiction'},
                { i : 2, title: 'Philosophy', value: 'philosophy'},
                { i : 3, title: 'Drama', value: 'drama' },
                { i : 4, title: 'History', value: 'history' },
                { i : 5, title: 'Humour', value: 'humour' },
                { i : 6, title: 'Adventure', value: 'adventure' },
                { i : 7, title: 'Politics', value: 'politics' }
            ]
        }
    }
    render() { 
        return ( 
            <div className = "homecontainer">
                <div className = "homesecondary">
                    <div>
                        <div className = "container">
                            <h1 className = "heading">Gutenberg Project</h1>
                            <p className = "subheading">
                                A social cataloging website that allows you to freely search its database of books, annotations,
                                and reviews.
                            </p>
                        </div>
                    </div>
                </div>
                <div className = "tagsbackground">
                    <div className = "container homepagetags">
                                {
                                    this.state.Data.map((data) => {
                                        return(
                                            <div key = {data.i}>
                                                <Image  title = {data.title} value = {data.value} history = {this.props.history} />
                                            </div>
                                        )
                                    })
                                }
                        </div>
                </div>
            </div>
         );
    }
}
 
export default Home;