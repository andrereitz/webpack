import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="profile">
                <img src={ require('../images/link.jpg') } alt="" />
                <h1>Link's Journal</h1>
                <div className="content">
                    Profile Text
                </div>
            </div>
        )
    }
}