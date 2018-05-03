import React, { Component }         from      'react';
import ChannelListSelectField       from      './ChannelListSelectField';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            currChannel: '',
            currTerm: ''
        };

        this.updateTerm = this.updateTerm.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.handleChildData = this.handleChildData.bind(this);
    } // constructor

    updateTerm(evt) {
        // console.log('updateTerm called:: ' + evt.target.value);
        this.setState({
            currTerm: evt.target.value
        });
        // console.log('CurrTerm:: ' + this.state.currTerm);
    } // updateTerm
  
    handleChildData(data) {
        // console.log('Parnent currChannel called:: ' + data);
        this.setState({
            currChannel: data
        });
    } // handleChildData

    updateSearch(evt) {
        console.log('currChannel:: ' + this.state.currChannel);
        console.log('CurrTerm:: ' + this.state.currTerm);
    } // updateSearch

    render() {
        //console.log('Form loaded');   

        return (
            <div className="form-container">
                <input 
                    type="text" 
                    placeholder="Search Youtube" 
                    id="search-string"
                    value={this.state.currTerm}
                    onChange={this.updateTerm}
                />
                <ChannelListSelectField partentCurrChannel={this.handleChildData} />
                <button onClick={this.updateSearch}>Get YouTube Videos</button>
            </div>
        ); // return
    } // render
} //class Form

export default Form;