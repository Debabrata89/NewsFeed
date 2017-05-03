import React from 'react';
import axios from 'axios';
export default class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feed: [], showPopUp: false, showStoryPopUp: false, readArr: [], importantArr: [], counterArr: [], deleteArr: [] };
        this.handleClose = this.handleClose.bind(this);
        this.handleCreateFeed = this.handleCreateFeed.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleCreateStories = this.handleCreateStories.bind(this);
    }
    componentWillMount() {
        let self = this;
        axios.get('src/rest/feed.json')
            .then(function (response) {
                let counterArr = self.state.counterArr;
                let readArr = self.state.readArr;
                let deleteArr = self.state.deleteArr;
                for (let item of response.data) {
                    counterArr.push(0);
                    readArr.push(false);
                    deleteArr.push(false);
                }
                self.setState({ feed: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    changeImportant(index) {
        let arr = this.state.importantArr;
        arr[parseInt(index)] = !arr[parseInt(index)];
        this.setState({ importantArr: arr });
    }
    changeReadFlag(index) {
        let arr = this.state.readArr;
        arr[parseInt(index)] = !arr[parseInt(index)];
        this.setState({ readArr: arr });
    }
    decrement(index) {
        let arr = this.state.counterArr;
        arr[parseInt(index)] = arr[parseInt(index)] - 1;
        this.setState({ counterArr: arr });
    }
    handleDelete(index) {
        let arr = this.state.deleteArr;
        arr[parseInt(index)] = !arr[parseInt(index)];
        this.setState({ deleteArr: arr });
    }
    increment(index) {
        let arr = this.state.counterArr;
        arr[parseInt(index)] = arr[parseInt(index)] + 1;
        this.setState({ counterArr: arr });
    }
    handlePost() {
        // console.log(document.querySelector("#title-input").value,document.querySelector("#description-input").value)
        let tempObj = { imgsrc: "images1.jpg" };
        tempObj.header = document.querySelector("#title-input").value;
        tempObj.description = document.querySelector("#description-input").value;
        let tempArr = this.state.feed;
        tempArr.push(tempObj);
        let counterArr = this.state.counterArr.push(0);
        this.setState({ showPopUp: false });
    }
    handleClose() {
        this.setState({ showPopUp: false, showStoryPopUp: false })
    }
    handleCreateFeed() {
        this.setState({ showPopUp: true });
    }
    handleCreateStories() {
        this.setState({ showStoryPopUp: true });
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



                {this.state.showStoryPopUp ? <div className={'popup-cls add-story-top'}>
                    <div className={'add-story email-class'}>
                        <img onClick={this.handleClose} className="cross-cls" src="src/img/cross.png" alt="Smiley face" height="35" width="35" />
                        <h4 className="list-header">Create Stories</h4>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Story Id
                                </td>
                                    <td>
                                        <input type="text" id="story-id-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        User Id </td>
                                    <td> <input type="text" id="user-id-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tags </td>
                                    <td> <input type="text" id="tag-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Date Created </td>
                                    <td> <input type="text" id="date-created-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Description </td>
                                    <td> <textarea rows="4" cols="50" id="description-story-input"></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Broker </td>
                                    <td> <input type="text" id="broker-input" />
                                    </td>
                                </tr>
                                 <tr>
                                    <td>
                                        Ticker </td>
                                    <td> <input type="text" id="ticker-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Category </td>
                                    <td> <input type="text" id="category-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Direction </td>
                                    <td> <input type="text" id="direction-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Rating </td>
                                    <td> <input type="text" id="rating-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Score </td>
                                    <td> <input type="text" id="score-input" />
                                    </td>
                                </tr>
                               
                                <tr>
                                    <td>
                                        Significance </td>
                                    <td> <input type="text" id="significance-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Trade Price </td>
                                    <td> <input type="text" id="trade-price-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Pre Trade Price </td>
                                    <td> <input type="text" id="pre-trade-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Attachment </td>
                                    <td> <input type="text" id="attachment-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Links </td>
                                    <td> <input type="text" id="links-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Percentage Change </td>
                                    <td> <input type="text" id="percentage-change-input" />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><button id="post-btn" type="button" className="btn btn-primary" >Post</button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div> : null}



                {this.props.userType === 'admin' ? <button id="story-btn" type="button" className="btn btn-primary fixed-cls" style={{ display: this.state.showPopUp || this.state.showStoryPopUp ? 'none' : 'inline-block' }} onClick={this.handleCreateStories} >Create Stories</button> : null}
                {this.props.userType === 'admin' ? <button id="feed-btn" type="button" className="btn btn-primary fixed-cls" style={{ display: this.state.showPopUp || this.state.showStoryPopUp ? 'none' : 'inline-block' }} onClick={this.handleCreateFeed}>Create Feed</button> : null}

                {this.state.feed.map((feed, index) => {
                    return (<div key={index} id={index} className={this.state.showPopUp || this.state.showStoryPopUp ? 'row row-feed hide-cls' : this.state.deleteArr[index] ? 'row row-feed hide-cls' : 'row row-feed'} >
                        <h4 className="list-header">{feed.header}</h4>
                        <img src={"src/img/" + feed.imgsrc} alt="Smiley face" height="100" width="100" />
                        <span className="feed-text">{feed.description}</span>
                        <div className="row">
                            <div className="col-md-1">
                                <span className={this.state.readArr[index] ? "fa fa-check-circle pull-right" : ""}></span>
                            </div>
                            <div className="col-md-1">
                                <div className="pull-right">
                                    <div className="fa fa-arrow-up display-block-cls" onClick={this.increment.bind(this, index)}></div>
                                    <div className={this.state.counterArr[index] == 0 ? "vote-cls" : this.state.counterArr[index] > 0 ? "vote-cls upvote" : "vote-cls downvote"}>
                                        {this.state.counterArr[index]}
                                    </div>
                                    <div className="fa fa-arrow-down display-block-cls" onClick={this.decrement.bind(this, index)}> </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <button id="read" className="btn btn-success fa fa-pencil" onClick={this.changeReadFlag.bind(this, index)}>&nbsp;Read </button>
                                <button id="delete" className="btn btn-danger fa fa-trash-o" onClick={this.handleDelete.bind(this, index)}>&nbsp;Delete </button>
                                <button className="btn btn-primary fa fa-exclamation" onClick={this.changeImportant.bind(this, index)}>&nbsp;Important </button>
                            </div>
                        </div>
                        <hr className={this.state.importantArr[index] ? 'imp-cls' : 'hr-cls'} />
                    </div>)
                })}
            </div>
        );
    }

}

