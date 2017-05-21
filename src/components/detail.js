import React from 'react';



export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
       
    }
    handleClose() {
        this.props.handleClose();
    }
   


    render() {
        return (<div className={'popup-cls'}>
            <div className={'add-story email-class'}>
                <h4 className="list-header">Detail Stories</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Title
                                </td>
                            <td>
                                {this.props.data.header}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Description </td>
                            <td> {this.props.data.description}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td> <button onClick={this.handleClose} type="button" style={{marginLeft :'10px'}} className="btn btn-danger fa fa-close" >&nbsp;Cancel</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>);
    }

}

