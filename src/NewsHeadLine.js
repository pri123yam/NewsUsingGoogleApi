import React, { Component } from 'react';
import './App.css';
class NewsHeadLine extends React.Component {
    render() {
        var headline = this.props.headline;
        console.log(headline);
        return (
            <div className='News'>
                {
                    Object.keys(headline).map(id => (
                        <div className='Newsbox'>
                            <img className='img' src={headline[id].urlToImage}/>
                            {headline[id].author}
                            <div>
                                {headline[id].description}
                                </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default NewsHeadLine;