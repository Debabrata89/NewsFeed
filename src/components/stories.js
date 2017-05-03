import React from 'react';



export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
       
    }
    handleClose(){
        this.props.handleClose();
    }
   
    render() {
        return (<div className={'popup-cls add-story-top'}>
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
                </div>);
    }

}

