import React from 'react';
import axios from 'axios';
import Stories from './Stories';
import LeftPane from './LeftPane';
import Detail from './Detail';

export default class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = { feed: [], detailObj: {}, originalFeed: [], showPopUp: false, showDetailPopUp: false, showStoryPopUp: false, readArr: [], importantArr: [], counterArr: [], deleteArr: [] };
        this.handleClose = this.handleClose.bind(this);
        this.handleCreateFeed = this.handleCreateFeed.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleCreateStories = this.handleCreateStories.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.handleDetail = this.handleDetail.bind(this);
        this.handleRowClick = this.handleRowClick.bind(this);
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
    searchHandler(event) {
        console.log("inside search handler", arguments, event.target.value);
        let header = event.target.value;
        let feedArr = [];
        if (header !== "") {
            let originalFeed = this.state.feed.map((feed, index) => {
                return feed;
            });
            this.state.feed.map((feed, index) => {
                if (feed.header.toUpperCase().indexOf(header.toUpperCase()) != -1) {
                    feedArr.push(feed);
                }
            });
            if (this.state.originalFeed.length === 0) {
                this.setState({ originalFeed: originalFeed, feed: feedArr });
            } else {
                this.setState({ feed: feedArr });
            }

        } else {
            this.setState({ feed: this.state.originalFeed });
        }

    }
    changeImportant(index, event) {
        event.stopPropagation();
        let arr = this.state.importantArr;
        arr[parseInt(index)] = !arr[parseInt(index)];
        this.setState({ importantArr: arr });
    }
    changeReadFlag(index, event) {
        event.stopPropagation();


        let arr = this.state.readArr;
        arr[parseInt(index)] = !arr[parseInt(index)];
        this.setState({ readArr: arr });
    }
    decrement(index, event) {
        event.stopPropagation();
        let arr = this.state.counterArr;
        arr[parseInt(index)] = arr[parseInt(index)] - 1;
        this.setState({ counterArr: arr });
    }
    handleDelete(index, event) {
        event.stopPropagation();
        let arr = this.state.deleteArr;
        arr[parseInt(index)] = !arr[parseInt(index)];
        this.setState({ deleteArr: arr });
    }
    increment(index, event) {
        event.stopPropagation();
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
        this.setState({ showPopUp: false, showStoryPopUp: false, showDetailPopUp: false })
    }
    handleCreateFeed() {
        this.setState({ showPopUp: true });
    }
    handleCreateStories() {
        this.setState({ showStoryPopUp: true });
    }
    handleRowClick(event) {
        console.log("inside handle detail", event.target.id);
        let rowObj = {};
        for (let [index, feed] of this.state.feed.entries()) {
            console.log("inside handlerowclick", index, feed);
            if (event.currentTarget.id == index) {
                rowObj = feed;
                break;
            }
        }
        let arr = this.state.readArr;
        arr[parseInt(event.currentTarget.id)] = true;
        this.setState({ readArr: arr, showDetailPopUp: true, detailObj: rowObj });
    }
    handleDetail(event) {

    }

    render() {
        return (
            <div className="row">
                {!this.state.showStoryPopUp && !this.state.showDetailPopUp ? <div className="header row"><div className='col-md-2'>TradeX</div>
                    <div className="col-md-10 float-right fa fa-search"><input className="search-cls" onChange={this.searchHandler} />
                    </div></div> : null}
                {!this.state.showStoryPopUp && !this.state.showDetailPopUp ? <LeftPane userType={this.props.userType} handleCreateStories={this.handleCreateStories} /> : null}

                <div id="main-content" className={this.state.showStoryPopUp || this.state.showDetailPopUp ? "email-class lis-cls col-md-12" : "email-class lis-cls col-md-10 float-right"}>

                    {this.state.showStoryPopUp ? <Stories handlePost={this.handlePost} handleClose={this.handleClose} /> : null}
                    {this.state.showDetailPopUp ? <Detail data={this.state.detailObj} handleClose={this.handleClose} /> : null}
                    {/*this.props.userType === 'analyst' ? <button id="story-btn" type="button" className="btn btn-primary fixed-cls fa fa-pencil" style={{ display: this.state.showPopUp || this.state.showStoryPopUp ? 'none' : 'inline-block' }} onClick={this.handleCreateStories} > &nbsp;Create Stories</button> : null*/}

                    {this.state.feed.map((feed, index) => {
                        return (<div onClick={this.handleRowClick} key={index} id={index} className={this.state.showPopUp || this.state.showStoryPopUp ? 'row row-feed hide-cls' : this.state.deleteArr[index] ? 'row row-feed hide-cls' : 'row row-feed'} >
                            <h4 className="list-header">{feed.header}</h4>
                            <img className="img-cls" src={"src/img/" + feed.imgsrc} alt="Smiley face" height="40" width="40" />
                            <span className="feed-text">{feed.description}</span>
                            <div className="row">
                                <div className="col-md-1">
                                    <span className={this.state.readArr[index] ? "fa fa-check-circle" : ""}></span>
                                </div>
                                <div className="col-md-1">
                                    {this.props.userType !== 'analyst' ?
                                        <div className="pull-right" id="voteDiv">
                                            <div className="fa fa-arrow-up display-block-cls" onClick={this.increment.bind(this, index)}></div>
                                            <div className={this.state.counterArr[index] == 0 ? "vote-cls" : this.state.counterArr[index] > 0 ? "vote-cls upvote" : "vote-cls downvote"}>
                                                {this.state.counterArr[index]}
                                            </div>
                                            <div className="fa fa-arrow-down display-block-cls" onClick={this.decrement.bind(this, index)}> </div>
                                        </div> : null}
                                </div>
                                <div className="col-md-8">
                                    {this.props.userType !== 'analyst' ? <button id="read" className="btn btn-success fa fa-pencil" onClick={this.changeReadFlag.bind(this, index)}>&nbsp;Read </button> : null}
                                    {this.props.userType === 'analyst' ? <button id="delete" className="btn btn-danger fa fa-trash-o" onClick={this.handleDelete.bind(this, index)}>&nbsp;Delete </button> : null}
                                    {this.props.userType !== 'analyst' ? <button id="important" className="btn btn-primary fa fa-exclamation" onClick={this.changeImportant.bind(this, index)}>&nbsp;Important </button> : null}
                                </div>
                            </div>
                            <hr className={this.state.importantArr[index] ? 'imp-cls' : 'hr-cls'} />
                        </div>)
                    })}
                </div>
            </div>
        );
    }

}

