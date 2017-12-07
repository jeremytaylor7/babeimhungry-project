import React, { Component } from 'react'
import ListItem from './ListItem';
import './ListItem.css';
import firebase from './fire';
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choices: []
    }
  }
  componentDidMount() {
    const ref = firebase.database().ref('users/' + this.props.user.uid + '/choices')
      .on('value', snap => {
        const val = snap.val();
        if (this.refs.ref) {
          const list = [];
          snap.forEach(item => {
            list.push(item.val());
          })
          this.setState({ choices: list });


        }
      })
  }
  render() {
    return (

      <div className="list-container container" ref="ref">
        {this.state.choices.map(item => {
          return <ListItem choice={item.restaurant} time={item.date} ref={item} />
        })}
      </div>
    )
  }
}