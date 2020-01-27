import React, { Component } from 'react';

import Adventure from "./pics/Adventure.svg";
import Drama from "./pics/Drama.svg";
import Fiction from "./pics/Fiction.svg";
import History from "./pics/History.svg";
import Humour from "./pics/Humour.svg";
import Philosophy from "./pics/Philosophy.svg";
import Politics from "./pics/Politics.svg";
import Next from "./pics/Next.svg";

import "./styles/Image.css";

class Image extends Component {
    state = {  }

    toNextPage = (value) => (events) => {
        this.props.history.push(`/books/${value}`);
    }

    getIcon = (iconValue) => {
        switch (iconValue) {
          case 'fiction':
            return Fiction;
          case 'philosophy':
            return Philosophy;
          case 'drama':
            return Drama;
          case 'history':
            return History;
          case 'humour':
            return Humour;
          case 'adventure':
            return Adventure;
          default:
            return Politics;
        }
    };

    render() { 
        return ( 
            <div className = "imagecontainer">
              <div className = "tags" onClick = { this.toNextPage(this.props.value) }>
                  <div className = "">
                          <img className = "icon" src = { this.getIcon(this.props.value) } alt = { this.props.value } />
                  </div>
                  <div className = "title">
                          { this.props.title } 
                  </div>
                  <div className = "next">
                      <img src = { Next } alt = "next"/>
                  </div>
              </div>
            </div>
         );
    }
}
 
export default Image;