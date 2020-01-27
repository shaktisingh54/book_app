import React, { Component } from 'react';
import { debounce } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";

import SearchBox from "./SearchBox.js";
import ShowBook from "./ShowBook.js";


import Back from "./pics/Back.svg";
import "./styles/Books.css";
import {BASE_URL} from "./environment.js";


class Books extends Component {
    constructor() {
        super() 
        this.state = {
            keyword : "",
            searchfield : null, 
            rawresults : [],
            results : [],
            results2 : [],
            isLoading : false,
            isLoading2 : false
        };
        
    }
    componentDidMount () {
        const keyword  = this.props.match.params.keyword;

        this.setState({
            keyword : keyword
        })

        fetch(`${BASE_URL}/books?topic=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then((data1) => {
                console.log(data1);
                this.setState({
                    isLoading : true,
                    rawresults : data1,
                    results : data1.results
                });
            })
            .catch((error) => console.log(error));

            window.onscroll = debounce(() => {
                if(this.state.isLoading) {
                    if ( window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                        if(this.state.rawresults.next !== null) {
                            var next = this.state.rawresults.next;
                            console.log(next);
                            fetch(`${next}`)
                                .then(res => {
                                    return res.json();
                                })
                                .then((data2) => {
                                    this.setState({
                                        isLoading2 : true,
                                        rawresults : data2,
                                        results2 : data2.results
                                    });

                                    if(this.state.isLoading2) {

                                        this.setState({
                                            results : this.state.results.concat(this.state.results2)
                                        });
                                    }
                                })
                        }
                    }
                }
              }, 300);
    }

    onSearchChange = debounce((searchfield) => {
        this.setState({ searchfield });

        fetch(`${BASE_URL}/books?search=${this.state.searchfield}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                results : data.results
            })
        });
    }, 500)

    render() {
        if(!this.state.isLoading) {
            return(
                <div className = "load">
                </div>
            )
        
        } else {
            return ( 
                <div>
                    <div className = "position">
                        <div className = "container tagcontainer">
                            <div className = "back" onClick = { () => { this.props.history.push("/") } } >
                                <img className = "backarrow" src = { Back } alt = "Back"/>
                            </div>
                            <div className = "sectionname">
                                { this.state.keyword.toUpperCase() }
                            </div>
                        </div>
                        <div className = "container">
                            <SearchBox searchChange = {event => this.onSearchChange(event.target.value) }/>
                        </div>
                    </div>
                    <div className = "bookbackground">
                        <div className = "container loading">
                            {
                                this.state.results.map((book, index) => {
                                    return (
                                        <div key = {index}>
                                                <ShowBook  data = { book }/>
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
}
 
export default Books;