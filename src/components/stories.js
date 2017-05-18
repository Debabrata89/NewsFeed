import React from 'react';



export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handlePost = this.handlePost.bind(this);

    }
    handleClose() {
        this.props.handleClose();
    }
    handlePost(){
        let header = document.querySelector("#title-input").value;
        let description = document.querySelector("#description-story-input").value;
        this.props.handlePost(header,description);
    }


    render() {
        return (<div className={'popup-cls add-story-top'}>
            <div className={'add-story email-class'}>
                <h4 className="list-header">Create Stories</h4>
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
                            <td> <input type="number" min="-2" max="2" defaultValue="0" id="direction-input" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Rating </td>
                            <td> <input type="number" min="0" max="5" defaultValue="0" id="rating-input" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Score </td>
                            <td> <input type="number" min="-4" max="4" defaultValue="0" id="score-input" />
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
                            <td> <input type="file" id="attachment-input" />
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
                            <td>
                                Tags </td>
                            <td> <input type="text" id="tag-input" />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button onClick={this.handlePost}  id="post-btn" type="button" className="btn btn-primary fa fa-envelope" >&nbsp;Post</button>
                                 <button onClick={this.handleClose} type="button" style={{marginLeft :'10px'}} className="btn btn-danger fa fa-close" >&nbsp;Cancel</button>

                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>);
    }

}

