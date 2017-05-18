import React from 'react';



export default class LeftPane extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreate=this.handleCreate.bind(this);
    }
    handleCreate(){
        this.props.handleCreateStories();
    }
    render() {
        return (<div className="left-pane col-md-2">
              {this.props.userType==='admin' ? <div id="story-btn"  onClick={this.handleCreate} className="btn btn-danger fa fa-pencil" > &nbsp;Create Stories</div>:null}

        </div>);
    }

}

