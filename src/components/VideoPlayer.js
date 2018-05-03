import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor() {
        super();

        this.state = {
            currVideo: 'fju9ii8YsGs'
        };

        this.updateVideo = this.updateVideo.bind(this);
    } // constructor

    updateVideo(evt) {
        // console.log('updateTerm called:: ' + evt.target.value);
        this.setState({
            currTerm: evt.target.value
        });
        // console.log('CurrTerm:: ' + this.state.currTerm);
    } // updateTerm

    changeVideo() {
        const youtubeLink = "https://www.youtube.com/embed/" + this.state.currVideo;
        document.getElementById('youtube-player').src = youtubeLink;
    } // changeVideo

    componentDidMount() {
        this.changeVideo();
    } //componentDidMount

    render() {
        // console.log('VideoPlayer loaded');   

        return (
            <div className="youtube">
                <iframe 
                    width="560" height="315" id="youtube-player"
                    src=''
                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                </iframe>

            </div>
        ); // return
    } // render
} //class VideoPlayer

export default VideoPlayer;