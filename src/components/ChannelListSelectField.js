import React, { Component } from 'react';
import channelListDataset from '../data/channelInfo.json';


class ChannelListSelectField extends Component {

    constructor() {
        super();

        this.state = {
            currChannel: ''
        };

        this.updateChannel = this.updateChannel.bind(this);

    } // constructor

    updateChannel(evt) {
        evt.preventDefault();
        // console.log('updateChannel called:: ' + evt.target.value);
        // pass the select field value to the event handler passed
        // as a prop by the parent (App)
        this.setState({
            currChannel: evt.target.value
        });
        this.props.partentCurrChannel(evt.target.value);
    } // updateChannel

    render() {

        return (
            <select 
                type="select" 
                id="channel-selector" 
                defaultValue={this.state.currChannel}
                onChange={this.updateChannel}
            >

                <option value="null">Select a Channel</option>
                {
                    channelListDataset.channels.map((obj, i) => {
                        // console.log(obj.channelTitle);
                        var option = <option key={i} value={obj.channelId} >{obj.channelTitle}</option>;
                        return option;
                    })
                }
                {this.option}
                
            </select>
        ); // return
    } // render
} //class ChannelListSelectField

export default ChannelListSelectField;