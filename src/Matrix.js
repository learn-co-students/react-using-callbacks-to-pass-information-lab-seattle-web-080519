import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = { color: ''}
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} sendMyState={this.sendMyState}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  willSetState = (takeThisColor) => {
      this.setState({
        color: takeThisColor
      })
  }
  
  sendMyState = () => {
    return this.state.color
  }


  render() {
    return (
      <div id="app">
        <ColorSelector willSetState={this.willSetState}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
