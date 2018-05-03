import React, { Component } from 'react';

class VideoList extends Component {

    constructor(props) {
        super(props);
    } // constructor

    render() {
        //console.log('VideoList loaded');   

        return (

            <div className="youtube-list">
            <ul>
            {
                this.props.resultyt.map((obj, i) => {
                    //console.log(obj.snippet.title);
                    var item = <li key={i} className="youtube-item">
                        <a href="#" id={obj.id.videoId}>
                            <img src={obj.snippet.thumbnails.default.url} alt={obj.snippet.title} /><br />
                            {obj.snippet.title}
                        </a>
                    </li>
                    ;
                    return item;
                })
            }
            {this.item}
            </ul>
            </div>
        ); // return
    } // render
} //class VideoList

export default VideoList;