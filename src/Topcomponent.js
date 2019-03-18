import React from 'react';
import './App.css';
import globe from './globe.gif';
import Button from './Button';
class Topcomponent extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            time:''
        };
    }
    handleclick=(id)=>{
        //console.log(id);
        this.props.click(id);
    }
    render() {
        var countries = { in: 'INDIA', au: 'AUSTRALIA', nz: 'NEW ZEALAND', ca: 'CANADA', gb: 'UNITED KINGDOM' };
        //console.log(countries);
        return (
            <div className='Top'>
                <div>
                    <img src={globe} alt='globe' />
                </div>
                <div>

                </div>
                <div>
                    {"Select the country you want to see the news"}
                </div>
                <div class="container">
                    <div class="row">
                        {
                            Object.keys(countries).map((id) => (
                                <div class='col'>
                                     <Button click={()=>{this.handleclick(id)}} data={countries[id]}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default Topcomponent;