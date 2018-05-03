import React, { Component } from 'react';
import VideoList                  from      './VideoList';
import VideoPlayer                from      './VideoPlayer';

const API = 'AIzaSyCGCPzkugxMO3QX09eBxzhqm8Q7SVnFSG4';
const NumResults = 5;

class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultyt: [],
            ChannelId: '',
            searchString: 'Javascript'
        };
        this.clicked = this.clicked.bind(this);
    } // constructor

    clicked() {
         console.log('clicked');
    } // clicked

    updateSearch() {

        var finalURL = "https://www.googleapis.com/youtube/v3/search?key="+API;
        finalURL += (this.state.searchString == '')?'':"&q="+this.state.searchString;
        finalURL += (this.state.ChannelId == '')?'':"&channelId="+this.state.ChannelId;
        finalURL += "&part=snippet,id&order=date&maxReults="+NumResults;
        

        console.log(finalURL);

        fetch(finalURL)
        .then((response) => response.json())
        .then((responseJson) => {
            // return responseJson.movies;
            // console.log(responseJson);
            const resultyt = responseJson.items.map(obj => obj);
            this.setState({resultyt});
        })
        .catch((error) => {
            console.error(error);
        });
    } // updateSearch

    componentDidMount() {
        this.updateSearch();
    } // componentDidMount


    render() {

    // console.log(this.state.resultyt)

    // console.log(finalURL);
      return (

        <div>  
            <VideoList resultyt={this.state.resultyt} />
            <VideoPlayer />
        </div>
      ); // return
    } // render
  } // youtube
  
  export default Youtube;
