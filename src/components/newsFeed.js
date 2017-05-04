import React from 'react';
import axios from 'axios';
import Stories from './Stories';
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
    handlePost(header, description) {
        // console.log(document.querySelector("#title-input").value,document.querySelector("#description-input").value)
        let tempObj = { imgsrc: "images1.jpg" };
        // tempObj.header = document.querySelector("#title-input").value;
        // tempObj.description = document.querySelector("#description-input").value;
        tempObj.header = header;
        tempObj.description = description;

        let tempArr = this.state.feed;
        tempArr.push(tempObj);
        let counterArr = this.state.counterArr.push(0);
        this.setState({ showStoryPopUp: false });
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
                {this.state.showStoryPopUp ? <Stories handlePost={this.handlePost} handleClose={this.handleClose} /> : null}
                {this.props.userType === 'admin' ? <button id="story-btn" type="button" className="btn btn-primary fixed-cls fa fa-pencil" style={{ display: this.state.showPopUp || this.state.showStoryPopUp ? 'none' : 'inline-block' }} onClick={this.handleCreateStories} > &nbsp;Create Stories</button> : null}

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

