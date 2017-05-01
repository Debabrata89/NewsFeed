import React from 'react';
import axios from 'axios';
export default class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feed: [], showPopUp: false };
        this.handleClose = this.handleClose.bind(this);
        this.handleCreateFeed = this.handleCreateFeed.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }
    componentWillMount() {
        let self = this;
        axios.get('src/rest/feed.json')
            .then(function (response) {
                self.setState({ feed: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handlePost() {
        // console.log(document.querySelector("#title-input").value,document.querySelector("#description-input").value)
        let tempObj = { imgsrc: "images1.jpg" };
        tempObj.header = document.querySelector("#title-input").value;
        tempObj.description = document.querySelector("#description-input").value;
        let tempArr = this.state.feed;
        tempArr.push(tempObj);
        this.setState({ showPopUp: false });
    }
    handleClose() {
        this.setState({ showPopUp: false })
    }
    handleCreateFeed() {
        this.setState({ showPopUp: true });
    }

    render() {
        return (
            <div className="email-class lis-cls">
                {this.state.showPopUp ? <div className={'popup-cls'}>
                    <div className={'add-feed email-class'}>
                        <img onClick={this.handleClose} className="cross-cls" src="src/img/cross.png" alt="Smiley face" height="35" width="35" />
                        <h4 className="list-header">Create Feed</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Title
                                </td>
                                    <td>
                                        <input type="text" id="title-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Description </td>
                                    <td> <textarea rows="4" cols="50" id="description-input"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><button onClick={this.handlePost} id="post-btn" type="button" className="btn btn-primary" >Post</button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div> : null}
                {this.props.userType==='admin'?<button type="button" className="btn btn-primary btn-cls" style={{ display: this.state.showPopUp ? 'none' : 'block' }} onClick={this.handleCreateFeed}>Create Feed</button> : null}
                {this.state.feed.map((feed, index) => {
                    return (<div key={index} className={'row row-feed'} style={{ display: this.state.showPopUp ? 'none' : 'block' }}>
                        <h4 className="list-header">{feed.header}</h4>
                        <img src={"src/img/" + feed.imgsrc} alt="Smiley face" height="100" width="100" />
                        <span className="feed-text">{feed.description}</span>
                        <hr />
                    </div>)
                })}
            </div>
        );
    }

}

