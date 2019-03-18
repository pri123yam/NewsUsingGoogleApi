import React from 'react';
import './App.css';
class Button extends React.Component{
    render()
    {
        return(
            <button className='Button' onClick={this.props.click}>{this.props.data}</button>
        )
    }
}
export default Button;