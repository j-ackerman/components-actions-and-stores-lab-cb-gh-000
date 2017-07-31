import React, { Component } from 'react'

export default class BandInput extends Component {

  onSubmit(event){
      event.preventDefault();
      this.props.store.dispatch({type: 'ADD_BAND', payload: {title: event.target.children[1].value}})
  }

  render(){
    return(
      <div>
        <form onsubmit={this.onSubmit.bind(this)}>
            <label>Enter Band: </label>
            <input />
            <button type="submit">Submit</button>
        </form>
        <h1>Bands</h1>
        <ul>
          {this.props.store.getState().map((band, i) => <BandIndex band={band} />)}
        </ul>
      </div>
    );
  }
}
