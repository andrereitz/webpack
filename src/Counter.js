import React from 'react';
import styles from './main.css';
// import { css } from 'emotion';

// const red = 'red';

// const className = css`
//     color: ${red};
//     font-size: 30px;
// `

export default class extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 3
        }
    }
    
    climb(){
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return(
            <div className={styles.counter} onClick={this.climb.bind(this)}>
                <h1>Count: {this.state.count}</h1>
            </div>
        )
    }
}