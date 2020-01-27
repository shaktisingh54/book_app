import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "./pics/default.png";

import"./styles/ShowBook.css";

const ShowBook = (props) => {
    var image = props.data.formats["image/jpeg"];
    if(image === undefined) {
        image = Image;
    }
    if(props.data.authors[0] === undefined) {
        props.data.authors[0] = { name : "Unknown" }
    }
    const length = props.data.title.length;
    if(length > 35) {
        var name = props.data.title;
        name = name.substring(0, 40);
        name = name + "...";
        props.data.title = name;
    }
        function check(book) {
            var htmlType1 = book["text/html; charset=us-ascii"];
            const htmlType2 = book["text/html; charset=utf-8"];
            const pdfType = book["application/pdf"];
            const txtType = book["text/plain"];
    
            if(htmlType1 !== undefined) {
                const ifzip1 = htmlType1.match(/zip/gi);
                if(ifzip1 === null) {
                    window.open(htmlType1);
                    console.log("Via htmlType1");
                } else if(pdfType !== undefined) {
                    const ifzip3 = pdfType.match(/zip/gi);
                    if(ifzip3 === null) {
                        window.open(pdfType);
                        console.log("Via pdfType");
                    } else if(txtType !== undefined) {
                        window.open(txtType);
                        console.log("Via txtType");
                    } else {
                        alert("The Book you requested is not available");
                    }
                } else if(txtType !== undefined){
                    window.open(txtType);
                    console.log("Via txtType");
                } else {
                    alert("The Book you requested is not available");
                }
            } else if(htmlType2 !== undefined ) {
                const ifzip2 = htmlType2.match(/zip/gi);
                if(ifzip2 === null) {
                    window.open(htmlType2);
                    console.log("Via htmlType2");
                } else if(pdfType !== undefined) {
                    const ifzip4 = pdfType.match(/zip/gi);
                    if(ifzip4 === null){
                        window.open(pdfType);
                        console.log("Via pdfType");
                    } else if(txtType !== undefined) {
                        window.open(txtType);
                        console.log("Via txtType");
                    } else {
                        alert("The Book you requested is not available");
                    }
                } else if(txtType !== undefined){
                    window.open(txtType);
                    console.log("Via txttype");
                } else {
                    alert("The Book you requested is not available");
                }
            } else if(pdfType !== undefined){
                const ifzip5 = pdfType.match(/zip/gi);
                if(ifzip5 === null) {
                    window.open(pdfType);
                    console.log("Via pdfType");
                } else if(txtType !== undefined){
                    window.open(txtType);
                    console.log("Via txttype");
                } else {
                    alert("The Book you requested is not available");
                }
            } else if(txtType !== undefined){
                window.open(txtType);
                console.log("Via txttype");
            } else {
                alert("The Book you requested is not available");
            }
        }
            return(
                <div className = "bookcontainer">
                    <div className = "container box">
                        <div className = "showbook">
                            <div className = "bookalign">
                                <div onClick = {() => {check(props.data.formats)}}>
                                    <img className = "bookcover" src = { image } alt = ""/>
                                </div>
                            </div>
                            <div className = "titleofbook">
                                { props.data.title }
                            </div>
                            <div className = "authorname">
                                { props.data.authors[0].name }
                            </div>
                        </div>
                    </div>
                </div>
            );
    }

export default ShowBook;